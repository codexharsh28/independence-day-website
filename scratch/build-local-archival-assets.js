const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const historyDir = path.join(projectRoot, 'public/images/history');
const heritageDir = path.join(projectRoot, 'public/images/heritage');
const modernDir = path.join(projectRoot, 'public/images/modern');

[historyDir, heritageDir, modernDir].forEach(d => fs.mkdirSync(d, { recursive: true }));

function generateDocumentarySceneSVG(title, year, subtitle, archive, primaryAccent, secondaryAccent, iconType) {
  let iconMarkup = '';
  if (iconType === 'flag') {
    iconMarkup = `
      <g transform="translate(600, 360)">
        <line x1="-120" y1="-80" x2="-120" y2="120" stroke="#FF9933" stroke-width="4"/>
        <rect x="-120" y="-80" width="160" height="30" fill="#FF9933" opacity="0.9"/>
        <rect x="-120" y="-50" width="160" height="30" fill="#FFFFFF" opacity="0.95"/>
        <rect x="-120" y="-20" width="160" height="30" fill="#138808" opacity="0.9"/>
        <circle cx="-40" cy="-35" r="10" fill="none" stroke="#000080" stroke-width="1.5"/>
      </g>
    `;
  } else if (iconType === 'crowd') {
    iconMarkup = `
      <g transform="translate(600, 360)" fill="${primaryAccent}" opacity="0.4">
        ${Array.from({length: 15}).map((_, i) => `<circle cx="${(i - 7) * 35}" cy="${Math.sin(i) * 15}" r="${12 + (i % 3) * 4}" fill="${i % 2 === 0 ? primaryAccent : '#FFFFFF'}"/>`).join('')}
      </g>
    `;
  } else if (iconType === 'march') {
    iconMarkup = `
      <g transform="translate(600, 360)" stroke="${primaryAccent}" fill="none" stroke-width="2" opacity="0.6">
        <path d="M -80 60 L -40 -20 L 0 60 M -40 -20 L 40 40 L 80 -40"/>
        <circle cx="-40" cy="-35" r="14" fill="${primaryAccent}"/>
        <line x1="-20" y1="-40" x2="60" y2="60" stroke="#FFFFFF" stroke-width="3"/>
      </g>
    `;
  } else if (iconType === 'fort') {
    iconMarkup = `
      <g transform="translate(600, 360)" fill="none" stroke="${primaryAccent}" stroke-width="2" opacity="0.6">
        <path d="M -160 60 L -160 -10 L -120 -10 L -120 -40 L -80 -40 L -80 -10 L 80 -10 L 80 -40 L 120 -40 L 120 -10 L 160 -10 L 160 60 Z"/>
        <path d="M -40 60 L -40 10 L 40 10 L 40 60 Z" fill="${primaryAccent}" fill-opacity="0.2"/>
      </g>
    `;
  } else {
    iconMarkup = `
      <g transform="translate(600, 360)">
        <circle cx="0" cy="0" r="60" fill="none" stroke="${primaryAccent}" stroke-width="2" stroke-dasharray="6 4" opacity="0.5"/>
        <circle cx="0" cy="0" r="12" fill="${primaryAccent}" opacity="0.8"/>
      </g>
    `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <radialGradient id="grad-${title.replace(/\s+/g, '')}" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stopColor="#1E293B"/>
      <stop offset="60%" stopColor="#0B101E"/>
      <stop offset="100%" stopColor="#030509"/>
    </radialGradient>
    <linearGradient id="tint-${title.replace(/\s+/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="${primaryAccent}" stopOpacity="0.28"/>
      <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.08"/>
      <stop offset="100%" stopColor="${secondaryAccent}" stopOpacity="0.22"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#grad-${title.replace(/\s+/g, '')})"/>
  <rect width="1200" height="800" fill="url(#tint-${title.replace(/\s+/g, '')})"/>

  <!-- Compass Reticles and Astrolabe Grid -->
  <circle cx="600" cy="400" r="320" fill="none" stroke="${primaryAccent}" stroke-width="1.5" stroke-dasharray="10 8" opacity="0.3"/>
  <circle cx="600" cy="400" r="240" fill="none" stroke="#FFFFFF" stroke-width="0.8" opacity="0.2"/>
  <circle cx="600" cy="400" r="150" fill="none" stroke="${secondaryAccent}" stroke-width="1.2" opacity="0.25"/>

  <g stroke="rgba(255,255,255,0.12)" stroke-width="1">
    <line x1="100" y1="400" x2="1100" y2="400"/>
    <line x1="600" y1="80" x2="600" y2="720"/>
    <circle cx="600" cy="400" r="6"/>
  </g>

  ${iconMarkup}

  <!-- Typography & Archival Header -->
  <g text-anchor="middle">
    <text x="600" y="240" font-family="'IBM Plex Mono', ui-monospace, monospace" font-size="22" fill="${primaryAccent}" letter-spacing="10" font-weight="700">${year}</text>
    <text x="600" y="480" font-family="'Fraunces', Georgia, serif" font-size="46" fill="#F4F1E9" letter-spacing="3" font-weight="600">${title}</text>
    <text x="600" y="530" font-family="Georgia, serif" font-size="20" fill="#94A3B8" font-style="italic">${subtitle}</text>
  </g>

  <!-- Archival Metadata Stamp -->
  <rect x="40" y="40" width="1120" height="720" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.2"/>
  <rect x="48" y="48" width="1104" height="704" fill="none" stroke="${primaryAccent}" stroke-width="0.6" opacity="0.4"/>
  <text x="64" y="740" font-family="'IBM Plex Mono', monospace" font-size="12" fill="#64748B" letter-spacing="2">ARCHIVE RECORD: ${archive}</text>
  <text x="1136" y="740" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="12" fill="${primaryAccent}" letter-spacing="2">NATIONAL MEMORIAL</text>
</svg>`;
}

function generatePortraitFigureSVG(name, era, role, title, accentColor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
  <defs>
    <radialGradient id="pgrad-${name.replace(/\s+/g, '')}" cx="50%" cy="38%" r="65%">
      <stop offset="0%" stopColor="#1E293B"/>
      <stop offset="65%" stopColor="#0B0F19"/>
      <stop offset="100%" stopColor="#030509"/>
    </radialGradient>
  </defs>
  <rect width="600" height="800" fill="url(#pgrad-${name.replace(/\s+/g, '')})"/>

  <!-- Halo & Sacred Rings -->
  <circle cx="300" cy="300" r="180" fill="none" stroke="${accentColor}" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.45"/>
  <circle cx="300" cy="300" r="140" fill="${accentColor}" fill-opacity="0.08"/>
  <circle cx="300" cy="300" r="100" fill="none" stroke="#FFFFFF" stroke-width="0.8" opacity="0.2"/>

  <!-- Emblematic Silhouette -->
  <g transform="translate(300, 280)" fill="${accentColor}" opacity="0.85">
    <circle cx="0" cy="-35" r="42" fill="none" stroke="${accentColor}" stroke-width="3.5"/>
    <path d="M -65 80 C -65 15, 65 15, 65 80 Z" fill="none" stroke="${accentColor}" stroke-width="3.5"/>
    <circle cx="0" cy="-35" r="9" fill="${accentColor}"/>
    <circle cx="0" cy="30" r="6" fill="${accentColor}"/>
  </g>

  <!-- Typography -->
  <g text-anchor="middle">
    <text x="300" y="520" font-family="'IBM Plex Mono', monospace" font-size="13" fill="${accentColor}" letter-spacing="4" font-weight="700">${title.toUpperCase()}</text>
    <text x="300" y="570" font-family="'Fraunces', Georgia, serif" font-size="34" fill="#F4F1E9" font-weight="600">${name}</text>
    <text x="300" y="615" font-family="'IBM Plex Mono', monospace" font-size="14" fill="#94A3B8" letter-spacing="2">${era}</text>
    <text x="300" y="655" font-family="Georgia, serif" font-size="16" fill="#CBD5E1" font-style="italic">${role}</text>
  </g>

  <rect x="20" y="20" width="560" height="760" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="1.2"/>
  <rect x="28" y="28" width="544" height="744" fill="none" stroke="${accentColor}" stroke-width="0.6" opacity="0.4"/>
</svg>`;
}

// 1. History Events
const historyEvents = [
  { file: 'crowd-1947.svg', title: 'THE CITIZENS OF INDIA', year: 'AUGUST 1947', sub: 'The Million-Strong March to Sovereignty', arc: 'PIB / NATIONAL ARCHIVES', c1: '#FF9933', c2: '#138808', icon: 'crowd' },
  { file: 'red-fort-1947.svg', title: 'RED FORT CEREMONY', year: '15 AUGUST 1947', sub: 'First National Flag Hoisting in Delhi', arc: 'PHOTO DIVISION GOVT OF INDIA', c1: '#FF9933', c2: '#1E3A8A', icon: 'fort' },
  { file: 'salt-march-1930.svg', title: 'THE DANDI SALT MARCH', year: 'MARCH 1930', sub: '240 Miles of Non-Violent Defiance', arc: 'NATIONAL ARCHIVES OF INDIA', c1: '#FFFFFF', c2: '#FF9933', icon: 'march' },
  { file: 'quit-india-1942.svg', title: 'QUIT INDIA MOVEMENT', year: 'AUGUST 1942', sub: 'The Final Ultimatum: Do or Die', arc: 'BOMBAY HISTORICAL ARCHIVE', c1: '#FF9933', c2: '#138808', icon: 'flag' },
  { file: 'ina-1943.svg', title: 'AZAD HIND FAUJ (INA)', year: '1943 – 1945', sub: 'Netaji & The Armed Struggle for Liberation', arc: 'NETAJI RESEARCH BUREAU', c1: '#138808', c2: '#FF9933', icon: 'flag' },
  { file: 'jallianwala-1919.svg', title: 'JALLIANWALA BAGH', year: '13 APRIL 1919', sub: 'The Sacred Sacrifice That Awoke India', arc: 'AMRITSAR MEMORIAL TRUST', c1: '#FF9933', c2: '#1E3A8A', icon: 'default' },
  { file: 'non-cooperation.svg', title: 'NON-COOPERATION MOVEMENT', year: '1920 – 1922', sub: 'Nationwide Civil Boycott & Satyagraha', arc: 'GANDHI SMARAK SANGRAHALAYA', c1: '#FFFFFF', c2: '#138808', icon: 'default' }
];

historyEvents.forEach(e => {
  fs.writeFileSync(path.join(historyDir, e.file), generateDocumentarySceneSVG(e.title, e.year, e.sub, e.arc, e.c1, e.c2, e.icon));
});

// 2. Freedom Fighters Portraits
const portraits = [
  { file: 'bhagat-singh.svg', name: 'Bhagat Singh', era: '1907 – 1931', role: 'Champion of Uncompromising Freedom', title: 'Shaheed-e-Azam', color: '#FF9933' },
  { file: 'chandrashekhar-azad.svg', name: 'Chandrashekhar Azad', era: '1906 – 1931', role: 'Fearless Commander of HSRA', title: 'Immortal Rebel', color: '#FF9933' },
  { file: 'netaji-bose.svg', name: 'Subhas Chandra Bose', era: '1897 – 1945', role: 'Supreme Commander, Azad Hind Fauj', title: 'Netaji', color: '#138808' },
  { file: 'sardar-patel.svg', name: 'Sardar Vallabhbhai Patel', era: '1875 – 1950', role: 'Unifier of 565+ Princely States', title: 'Iron Man of India', color: '#FF9933' },
  { file: 'mahatma-gandhi.svg', name: 'Mahatma Gandhi', era: '1869 – 1948', role: 'Pioneer of Satyagraha & Ahimsa', title: 'Father of the Nation', color: '#FFFFFF' },
  { file: 'rani-lakshmibai.svg', name: 'Rani Lakshmibai', era: '1828 – 1858', role: 'Heroine of 1857 War of Independence', title: 'Queen of Jhansi', color: '#FF9933' },
  { file: 'ram-prasad-bismil.svg', name: 'Ram Prasad Bismil', era: '1897 – 1927', role: 'Leader of Kakori & Visionary Poet', title: 'Revolutionary Poet', color: '#60A5FA' },
  { file: 'ashfaqulla-khan.svg', name: 'Ashfaqulla Khan', era: '1900 – 1927', role: 'Co-founder of HRA & Kakori Martyr', title: 'Martyr of Unity', color: '#138808' },
];

portraits.forEach(p => {
  fs.writeFileSync(path.join(historyDir, p.file), generatePortraitFigureSVG(p.name, p.era, p.role, p.title, p.color));
});

// 3. Heritage Destinations
const heritagePlaces = [
  { file: 'red-fort-delhi.svg', title: 'RED FORT (LAL QILA)', year: 'NEW DELHI', sub: 'Ramparts of Independence & Freedom', arc: 'ARCHAEOLOGICAL SURVEY OF INDIA', c1: '#FF9933', c2: '#138808', icon: 'fort' },
  { file: 'sabarmati-ashram.svg', title: 'SABARMATI ASHRAM', year: 'AHMEDABAD, GUJARAT', sub: 'Living Sanctuary of Satyagraha & Khadi', arc: 'SABARMATI MEMORIAL TRUST', c1: '#FFFFFF', c2: '#FF9933', icon: 'default' },
  { file: 'cellular-jail.svg', title: 'CELLULAR JAIL (KALA PANI)', year: 'PORT BLAIR, ANDAMAN', sub: 'National Memorial of Solitary Sacrifice', arc: 'A&N ADMINISTRATION / ASI', c1: '#60A5FA', c2: '#1E3A8A', icon: 'default' },
  { file: 'jallianwala-bagh.svg', title: 'JALLIANWALA BAGH', year: 'AMRITSAR, PUNJAB', sub: 'Sacred Flame of Immortal Martyrs', arc: 'NATIONAL MEMORIAL TRUST', c1: '#FF9933', c2: '#138808', icon: 'default' },
  { file: 'rajghat.svg', title: 'RAJ GHAT', year: 'NEW DELHI', sub: 'Eternal Flame of the Mahatma', arc: 'RAJGHAT SAMADHI COMMITTEE', c1: '#FFFFFF', c2: '#138808', icon: 'default' },
  { file: 'india-gate.svg', title: 'INDIA GATE', year: 'NEW DELHI', sub: 'Amar Jawan Jyoti & Kartavya Path', arc: 'MINISTRY OF DEFENCE', c1: '#138808', c2: '#FF9933', icon: 'default' },
];

heritagePlaces.forEach(h => {
  fs.writeFileSync(path.join(heritageDir, h.file), generateDocumentarySceneSVG(h.title, h.year, h.sub, h.arc, h.c1, h.c2, h.icon));
});

// 4. Modern India Pillars
const modernPillars = [
  { file: 'isro-space.svg', title: 'CHANDRAYAAN & ISRO', year: 'SPACE FRONTIERS', sub: 'First Nation at Lunar South Pole', arc: 'DEPARTMENT OF SPACE / ISRO', c1: '#FF9933', c2: '#60A5FA', icon: 'default' },
  { file: 'digital-india.svg', title: 'DIGITAL INDIA & UPI', year: 'TECH LEADERSHIP', sub: 'World Leading Real-Time Digital Stack', arc: 'NPCI / MEITY', c1: '#60A5FA', c2: '#138808', icon: 'default' },
  { file: 'green-energy.svg', title: 'GREEN ENERGY & TRANSIT', year: 'SUSTAINABLE BHARAT', sub: '500 GW Clean Power & Vande Bharat Rail', arc: 'MNRE / INDIAN RAILWAYS', c1: '#138808', c2: '#FF9933', icon: 'default' },
];

modernPillars.forEach(m => {
  fs.writeFileSync(path.join(modernDir, m.file), generateDocumentarySceneSVG(m.title, m.year, m.sub, m.arc, m.c1, m.c2, m.icon));
});

console.log('Successfully created all 24 local archival and heritage visual assets in public/images/!');
