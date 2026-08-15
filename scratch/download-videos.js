const https = require('https');
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const videoDir = path.join(projectRoot, 'public/videos');

const videoList = [
  {
    name: 'freedom-struggle.mp4',
    urls: [
      'https://archive.org/download/india_independence_newsreel/india_independence.mp4',
      'https://assets.mixkit.co/videos/preview/mixkit-crowd-protesting-in-the-streets-41617-large.mp4',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
    ]
  },
  {
    name: 'isro-launch.mp4',
    urls: [
      'https://images-assets.nasa.gov/video/KSC-20221116-MH-KLS01-0001-Artemis_I_Launch-3323067/KSC-20221116-MH-KLS01-0001-Artemis_I_Launch-3323067~orig.mp4',
      'https://assets.mixkit.co/videos/preview/mixkit-rocket-taking-off-into-the-sky-41480-large.mp4',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
    ]
  }
];

function download(url, dest) {
  return new Promise((resolve) => {
    function get(curUrl, hops = 0) {
      if (hops > 6) return resolve(false);
      const isHttps = curUrl.startsWith('https');
      const lib = isHttps ? https : require('http');

      lib.get(curUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept': 'video/webm,video/mp4,video/*;q=0.9,*/*;q=0.8'
        }
      }, res => {
        if ([301, 302, 303, 307, 308].includes(res.statusCode)) {
          return get(res.headers.location, hops + 1);
        }
        if (res.statusCode !== 200 && res.statusCode !== 206) {
          console.log(`Failed HTTP ${res.statusCode} for ${curUrl}`);
          return resolve(false);
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          const stats = fs.statSync(dest);
          if (stats.size > 50000) {
            console.log(`✓ Successfully downloaded ${path.basename(dest)} (${(stats.size / (1024 * 1024)).toFixed(2)} MB)`);
            resolve(true);
          } else {
            console.log(`✕ File too small: ${stats.size} bytes`);
            resolve(false);
          }
        });
      }).on('error', err => {
        console.log(`✕ Error: ${err.message}`);
        resolve(false);
      });
    }
    get(url);
  });
}

async function run() {
  for (const item of videoList) {
    const dest = path.join(videoDir, item.name);
    let ok = false;
    for (const u of item.urls) {
      console.log(`Trying ${item.name} from ${u}...`);
      ok = await download(u, dest);
      if (ok) break;
      await new Promise(r => setTimeout(r, 600));
    }
    if (!ok) {
      console.warn(`Could not download ${item.name}`);
    }
  }
}

run();
