const https = require('https');
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const historyDir = path.join(projectRoot, 'public/images/history');
const heritageDir = path.join(projectRoot, 'public/images/heritage');

const pages = [
  { page: 'Vallabhbhai_Patel', dest: path.join(historyDir, 'sardar-patel.jpg') },
  { page: 'Jallianwala_Bagh', dest: path.join(heritageDir, 'jallianwala-bagh.jpg') },
  { page: 'First_Indian_National_Anthem_Performance', dest: path.join(historyDir, 'crowd-1947.jpg') },
  { page: 'Purna_Swaraj', dest: path.join(historyDir, 'crowd-1947.jpg') }
];

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: { 'User-Agent': 'IndianIndependenceArchive/1.0 (historical.education@bharat1947.in)' }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
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
        if (res.statusCode !== 200) return resolve(false);
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
      }).on('error', () => resolve(false));
    }
    get(url);
  });
}

async function run() {
  for (const item of pages) {
    try {
      const data = await fetchJSON(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(item.page)}`);
      const imgUrl = (data.originalimage && data.originalimage.source) || (data.thumbnail && data.thumbnail.source);
      if (imgUrl) {
        await downloadBinary(imgUrl, item.dest);
      }
    } catch (e) {
      console.error(e.message);
    }
    await new Promise(r => setTimeout(r, 600));
  }
}

run();
