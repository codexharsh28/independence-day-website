const https = require('https');
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const historyDir = path.join(projectRoot, 'public/images/history');
const heritageDir = path.join(projectRoot, 'public/images/heritage');
const modernDir = path.join(projectRoot, 'public/images/modern');

[historyDir, heritageDir, modernDir].forEach(d => fs.mkdirSync(d, { recursive: true }));

const sources = [
  {
    name: 'chandrashekhar-azad.jpg',
    dir: historyDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Chandrashekhar_Azad.jpg/800px-Chandrashekhar_Azad.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/ea/Chandrashekhar_Azad.jpg'
    ]
  },
  {
    name: 'rani-lakshmibai.jpg',
    dir: historyDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Rani_Lakshmibai_of_Jhansi_1857.jpg/800px-Rani_Lakshmibai_of_Jhansi_1857.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/30/Rani_Lakshmibai_of_Jhansi_1857.jpg'
    ]
  },
  {
    name: 'ram-prasad-bismil.jpg',
    dir: historyDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ram_Prasad_Bismil.jpg/800px-Ram_Prasad_Bismil.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/87/Ram_Prasad_Bismil.jpg'
    ]
  },
  {
    name: 'ashfaqulla-khan.jpg',
    dir: historyDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Ashfaqulla_Khan.jpg/800px-Ashfaqulla_Khan.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/82/Ashfaqulla_Khan.jpg'
    ]
  },
  {
    name: 'salt-march-1930.jpg',
    dir: historyDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Gandhi_during_Salt_March.jpg/1280px-Gandhi_during_Salt_March.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/d/d7/Gandhi_during_Salt_March.jpg'
    ]
  },
  {
    name: 'crowd-1947.jpg',
    dir: historyDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Crowd_at_India_Gate_on_15_August_1947.jpg/1280px-Crowd_at_India_Gate_on_15_August_1947.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Crowd_at_India_Gate_on_15_August_1947.jpg'
    ]
  },
  {
    name: 'red-fort-1947.jpg',
    dir: historyDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Independence_Day_Celebration%2C_August_15%2C_1947.jpg/1280px-Independence_Day_Celebration%2C_August_15%2C_1947.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/4e/Independence_Day_Celebration%2C_August_15%2C_1947.jpg'
    ]
  },
  {
    name: 'quit-india-1942.jpg',
    dir: historyDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Quit_India_movement_1942.jpg/1280px-Quit_India_movement_1942.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/31/Quit_India_movement_1942.jpg'
    ]
  },
  {
    name: 'jallianwala-1919.jpg',
    dir: historyDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jallianwala_Bagh_bullet_marks.jpg/1280px-Jallianwala_Bagh_bullet_marks.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/a/a9/Jallianwala_Bagh_bullet_marks.jpg'
    ]
  },
  {
    name: 'ina-1943.jpg',
    dir: historyDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Subhas_Chandra_Bose_with_INA_soldiers.jpg/1280px-Subhas_Chandra_Bose_with_INA_soldiers.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Subhas_Chandra_Bose_with_INA_soldiers.jpg'
    ]
  },
  {
    name: 'red-fort-delhi.jpg',
    dir: heritageDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Delhi_Fort.jpg/1280px-Delhi_Fort.jpg',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920&q=85&auto=format&fit=crop'
    ]
  },
  {
    name: 'sabarmati-ashram.jpg',
    dir: heritageDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hriday_Kunj%2C_Sabarmati_Ashram.jpg/1280px-Hriday_Kunj%2C_Sabarmati_Ashram.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/87/Hriday_Kunj%2C_Sabarmati_Ashram.jpg'
    ]
  },
  {
    name: 'cellular-jail.jpg',
    dir: heritageDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Cellular_Jail_Port_Blair.jpg/1280px-Cellular_Jail_Port_Blair.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Cellular_Jail_Port_Blair.jpg'
    ]
  },
  {
    name: 'jallianwala-bagh.jpg',
    dir: heritageDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Jallianwala_Bagh_memorial.jpg/1280px-Jallianwala_Bagh_memorial.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/Jallianwala_Bagh_memorial.jpg'
    ]
  },
  {
    name: 'rajghat.jpg',
    dir: heritageDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Raj_Ghat_memorial.jpg/1280px-Raj_Ghat_memorial.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/7/7b/Raj_Ghat_memorial.jpg'
    ]
  },
  {
    name: 'india-gate.jpg',
    dir: heritageDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/India_Gate_in_New_Delhi_03-2016.jpg/1280px-India_Gate_in_New_Delhi_03-2016.jpg',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920&q=85&auto=format&fit=crop'
    ]
  },
  {
    name: 'isro-space.jpg',
    dir: modernDir,
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/LVM3-M4_Chandrayaan-3_Launch.jpg/1280px-LVM3-M4_Chandrayaan-3_Launch.jpg',
      'https://images.unsplash.com/photo-1517976487063-470295da9e2d?w=1920&q=85&auto=format&fit=crop'
    ]
  },
  {
    name: 'digital-india.jpg',
    dir: modernDir,
    urls: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85&auto=format&fit=crop'
    ]
  },
  {
    name: 'green-energy.jpg',
    dir: modernDir,
    urls: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1920&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=85&auto=format&fit=crop'
    ]
  }
];

function fetchWithRedirect(url) {
  return new Promise((resolve, reject) => {
    function get(currentUrl, hops = 0) {
      if (hops > 6) return reject(new Error('Too many redirects'));
      const u = new URL(currentUrl);
      const isHttps = u.protocol === 'https:';
      const lib = isHttps ? https : require('http');

      const req = lib.get(currentUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        }
      }, (res) => {
        if ([301, 302, 303, 307, 308].includes(res.statusCode)) {
          let nextUrl = res.headers.location;
          if (!nextUrl.startsWith('http')) {
            nextUrl = `${u.protocol}//${u.host}${nextUrl}`;
          }
          return get(nextUrl, hops + 1);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        const chunks = [];
        res.on('data', chunk => chunks.push(chunk));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      });

      req.on('error', reject);
      req.setTimeout(12000, () => {
        req.destroy();
        reject(new Error('Timeout'));
      });
    }
    get(url);
  });
}

async function downloadAll() {
  for (const item of sources) {
    const dest = path.join(item.dir, item.name);
    let success = false;
    for (const url of item.urls) {
      try {
        console.log(`Downloading ${item.name} from ${url}...`);
        const buffer = await fetchWithRedirect(url);
        if (buffer.length > 5000) {
          fs.writeFileSync(dest, buffer);
          console.log(`✓ Saved ${item.name} (${(buffer.length / 1024).toFixed(1)} KB)`);
          success = true;
          break;
        } else {
          console.log(`✕ Buffer too small for ${item.name}: ${buffer.length} bytes`);
        }
      } catch (err) {
        console.log(`✕ Failed ${url}: ${err.message}`);
      }
      // Brief pause between requests to prevent rate limiting
      await new Promise(r => setTimeout(r, 600));
    }
    if (!success) {
      console.warn(`⚠️ Could not download ${item.name} from any source.`);
    }
  }
}

downloadAll();
