const fs = require('fs');
const path = require('path');
const https = require('https');

const projectRoot = path.join(__dirname, '..');
const historyDir = path.join(projectRoot, 'public/images/history');
const heritageDir = path.join(projectRoot, 'public/images/heritage');
const modernDir = path.join(projectRoot, 'public/images/modern');

[historyDir, heritageDir, modernDir].forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
});

const imageSources = [
  // Freedom Fighters
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Bhagat_Singh_1929.jpg',
    dest: path.join(historyDir, 'bhagat-singh.jpg'),
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Chandrashekhar_Azad.jpg',
    dest: path.join(historyDir, 'chandrashekhar-azad.jpg'),
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Subhas_Chandra_Bose_NRB.jpg',
    dest: path.join(historyDir, 'netaji-bose.jpg'),
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Sardar_patel_%28cropped%29.jpg',
    dest: path.join(historyDir, 'sardar-patel.jpg'),
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg',
    dest: path.join(historyDir, 'mahatma-gandhi.jpg'),
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Rani_of_jhansi.jpg',
    dest: path.join(historyDir, 'rani-lakshmibai.jpg'),
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Ram_Prasad_Bismil.jpg',
    dest: path.join(historyDir, 'ram-prasad-bismil.jpg'),
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Ashfaqulla_Khan.jpg',
    dest: path.join(historyDir, 'ashfaqulla-khan.jpg'),
  },

  // Historical Events
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Gandhi_during_Salt_March.jpg',
    dest: path.join(historyDir, 'salt-march-1930.jpg'),
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Crowd_at_India_Gate_on_15_August_1947.jpg',
    dest: path.join(historyDir, 'crowd-1947.jpg'),
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Independence_Day_Celebration%2C_August_15%2C_1947.jpg',
    dest: path.join(historyDir, 'red-fort-1947.jpg'),
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Quit_India_movement_1942.jpg',
    dest: path.join(historyDir, 'quit-india-1942.jpg'),
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Jallianwala_Bagh_bullet_marks.jpg',
    dest: path.join(historyDir, 'jallianwala-1919.jpg'),
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Subhas_Chandra_Bose_with_INA_soldiers.jpg',
    dest: path.join(historyDir, 'ina-1943.jpg'),
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Gandhi_spinning.jpg',
    dest: path.join(historyDir, 'non-cooperation.jpg'),
  },
];

function downloadFile(url, dest) {
  return new Promise((resolve) => {
    const request = (currentUrl, redirectCount = 0) => {
      if (redirectCount > 5) {
        console.error(`Too many redirects for ${currentUrl}`);
        return resolve(false);
      }

      const options = {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 IndiaIndependenceHistory/1.0',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        }
      };

      https.get(currentUrl, options, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 303 || res.statusCode === 307 || res.statusCode === 308) {
          const redirectUrl = res.headers.location;
          return request(redirectUrl, redirectCount + 1);
        }

        if (res.statusCode !== 200) {
          console.error(`Failed to download ${currentUrl}: HTTP ${res.statusCode}`);
          return resolve(false);
        }

        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          const stats = fs.statSync(dest);
          if (stats.size < 1000) {
            console.warn(`Warning: downloaded file ${path.basename(dest)} is only ${stats.size} bytes`);
            return resolve(false);
          }
          console.log(`Successfully downloaded ${path.basename(dest)} (${stats.size} bytes)`);
          resolve(true);
        });
      }).on('error', (err) => {
        console.error(`Error downloading ${currentUrl}:`, err.message);
        resolve(false);
      });
    };

    request(url);
  });
}

async function run() {
  console.log('Starting download of archival photographs...');
  for (const item of imageSources) {
    await downloadFile(item.url, item.dest);
  }
  console.log('Done downloading.');
}

run();
