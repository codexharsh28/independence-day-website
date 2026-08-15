export interface FreedomFighterProfile {
  name: string;
  role: string;
  description: string;
  years: string;
}

export interface AchievementItem {
  category: string;
  title: string;
  year: string;
  description: string;
}

export interface StoryCardItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  yearBadge: string;
  excerpt: string;
  accent: "saffron" | "white" | "green" | "sapphire";
  gridSpan: string; // Tailwind grid span class
  fullStory: string;
  keyPoints: string[];
  profiles?: FreedomFighterProfile[];
  achievements?: AchievementItem[];
}

export const nationRemembersHeader = {
  eyebrow: "A NATION REMEMBERS",
  heading: "Stories That Shaped India",
  supporting:
    "From the courage of freedom fighters to the achievements that continue to make a nation proud.",
};

export const storyCardsData: StoryCardItem[] = [
  {
    id: "freedom-fighters",
    title: "FREEDOM FIGHTERS",
    subtitle: "The voices of a movement",
    tag: "REVOLUTIONARIES & LEADERS",
    yearBadge: "1857 – 1947",
    excerpt:
      "Unyielding courage that shook the foundations of an empire, uniting millions across every corner of the subcontinent in the struggle for self-rule.",
    accent: "saffron",
    gridSpan: "lg:col-span-8",
    fullStory:
      "India's independence was forged through the extraordinary resilience and sacrifices of visionary leaders and fearless revolutionaries. From civil disobedience and peaceful non-violence to armed resistance and underground mobilization, their collective courage gave birth to a free nation.",
    keyPoints: [
      "Over 90 years of sustained national struggle uniting millions across regions, languages, and communities.",
      "The coexistence of peaceful satyagraha and fearless revolutionary movements challenging colonial authority.",
      "Selfless leaders who sacrificed liberty, wealth, and life so future generations could live free.",
    ],
    profiles: [
      {
        name: "Mahatma Gandhi",
        role: "Father of the Nation",
        years: "1869 – 1948",
        description:
          "Pioneered nationwide non-violent civil resistance (Satyagraha) and mass mobilization, inspiring civil rights movements globally.",
      },
      {
        name: "Netaji Subhas Chandra Bose",
        role: "Leader of Azad Hind Fauj",
        years: "1897 – 1945",
        description:
          "Formed the Indian National Army to wage an armed struggle for total liberation, rallying patriots with 'Jai Hind'.",
      },
      {
        name: "Bhagat Singh",
        role: "Revolutionary Martyr",
        years: "1907 – 1931",
        description:
          "Embraced martyrdom at age 23, igniting a fiery spirit of defiance and demanding complete unconditional independence.",
      },
      {
        name: "Sardar Vallabhbhai Patel",
        role: "The Iron Man of India",
        years: "1875 – 1950",
        description:
          "Demonstrated unparalleled statesmanship by unifying over 565 princely states into a cohesive sovereign republic.",
      },
      {
        name: "Rani Lakshmibai",
        role: "Queen of Jhansi",
        years: "1828 – 1858",
        description:
          "Led her troops into battle during the 1857 War of Independence, becoming an eternal symbol of valor and defiance.",
      },
      {
        name: "Chandrashekhar Azad",
        role: "Revolutionary Leader",
        years: "1906 – 1931",
        description:
          "Vowed never to be captured alive, leading the Hindustan Socialist Republican Association with unshakeable resolve.",
      },
    ],
  },
  {
    id: "road-to-1947",
    title: "THE ROAD TO 1947",
    subtitle: "A nation that refused to give up",
    tag: "HISTORICAL STRUGGLE",
    yearBadge: "90 YEARS OF DEFIANCE",
    excerpt:
      "From the first revolt of 1857 to the Salt March and Quit India, the unyielding march toward Purna Swaraj.",
    accent: "white",
    gridSpan: "lg:col-span-4",
    fullStory:
      "The path to freedom was marked by seminal turning points that transformed regional unrest into an unstoppable mass movement. Each decade tested the nation's resolve, strengthening its commitment to complete self-rule.",
    keyPoints: [
      "1857: The first pan-Indian revolt ending East India Company rule.",
      "1905: Swadeshi Movement cultivating indigenous industries and boycott of foreign goods.",
      "1919: Jallianwala Bagh massacre sparking unified outrage and non-cooperation.",
      "1930: Dandi March breaking the salt monopoly in simple, defiant truth.",
      "1942: Quit India Movement delivering the final ultimatum to colonial authorities.",
    ],
  },
  {
    id: "15-august-1947",
    title: "15 AUGUST 1947",
    subtitle: "The midnight that changed history",
    tag: "DAWN OF FREEDOM",
    yearBadge: "15 AUGUST 1947",
    excerpt:
      "At the stroke of midnight, India awoke to life and freedom as the tricolor was hoisted high above the historic Red Fort.",
    accent: "saffron",
    gridSpan: "lg:col-span-6",
    fullStory:
      "At midnight on August 15, 1947, nearly two centuries of British rule came to an end. Amidst profound celebrations and solemn reflection, India embarked on its journey as an independent democratic republic.",
    keyPoints: [
      "The immortal 'Tryst with Destiny' address delivered at the Constituent Assembly.",
      "First official unfurling of the Indian National Flag at the Red Fort in Delhi.",
      "Inaugurated the largest democratic experiment in human history.",
    ],
  },
  {
    id: "proud-moments",
    title: "PROUD MOMENTS",
    subtitle: "Achievements that made India proud",
    tag: "NATIONAL TRIUMPHS",
    yearBadge: "1947 – PRESENT",
    excerpt:
      "Pioneering space exploration, scientific breakthroughs, world-class athletic feats, and global technological leadership.",
    accent: "green",
    gridSpan: "lg:col-span-6",
    fullStory:
      "Post-independence India transformed from an impoverished colony into a vibrant technological and scientific powerhouse, setting global benchmarks across disciplines.",
    keyPoints: [
      "Space: Chandrayaan-3 lunar south pole landing, Mangalyaan Mars mission, Aditya-L1 solar observatory.",
      "Digital Innovation: UPI processing billions of monthly transactions, powering the world's most advanced digital public infrastructure.",
      "Science: Green & White Revolutions ensuring food and milk self-sufficiency; indigenous nuclear energy.",
      "Sports: Historic Olympic track gold medals, Cricket World Cup triumphs, and Chess Olympiad victories.",
    ],
    achievements: [
      {
        category: "Space",
        title: "Chandrayaan-3 Moon Landing",
        year: "2023",
        description: "First nation to soft-land near the lunar South Pole.",
      },
      {
        category: "Tech",
        title: "Digital Public Infrastructure (UPI)",
        year: "2016–Present",
        description: "World's leading real-time digital payment ecosystem.",
      },
      {
        category: "Science",
        title: "Green & White Revolutions",
        year: "1960s–70s",
        description: "Self-reliance in food grain production and dairy farming.",
      },
      {
        category: "Sports",
        title: "Olympic Gold & World Triumphs",
        year: "1983–2024",
        description: "Historic Olympic gold in Athletics, Cricket World Cups, and Chess Olympiad double gold.",
      },
    ],
  },
  {
    id: "india-after-independence",
    title: "INDIA AFTER INDEPENDENCE",
    subtitle: "From a new nation to a global force",
    tag: "DEMOCRACY & GROWTH",
    yearBadge: "1950 – 2024",
    excerpt:
      "Adoption of the world's longest Constitution, industrialization, economic liberalization, and rise as the 5th largest economy.",
    accent: "sapphire",
    gridSpan: "lg:col-span-4",
    fullStory:
      "Through seven decades of steady democracy, India integrated hundreds of languages and cultures into a unified constitutional republic, building premier academic institutes (IITs/IIMs) and expanding its global footprint.",
    keyPoints: [
      "January 26, 1950: The Constitution of India comes into effect under Dr. B.R. Ambedkar's guidance.",
      "1991: Landmark economic reforms opening Indian markets to global enterprise.",
      "World's 5th largest economy with rapid modernization and cultural soft power.",
    ],
  },
  {
    id: "india-2047",
    title: "INDIA 2047",
    subtitle: "The journey continues",
    tag: "VIKSIT BHARAT @ 100",
    yearBadge: "VISION 2047",
    excerpt:
      "A 100-year vision for a developed, self-reliant nation driven by youth empowerment, cutting-edge AI, deep space exploration, and sustainable prosperity.",
    accent: "saffron",
    gridSpan: "lg:col-span-8",
    fullStory:
      "As India approaches its centenary of independence in 2047, the nation is positioned at the forefront of the 21st-century knowledge economy—championing clean energy, artificial intelligence for public good, semiconductor manufacturing, and human space exploration.",
    keyPoints: [
      "Gaganyaan crewed spaceflights & Bharatiya Antariksha Station by 2035.",
      "500 GW clean energy transition, Green Hydrogen Mission, and net-zero sustainability target.",
      "A $30+ Trillion inclusive developed economy empowering 1.4 billion citizens.",
      "Global leadership in artificial intelligence, biotechnology, and semiconductor manufacturing.",
    ],
  },
];
