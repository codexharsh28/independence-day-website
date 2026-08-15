const https = require('https');
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const historyDir = path.join(projectRoot, 'public/images/history');
const heritageDir = path.join(projectRoot, 'public/images/heritage');
const modernDir = path.join(projectRoot, 'public/images/modern');

const pagesToFetch = [
  { page: 'Chandrasekhar_Azad', dest: path.join(historyDir, 'chandrashekhar-azad.jpg') },
  { page: 'Rani_of_Jhansi', dest: path.join(historyDir, 'rani-lakshmibai.jpg') },
  { page: 'Ram_Prasad_Bismil', dest: path.join(historyDir, 'ram-prasad-bismil.jpg') },
  { page: 'Ashfaqulla_Khan', dest: path.join(historyDir, 'ashfaqulla-khan.jpg') },
  { page: 'Salt_March', dest: path.join(historyDir, 'salt-march-1930.jpg') },
  { page: 'Quit_India_Movement', dest: path.join(historyDir, 'quit-india-1942.jpg') },
  { page: 'Jallianwala_Bagh_massacre', dest: path.join(historyDir, 'jallianwala-1919.jpg') },
  { page: 'Indian_National_Army', dest: path.join(historyDir, 'ina-1943.jpg') },
  { page: 'Sabarmati_Ashram', dest: path.join(heritageDir, 'sabarmati-ashram.jpg') },
  { page: 'Cellular_Jail', dest: path.join(heritageDir, 'cellular-jail.jpg') },
  { page: 'Raj_Ghat_and_other_memorials', dest: path.join(heritageDir, 'rajghat.jpg') },
  { page: 'Chandrayaan-3', dest: path.join(modernDir, 'isro-space.jpg') },
  { page: 'Indian_Independence_Act_1947', dest: path.join(historyDir, 'crowd-1947.jpg') },
  { page: 'Red_Fort', dest: path.join(historyDir, 'red-fort-1947.jpg') }
];

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'IndianIndependenceArchive/1.0 (historical.education@bharat1947.in)',
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadBinary(url, dest) {
  return new Promise((resolve) => {
    function get(curUrl, hops = 0) {
      if (hops > 6) return resolve(false);
      https.get(curUrl, {
        headers: {
          'User-Agent': 'IndianIndependenceArchive/1.0 (historical.education@bharat1947.in)',
          'Accept': 'image/avif,image/webp,image/apng,image/jpeg,image/*,*/*;q=0.8'
        }
      }, res => {
        if ([301, 302, 303, 307, 308].includes(res.statusCode)) {
          return get(res.headers.location, hops + 1);
        }
        if (res.statusCode !== 200) {
          console.error(`Status ${res.statusCode} for ${curUrl}`);
          return resolve(false);
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          const stats = fs.statSync(dest);
          if (stats.size > 2000) {
            console.log(`✓ Downloaded ${path.basename(dest)} (${(stats.size / 1024).toFixed(1)} KB)`);
            resolve(true);
          } else {
            resolve(false);
          }
        });
      }).on('error', err => {
        console.error(`Error for ${curUrl}:`, err.message);
        resolve(false);
      });
    }
    get(url);
  });
}

async function run() {
  for (const item of pagesToFetch) {
    try {
      console.log(`Querying page ${item.page}...`);
      const data = await fetchJSON(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(item.page)}`);
      const imgUrl = (data.originalimage && data.originalimage.source) || (data.thumbnail && data.thumbnail.source);
      if (imgUrl) {
        console.log(`Found image: ${imgUrl}`);
        const ok = await downloadBinary(imgUrl, item.dest);
        if (!ok && data.thumbnail && data.thumbnail.source && data.thumbnail.source !== imgUrl) {
          await downloadBinary(data.thumbnail.source, item.dest);
        }
      } else {
        console.warn(`No image found in summary for ${item.page}`);
      }
    } catch (e) {
      console.error(`Failed ${item.page}:`, e.message);
    }
    await new Promise(r => setTimeout(r, 1000));
  }
}

run();
