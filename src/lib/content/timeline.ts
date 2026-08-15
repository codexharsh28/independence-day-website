export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  tag: string;
  description: string;
  significance: string;
  quote?: string;
  accent: "saffron" | "white" | "green" | "sapphire";
}

export const timelineIntroContent = {
  eyebrow: "CHRONICLES OF INDEPENDENCE",
  title: "THE JOURNEY OF FREEDOM",
  subtitle: "From the struggle for freedom to the birth of a nation.",
};

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: "1857",
    year: "1857",
    title: "The First War of Independence",
    tag: "THE SPARK",
    description:
      "A monumental uprising ignited across Meerut, Delhi, and Jhansi as soldiers, peasants, and regional leaders united in armed defiance against British East India Company rule.",
    significance: "Ended Company rule and established direct British Crown governance, planting the seeds of unified national resistance.",
    quote: "The first great rebellion that proved the possibility of a united Indian resistance.",
    accent: "saffron",
  },
  {
    id: "1885",
    year: "1885",
    title: "Formation of the Indian National Congress",
    tag: "POLITICAL AWAKENING",
    description:
      "Seventy-two delegates gathered in Bombay to establish India's first pan-national political platform, transitioning regional dissent into a structured constitutional movement.",
    significance: "Laid the institutional foundation for nationwide political mobilization and democratic dialogue.",
    accent: "sapphire",
  },
  {
    id: "1919",
    year: "1919",
    title: "Jallianwala Bagh Massacre",
    tag: "THE TURNING POINT",
    description:
      "British troops fired upon thousands of peaceful, unarmed civilians gathered at Amritsar during Baisakhi, martyring hundreds and outraging the nation.",
    significance: "Shattered illusions of colonial justice, galvanizing the demand for complete and unconditional self-rule (Purna Swaraj).",
    accent: "saffron",
  },
  {
    id: "1920",
    year: "1920",
    title: "Non-Cooperation Movement",
    tag: "MASS MOBILIZATION",
    description:
      "Mahatma Gandhi launched the first nationwide non-violent movement, calling for the boycott of British goods, titles, educational institutions, and courts.",
    significance: "Transformed the independence movement from an elite political forum into a mass people's movement across villages and cities.",
    accent: "white",
  },
  {
    id: "1930",
    year: "1930",
    title: "Dandi March & Salt Satyagraha",
    tag: "CIVIL DISOBEDIENCE",
    description:
      "Gandhi led a 240-mile march to the Arabian Sea at Dandi to harvest salt illegally, breaking the oppressive British salt monopoly in simple, defiant truth.",
    significance: "Demonstrated to the world that peaceful non-violent civil resistance could shake the moral authority of an empire.",
    accent: "green",
  },
  {
    id: "1942",
    year: "1942",
    title: "Quit India Movement",
    tag: "THE ULTIMATUM",
    description:
      "With the resolute clarion call of 'Do or Die' (Karo ya Maro) at Gowalia Tank, the All-India Congress Committee demanded an immediate and total British withdrawal.",
    significance: "Paralyzed colonial administration and united citizens in an unstoppable final surge for national liberation.",
    accent: "saffron",
  },
  {
    id: "1947",
    year: "1947",
    title: "Midnight of Independence",
    tag: "BIRTH OF A NATION",
    description:
      "At the stroke of midnight on August 15, 1947, after nearly two centuries of colonial dominance, India awoke to life and freedom as a sovereign democratic nation.",
    significance: "The tricolor was hoisted at the Red Fort, inaugurating the world's largest democracy.",
    quote: "At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom.",
    accent: "green",
  },
];
