const fs = require('fs');
const path = require('path');

const historyDir = path.join(__dirname, '../../public/images/history');
const heritageDir = path.join(__dirname, '../../public/images/heritage');
const modernDir = path.join(__dirname, '../../public/images/modern');

[historyDir, heritageDir, modernDir].forEach(d => fs.mkdirSync(d, { recursive: true }));

function createHistoricalHeroSVG(title, year, subtitle, primaryColor, secondaryColor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="50%" r="75%">
      <stop offset="0%" stopColor="#1C2438"/>
      <stop offset="60%" stopColor="#0B101D"/>
      <stop offset="100%" stopColor="#04060B"/>
    </radialGradient>
    <linearGradient id="tintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="${primaryColor}" stopOpacity="0.35"/>
      <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.1"/>
      <stop offset="100%" stopColor="${secondaryColor}" stopOpacity="0.25"/>
    </linearGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise"/>
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.08 0"/>
      <feComposite in2="SourceGraphic" in="gl" operator="in"/>
    </filter>
  </defs>
  <rect width="1200" height="800" fill="url(#bgGrad)"/>
  <rect width="1200" height="800" fill="url(#tintGrad)"/>
  <circle cx="600" cy="400" r="320" fill="none" stroke="${primaryColor}" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.4"/>
  <circle cx="600" cy="400" r="220" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.25"/>
  <circle cx="600" cy="400" r="120" fill="none" stroke="${secondaryColor}" stroke-width="1.5" opacity="0.3"/>
  <g fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1">
    <line x1="200" y1="400" x2="1000" y2="400"/>
    <line x1="600" y1="100" x2="600" y2="700"/>
  </g>
  <g text-anchor="middle" font-family="'Fraunces', Georgia, serif">
    <text x="600" y="320" font-size="28" fill="${primaryColor}" letter-spacing="8" font-family="'IBM Plex Mono', monospace" font-weight="bold">${year}</text>
    <text x="600" y="410" font-size="54" fill="#F4F1E9" letter-spacing="4" font-weight="normal">${title}</text>
    <text x="600" y="480" font-size="22" fill="#8891A6" font-style="italic" font-family="Georgia, serif">${subtitle}</text>
  </g>
  <rect width="1160" height="760" x="20" y="20" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <rect width="1144" height="744" x="28" y="28" fill="none" stroke="${primaryColor}" stroke-width="0.75" opacity="0.3"/>
</svg>`;
}

function createPortraitSVG(name, era, role, accentColor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
  <defs>
    <radialGradient id="portraitBg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stopColor="#1E293B"/>
      <stop offset="70%" stopColor="#0B0F19"/>
      <stop offset="100%" stopColor="#030509"/>
    </radialGradient>
  </defs>
  <rect width="600" height="800" fill="url(#portraitBg)"/>
  <circle cx="300" cy="330" r="180" fill="none" stroke="${accentColor}" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.5"/>
  <circle cx="300" cy="330" r="140" fill="${accentColor}" fill-opacity="0.06"/>
  <g transform="translate(300, 310)" fill="${accentColor}" opacity="0.85">
    <circle cx="0" cy="-30" r="45" fill="none" stroke="${accentColor}" stroke-width="3"/>
    <path d="M -70 90 C -70 20, 70 20, 70 90 Z" fill="none" stroke="${accentColor}" stroke-width="3"/>
    <circle cx="0" cy="-30" r="8" fill="${accentColor}"/>
  </g>
  <g text-anchor="middle">
    <text x="300" y="550" font-size="32" fill="#F4F1E9" font-family="'Fraunces', Georgia, serif" font-weight="600">${name}</text>
    <text x="300" y="595" font-size="14" fill="${accentColor}" font-family="'IBM Plex Mono', monospace" letter-spacing="3">${era}</text>
    <text x="300" y="635" font-size="16" fill="#8891A6" font-family="Georgia, serif" font-style="italic">${role}</text>
  </g>
  <rect width="560" height="760" x="20" y="20" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
</svg>`;
}

// 1. History Events
const historyAssets = [
  { file: 'crowd-1947.svg', title: 'THE PEOPLE OF INDIA', year: 'AUGUST 1947', sub: 'The Million-Strong March to Sovereignty', c1: '#FF9933', c2: '#138808' },
  { file: 'red-fort-1947.svg', title: 'THE RED FORT CEREMONY', year: '15 AUGUST 1947', sub: 'The Historic First Flag Hoisting in Delhi', c1: '#FF9933', c2: '#1E3A8A' },
  { file: 'salt-march-1930.svg', title: 'THE SALT MARCH', year: '1930', sub: '240 Miles of Peaceful Non-Violent Defiance', c1: '#FFFFFF', c2: '#FF9933' },
  { file: 'quit-india-1942.svg', title: 'QUIT INDIA MOVEMENT', year: '1942', sub: 'The Final Ultimatum: Do or Die', c1: '#FF9933', c2: '#138808' },
  { file: 'ina-1943.svg', title: 'AZAD HIND FAUJ', year: '1943', sub: 'Netaji & The Armed Struggle for Liberation', c1: '#138808', c2: '#FF9933' },
  { file: 'jallianwala-1919.svg', title: 'JALLIANWALA BAGH', year: '1919', sub: 'Sacred Grounds That Awoke the Nation', c1: '#FF9933', c2: '#1E3A8A' },
];

historyAssets.forEach(a => {
  fs.writeFileSync(path.join(historyDir, a.file), createHistoricalHeroSVG(a.title, a.year, a.sub, a.c1, a.c2));
});

// 2. Freedom Fighters Portraits
const portraits = [
  { file: 'bhagat-singh.svg', name: 'Bhagat Singh', era: '1907 – 1931', role: 'Shaheed-e-Azam', color: '#FF9933' },
  { file: 'chandrashekhar-azad.svg', name: 'Chandrashekhar Azad', era: '1906 – 1931', role: 'Commander, HSRA', color: '#FF9933' },
  { file: 'netaji-bose.svg', name: 'Subhas Chandra Bose', era: '1897 – 1945', role: 'Leader, Azad Hind Fauj', color: '#138808' },
  { file: 'sardar-patel.svg', name: 'Sardar Vallabhbhai Patel', era: '1875 – 1950', role: 'The Iron Man of India', color: '#FF9933' },
  { file: 'mahatma-gandhi.svg', name: 'Mahatma Gandhi', era: '1869 – 1948', role: 'Father of the Nation', color: '#FFFFFF' },
  { file: 'rani-lakshmibai.svg', name: 'Rani Lakshmibai', era: '1828 – 1858', role: 'Queen of Jhansi', color: '#FF9933' },
  { file: 'ram-prasad-bismil.svg', name: 'Ram Prasad Bismil', era: '1897 – 1927', role: 'Poet & Revolutionary', color: '#60A5FA' },
  { file: 'ashfaqulla-khan.svg', name: 'Ashfaqulla Khan', era: '1900 – 1927', role: 'Patriot & Martyr of Kakori', color: '#138808' },
];

portraits.forEach(p => {
  fs.writeFileSync(path.join(historyDir, p.file), createPortraitSVG(p.name, p.era, p.role, p.color));
});

// 3. Heritage Destinations
const heritage = [
  { file: 'red-fort-delhi.svg', title: 'RED FORT (LAL QILA)', year: 'NEW DELHI', sub: 'Symbol of Sovereign India', c1: '#FF9933', c2: '#138808' },
  { file: 'sabarmati-ashram.svg', title: 'SABARMATI ASHRAM', year: 'AHMEDABAD, GUJARAT', sub: 'Epicenter of Satyagraha & Ahimsa', c1: '#FFFFFF', c2: '#FF9933' },
  { file: 'cellular-jail.svg', title: 'CELLULAR JAIL', year: 'PORT BLAIR, ANDAMAN', sub: 'Pilgrimage of Revolutionary Sacrifice', c1: '#60A5FA', c2: '#1E3A8A' },
  { file: 'jallianwala-bagh.svg', title: 'JALLIANWALA BAGH', year: 'AMRITSAR, PUNJAB', sub: 'Memorial of the Unbroken Spirit', c1: '#FF9933', c2: '#138808' },
  { file: 'rajghat.svg', title: 'RAJ GHAT', year: 'NEW DELHI', sub: 'Memorial to Mahatma Gandhi', c1: '#FFFFFF', c2: '#138808' },
  { file: 'india-gate.svg', title: 'INDIA GATE', year: 'NEW DELHI', sub: 'Eternal Flame of Immortal Soldiers', c1: '#138808', c2: '#FF9933' },
];

heritage.forEach(h => {
  fs.writeFileSync(path.join(heritageDir, h.file), createHistoricalHeroSVG(h.title, h.year, h.sub, h.c1, h.c2));
});

// 4. Modern India Pillars
const modern = [
  { file: 'isro-space.svg', title: 'CHANDRAYAAN & ISRO', year: 'SPACE FRONTIERS', sub: 'First Nation at the Lunar South Pole', c1: '#FF9933', c2: '#60A5FA' },
  { file: 'digital-india.svg', title: 'DIGITAL INDIA & UPI', year: 'TECH LEADERSHIP', sub: 'World’s Leading Real-Time Payment Network', c1: '#60A5FA', c2: '#138808' },
  { file: 'green-energy.svg', title: 'GREEN ENERGY & TRANSIT', year: 'SUSTAINABLE BHARAT', sub: '500 GW Clean Power & Modern High-Speed Rail', c1: '#138808', c2: '#FF9933' },
];

modern.forEach(m => {
  fs.writeFileSync(path.join(modernDir, m.file), createHistoricalHeroSVG(m.title, m.year, m.sub, m.c1, m.c2));
});

console.log('All historical, portrait, heritage, and modern SVG assets created successfully!');
