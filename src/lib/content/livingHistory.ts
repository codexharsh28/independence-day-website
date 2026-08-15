export interface ArchivalImageMeta {
  src: string;
  alt: string;
  title: string;
  year: string;
  source: string;
  license: string;
}

export interface StruggleEvent {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  significance: string;
  image: ArchivalImageMeta;
  accent: "saffron" | "white" | "green" | "sapphire";
}

export interface SacrificeFigure {
  id: string;
  name: string;
  era: string;
  title: string;
  contribution: string;
  description: string;
  image: ArchivalImageMeta;
  accent: "saffron" | "white" | "green" | "sapphire";
}

export interface ModernNationPillar {
  id: string;
  category: string;
  title: string;
  highlight: string;
  description: string;
  stats: string;
  image: ArchivalImageMeta;
  accent: "saffron" | "white" | "green" | "sapphire";
}

export interface HeritageDestination {
  id: string;
  name: string;
  city: string;
  state: string;
  tag: string;
  whyItMatters: string;
  description: string;
  historicalContext: string;
  visitingInfo: string;
  image: ArchivalImageMeta;
  accent: "saffron" | "white" | "green" | "sapphire";
}

// 1. Opening Tricolor Awakening
export const tricolorAwakeningContent = {
  date: "15 AUGUST 1947",
  tagline: "A nation awakened.",
  prologue:
    "A sacred moment in human history: the tricolor rises over an ancient civilization claiming its rightful place under the sun.",
};

// 2. The People Section
export const thePeopleContent = {
  eyebrow: "THE POWER OF MILLIONS",
  heading: "THE PEOPLE",
  subheading: "This freedom belonged to millions.",
  copyLines: ["Not one voice.", "Not one person.", "A nation."],
  narrative:
    "Independence was not won by speeches alone, but by millions of farmers, students, workers, soldiers, and families who marched into the streets, endured lathis, filled prisons, and refused to bow.",
  image: {
    src: "/images/history/crowd-1947.jpg",
    alt: "Crowds of Indian citizens gathering in Delhi celebrating Independence, August 1947",
    title: "The Citizens of Free India",
    year: "August 1947",
    source: "Press Information Bureau / National Archives of India",
    license: "Public Domain / Government Open Archive",
  },
};

// 3. The Red Fort Section
export const theRedFortContent = {
  eyebrow: "THE SANCTUM OF INDEPENDENCE",
  heading: "THE RED FORT",
  date: "15 AUGUST 1947",
  statement: "The Red Fort became the eternal symbol of a free India.",
  description:
    "On the ramparts of Shah Jahan's historic fortress in Delhi, Prime Minister Jawaharlal Nehru unfurled the National Flag before an ocean of jubilant citizens, fulfilling the pledge of Purna Swaraj made eighteen years prior.",
  image: {
    src: "/images/history/red-fort-1947.jpg",
    alt: "Historic flag hoisting at the ramparts of the Red Fort in Delhi, 15 August 1947",
    title: "First Independence Day Ceremony, Red Fort",
    year: "15 August 1947",
    source: "Photo Division, Ministry of Information & Broadcasting, Govt of India",
    license: "Public Domain / Open Access Archive",
  },
};

// 4. The Struggle Sequence
export const theStruggleEvents: StruggleEvent[] = [
  {
    id: "jallianwala-1919",
    year: "1919",
    title: "JALLIANWALA BAGH",
    subtitle: "The Sacrifice That Ignited a Nation",
    description:
      "On Baisakhi day, British troops under General Dyer opened fire on thousands of unarmed men, women, and children gathered in Amritsar. The tragedy shattered faith in colonial justice and galvanized the resolve for complete self-rule.",
    significance: "Rabindranath Tagore renounced his knighthood in protest; Mahatma Gandhi launched the nationwide Non-Cooperation Movement.",
    image: {
      src: "/images/history/jallianwala-1919.jpg",
      alt: "Archival record of Jallianwala Bagh bullet-marked walls and memorial in Amritsar",
      title: "Jallianwala Bagh Historic Grounds",
      year: "1919",
      source: "National Archives of India / Amritsar Records",
      license: "Public Domain",
    },
    accent: "saffron",
  },
  {
    id: "salt-march-1930",
    year: "1930",
    title: "THE SALT MARCH",
    subtitle: "A Simple Act of Defiance",
    description:
      "Mahatma Gandhi led a 240-mile march on foot from Sabarmati Ashram to the Arabian Sea at Dandi. Bending down to pick up a lump of natural salt, he broke the British monopoly and shook the moral foundation of an empire.",
    significance: "Over 60,000 Indians were arrested as nationwide Civil Disobedience paralyzed British administrative machinery.",
    image: {
      src: "/images/history/salt-march-1930.jpg",
      alt: "Mahatma Gandhi and satyagrahis marching to Dandi during the Salt Satyagraha, 1930",
      title: "Gandhi Leading the Dandi March",
      year: "March–April 1930",
      source: "National Archives of India / Wikimedia Commons Public Domain",
      license: "Public Domain",
    },
    accent: "white",
  },
  {
    id: "quit-india-1942",
    year: "1942",
    title: "QUIT INDIA MOVEMENT",
    subtitle: "The Final Ultimatum: Do or Die",
    description:
      "On August 8, 1942, at Gowalia Tank Maidan in Bombay, the clarion call of 'Karo ya Maro' (Do or Die) was issued. The British leadership immediately imprisoned all top leaders, prompting a leaderless mass uprising across every province.",
    significance: "Demonstrated that British rule in India had become untenable, setting the irreversible timeline for independence.",
    image: {
      src: "/images/history/quit-india-1942.jpg",
      alt: "Mass gathering and demonstration during the Quit India Movement in Bombay, August 1942",
      title: "Gowalia Tank Gathering, Quit India",
      year: "August 1942",
      source: "Press Information Bureau Archive",
      license: "Public Domain",
    },
    accent: "saffron",
  },
  {
    id: "ina-1943",
    year: "1943",
    title: "AZAD HIND FAUJ",
    subtitle: "The Armed Struggle Across Frontiers",
    description:
      "Netaji Subhas Chandra Bose established the Provisional Government of Free India in Singapore and revitalized the Indian National Army (Azad Hind Fauj), marching to India's eastern frontier with the battle cry 'Chalo Dilli'.",
    significance: "The subsequent INA trials at the Red Fort triggered widespread mutinies in the Royal Indian Navy and armed forces.",
    image: {
      src: "/images/history/ina-1943.jpg",
      alt: "Netaji Subhas Chandra Bose inspecting Azad Hind Fauj (Indian National Army) soldiers",
      title: "Azad Hind Fauj Formation & Review",
      year: "1943",
      source: "Netaji Research Bureau & National Archives of India",
      license: "Public Domain",
    },
    accent: "green",
  },
];

// 5. The Sacrifice Figures
export const theSacrificeFigures: SacrificeFigure[] = [
  {
    id: "bhagat-singh",
    name: "Bhagat Singh",
    era: "1907 – 1931",
    title: "Shaheed-e-Azam",
    contribution: "Revolutionary intellectual and fearless champion of complete freedom without compromise.",
    description:
      "At just 23 years of age, Bhagat Singh faced the gallows with a smile alongside Sukhdev and Rajguru, cementing 'Inquilab Zindabad' as the eternal battle cry of Indian youth.",
    image: {
      src: "/images/history/bhagat-singh.jpg",
      alt: "Historical portrait of Shaheed Bhagat Singh in felt hat, 1929",
      title: "Shaheed Bhagat Singh Portrait",
      year: "1929",
      source: "National Police Museum & National Archives of India",
      license: "Public Domain",
    },
    accent: "saffron",
  },
  {
    id: "chandrashekhar-azad",
    name: "Chandrashekhar Azad",
    era: "1906 – 1931",
    title: "Commander of HSRA",
    contribution: "Supreme mentor of the armed revolution who maintained an oath never to be captured alive.",
    description:
      "Reorganized the Hindustan Socialist Republican Association and fought British forces single-handedly until his final bullet at Alfred Park, Allahabad.",
    image: {
      src: "/images/history/chandrashekhar-azad.jpg",
      alt: "Historic photograph of Chandrashekhar Azad with sacred thread",
      title: "Chandrashekhar Azad Portrait",
      year: "c. 1930",
      source: "National Archives of India",
      license: "Public Domain",
    },
    accent: "saffron",
  },
  {
    id: "netaji-bose",
    name: "Subhas Chandra Bose",
    era: "1897 – 1945",
    title: "Netaji",
    contribution: "Commander of the Indian National Army who established the Provisional Government of Azad Hind.",
    description:
      "Electrified the freedom movement with global diplomacy and armed action, mobilizing expatriate Indians across Southeast Asia with 'Give me blood, and I will give you freedom'.",
    image: {
      src: "/images/history/netaji-bose.jpg",
      alt: "Netaji Subhas Chandra Bose in military uniform",
      title: "Netaji Subhas Chandra Bose",
      year: "c. 1943",
      source: "Netaji Research Bureau Archive",
      license: "Public Domain",
    },
    accent: "green",
  },
  {
    id: "sardar-patel",
    name: "Sardar Vallabhbhai Patel",
    era: "1875 – 1950",
    title: "The Iron Man of India",
    contribution: "Architect of national integration who unified 565+ princely states into one sovereign union.",
    description:
      "Through uncompromising resolve and visionary diplomacy, Patel forged the geographic and political unity of modern India without bloodshed.",
    image: {
      src: "/images/history/sardar-patel.jpg",
      alt: "Sardar Vallabhbhai Patel historic portrait",
      title: "Sardar Vallabhbhai Patel",
      year: "c. 1947",
      source: "Photo Division, Government of India",
      license: "Public Domain",
    },
    accent: "saffron",
  },
  {
    id: "mahatma-gandhi",
    name: "Mahatma Gandhi",
    era: "1869 – 1948",
    title: "Father of the Nation",
    contribution: "Architect of mass non-violent resistance (Satyagraha) and moral voice of the independence struggle.",
    description:
      "United millions across villages and cities into a mass movement, proving that truth (Satya) and non-violence (Ahimsa) could overcome an empire.",
    image: {
      src: "/images/history/mahatma-gandhi.jpg",
      alt: "Mahatma Gandhi portrait during freedom struggle",
      title: "Mahatma Gandhi",
      year: "c. 1931",
      source: "National Gandhi Museum / Public Domain",
      license: "Public Domain",
    },
    accent: "white",
  },
  {
    id: "rani-lakshmibai",
    name: "Rani Lakshmibai",
    era: "1828 – 1858",
    title: "Queen of Jhansi",
    contribution: "Fearless leader and warrior of the 1857 War of Independence.",
    description:
      "Defied British annexation under the Doctrine of Lapse, commanding her army in combat and sacrificing her life at Gwalior for the honor of her motherland.",
    image: {
      src: "/images/history/rani-lakshmibai.jpg",
      alt: "Historic depiction of Rani Lakshmibai of Jhansi",
      title: "Rani Lakshmibai of Jhansi",
      year: "1857",
      source: "Archaeological Survey of India Archive",
      license: "Public Domain",
    },
    accent: "saffron",
  },
  {
    id: "ram-prasad-bismil",
    name: "Ram Prasad Bismil",
    era: "1897 – 1927",
    title: "Poet & Revolutionary",
    contribution: "Leader of the Kakori Action and author of timeless patriotic verses.",
    description:
      "A master poet and fearless revolutionary who immortalized 'Sarfaroshi ki tamanna ab hamare dil mein hai', walking to the gallows with serene courage.",
    image: {
      src: "/images/history/ram-prasad-bismil.jpg",
      alt: "Ram Prasad Bismil archival photograph",
      title: "Ram Prasad Bismil",
      year: "1927",
      source: "National Archives of India",
      license: "Public Domain",
    },
    accent: "sapphire",
  },
  {
    id: "ashfaqulla-khan",
    name: "Ashfaqulla Khan",
    era: "1900 – 1927",
    title: "Patriot & Revolutionary",
    contribution: "Co-founder of the Hindustan Republican Association and martyr of Kakori.",
    description:
      "A shining symbol of communal unity and uncompromising patriotism, who sacrificed his life alongside Bismil advocating for an egalitarian and free India.",
    image: {
      src: "/images/history/ashfaqulla-khan.jpg",
      alt: "Ashfaqulla Khan archival portrait",
      title: "Ashfaqulla Khan",
      year: "1927",
      source: "National Archives of India",
      license: "Public Domain",
    },
    accent: "green",
  },
];

// 6. The Moment of Freedom
export const theMomentOfFreedomContent = {
  date: "15 AUGUST 1947",
  climax: "FREEDOM",
  quote:
    "Long years ago we made a tryst with destiny, and now the time comes when we shall redeem our pledge... At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom.",
  speaker: "Jawaharlal Nehru · First Prime Minister of India",
  significance:
    "A free India was born—the largest sovereign democracy in human history.",
};

// 7. The Nation Rises (Past to Present)
export const modernNationPillars: ModernNationPillar[] = [
  {
    id: "space-frontiers",
    category: "Space Exploration",
    title: "Pioneering the Cosmos",
    highlight: "ISRO Chandrayaan-3 Lunar South Pole Landing",
    description:
      "India became the first nation to land near the Moon's South Pole, operating Mars Orbiter Mission on first attempt and deploying Aditya-L1 to study the Sun.",
    stats: "1st Nation at Lunar South Pole · $75M Mars Mission",
    image: {
      src: "/images/modern/isro-space.jpg",
      alt: "Indian space vehicle Chandrayaan-3 and ISRO deep space exploration",
      title: "ISRO Space Exploration Program",
      year: "2023–Present",
      source: "ISRO / Department of Space, Govt of India",
      license: "Open Government Data License",
    },
    accent: "saffron",
  },
  {
    id: "digital-powerhouse",
    category: "Technology & Digital Stack",
    title: "World's Digital Backbone",
    highlight: "UPI & Open Digital Public Infrastructure",
    description:
      "Over 13 billion monthly real-time financial transactions power India's digital economy, setting the global standard for inclusive digital governance.",
    stats: "46% of Global Real-Time Payments · 1.4B Digital IDs",
    image: {
      src: "/images/modern/digital-india.jpg",
      alt: "India's digital public infrastructure and tech innovation hub",
      title: "Digital India & UPI Ecosystem",
      year: "2016–Present",
      source: "National Payments Corporation of India (NPCI)",
      license: "Open Data Portal",
    },
    accent: "sapphire",
  },
  {
    id: "green-infrastructure",
    category: "Sustainability & Clean Energy",
    title: "Clean Energy Leadership",
    highlight: "500 GW Renewable Transition & World's Largest Solar Parks",
    description:
      "Rapidly scaling solar, green hydrogen, and modern high-speed electric rail networks (Vande Bharat) to power a sustainable 21st-century economy.",
    stats: "4th in Global Wind & Solar · 500 GW Target by 2030",
    image: {
      src: "/images/modern/green-energy.jpg",
      alt: "India's mega solar parks, green hydrogen, and modern electric rail network",
      title: "Green Energy Transition in India",
      year: "2024",
      source: "Ministry of New and Renewable Energy",
      license: "Open Government Data License",
    },
    accent: "green",
  },
];

// 8. Visit Bharat Destinations
export const visitBharatDestinations: HeritageDestination[] = [
  {
    id: "red-fort",
    name: "Red Fort (Lal Qila)",
    city: "New Delhi",
    state: "Delhi",
    tag: "SYMBOL OF SOVEREIGNTY",
    whyItMatters:
      "The historic ramparts where India's National Flag was first unfurled in 1947, and where every Prime Minister addresses the nation on Independence Day.",
    description:
      "Constructed by Mughal Emperor Shah Jahan in 1638, the red sandstone fortress bore witness to the 1857 Rebellion, the historic INA Trials, and the dawn of freedom on August 15, 1947.",
    historicalContext:
      "Site of Jawaharlal Nehru's first flag hoisting ceremony; houses the Indian Independence Museum and Swatantrata Sangram Sangrahalaya.",
    visitingInfo: "Open Tuesday–Sunday · Metro: Lal Qila Station, Delhi",
    image: {
      src: "/images/heritage/red-fort-delhi.jpg",
      alt: "The majestic Red Fort in Delhi with the Indian National Flag fluttering above the Lahori Gate",
      title: "Red Fort Lahori Gate & Ramparts",
      year: "Historic National Monument",
      source: "Archaeological Survey of India",
      license: "Public Domain / CC-BY-SA",
    },
    accent: "saffron",
  },
  {
    id: "sabarmati-ashram",
    name: "Sabarmati Ashram",
    city: "Ahmedabad",
    state: "Gujarat",
    tag: "EPICENTER OF SATYAGRAHA",
    whyItMatters:
      "Mahatma Gandhi's home for 13 years and the headquarters from which the historic 1930 Dandi Salt March was launched.",
    description:
      "Located on the banks of the Sabarmati River, this serene sanctuary served as the living laboratory for Gandhi's philosophy of non-violence, khadi self-reliance, and universal brotherhood.",
    historicalContext:
      "Gandhi vowed never to return to the ashram until India attained complete independence.",
    visitingInfo: "Open Daily 8:30 AM – 6:30 PM · Free Admission · Ahmedabad, Gujarat",
    image: {
      src: "/images/heritage/sabarmati-ashram.jpg",
      alt: "Hriday Kunj at Sabarmati Ashram in Ahmedabad, Gandhi's residence",
      title: "Hriday Kunj, Sabarmati Ashram",
      year: "Established 1917",
      source: "Sabarmati Ashram Preservation and Memorial Trust",
      license: "Public Domain / CC0",
    },
    accent: "white",
  },
  {
    id: "cellular-jail",
    name: "Cellular Jail (Kala Pani)",
    city: "Port Blair",
    state: "Andaman & Nicobar Islands",
    tag: "PILGRIMAGE OF SACRIFICE",
    whyItMatters:
      "The solitary penal settlement where hundreds of India's most daring revolutionaries endured torture and solitary confinement for their motherland.",
    description:
      "Built by the British between 1896 and 1906, the seven-winged panopticon prison housed freedom fighters such as Veer Savarkar, Batukeshwar Dutt, and Yogendra Shukla in solitary isolation.",
    historicalContext:
      "Now a National Memorial with an eternal flame (Swatantrya Jyot) dedicated to all martyrs of the freedom struggle.",
    visitingInfo: "Open Tuesday–Sunday · Light & Sound Show Daily · Port Blair",
    image: {
      src: "/images/heritage/cellular-jail.jpg",
      alt: "Cellular Jail National Memorial in Port Blair, Andaman Islands",
      title: "Cellular Jail National Memorial",
      year: "Constructed 1896–1906",
      source: "Andaman & Nicobar Administration / ASI",
      license: "Public Domain / Open Access",
    },
    accent: "sapphire",
  },
  {
    id: "jallianwala-bagh",
    name: "Jallianwala Bagh",
    city: "Amritsar",
    state: "Punjab",
    tag: "SACRED MEMORIAL OF MARTYRS",
    whyItMatters:
      "The hallowed grounds of the 1919 massacre that transformed India's freedom struggle into an uncompromising mass movement for complete independence.",
    description:
      "Located adjacent to the Golden Temple in Amritsar, the six-acre memorial preserves the historic Martyrs' Well and brick walls with bullet marks preserved under glass.",
    historicalContext:
      "Site where hundreds of peaceful citizens were martyred by colonial troops on April 13, 1919.",
    visitingInfo: "Open Daily 6:30 AM – 7:30 PM · Near Golden Temple, Amritsar, Punjab",
    image: {
      src: "/images/heritage/jallianwala-bagh.jpg",
      alt: "The Martyrs' Memorial Flame and historic grounds at Jallianwala Bagh, Amritsar",
      title: "Jallianwala Bagh National Memorial",
      year: "Memorial Established 1951",
      source: "Jallianwala Bagh National Memorial Trust",
      license: "Public Domain / CC-BY-SA",
    },
    accent: "saffron",
  },
  {
    id: "rajghat",
    name: "Raj Ghat",
    city: "New Delhi",
    state: "Delhi",
    tag: "MEMORIAL TO THE MAHATMA",
    whyItMatters:
      "The peaceful black marble memorial on the banks of the Yamuna River marking the cremation site of Mahatma Gandhi.",
    description:
      "A black marble platform open to the sky with an eternal flame burning at one end, inscribed with Mahatma Gandhi's last words: 'He Ram'.",
    historicalContext:
      "Visited by world leaders and citizens as a global sanctuary of peace, non-violence, and moral truth.",
    visitingInfo: "Open Daily 6:30 AM – 6:00 PM · Free Admission · Ring Road, New Delhi",
    image: {
      src: "/images/heritage/rajghat.jpg",
      alt: "Raj Ghat black marble memorial with eternal flame, New Delhi",
      title: "Raj Ghat Memorial",
      year: "Established 1948",
      source: "Rajghat Samadhi Committee / Govt of India",
      license: "Public Domain",
    },
    accent: "white",
  },
  {
    id: "india-gate",
    name: "India Gate & National War Memorial",
    city: "New Delhi",
    state: "Delhi",
    tag: "TRIUMPH OF SERVICE",
    whyItMatters:
      "A 42-meter triumphal arch on Kartavya Path honoring the sacrifice of over 84,000 soldiers with the eternal Amar Jawan Jyoti flame.",
    description:
      "Designed by Sir Edwin Lutyens and completed in 1931, India Gate is surrounded by verdant lawns, water channels, and the newly established National War Memorial.",
    historicalContext:
      "Inscribed with the names of over 13,000 soldiers; focal point of Republic Day and national ceremonial parades.",
    visitingInfo: "Open 24/7 · Kartavya Path, Central Secretariat, New Delhi",
    image: {
      src: "/images/heritage/india-gate.jpg",
      alt: "India Gate illuminated against the evening sky on Kartavya Path, New Delhi",
      title: "India Gate & Amar Jawan Jyoti",
      year: "Completed 1931",
      source: "Ministry of Defence / National Archives of India",
      license: "Public Domain",
    },
    accent: "green",
  },
];
