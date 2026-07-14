import type { Lang } from "./types";

/**
 * Eco2Zero product copy from the organizational design doc.
 * Shared by future eco2zero web surfaces and the mobile app.
 */
export const nav = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/how-it-works", key: "howItWorks" as const },
  { href: "/impact", key: "impact" as const },
  { href: "/programs", key: "programs" as const },
  { href: "/partners", key: "partners" as const },
  { href: "/contact", key: "contact" as const },
];

export const copy = {
  brand: {
    en: "Eco2Zero",
    zh: "Eco2Zero",
  },
  tagline: {
    en: "Small Actions, Big Impact",
    zh: "小行动，大影响",
  },
  pathToZero: {
    en: "PATH TO ZERO",
    zh: "通向零废弃",
  },
  nav: {
    home: { en: "Home", zh: "首页" },
    about: { en: "About", zh: "关于" },
    howItWorks: { en: "How It Works", zh: "如何参与" },
    impact: { en: "Impact", zh: "影响力" },
    programs: { en: "Programs & Events", zh: "项目与活动" },
    partners: { en: "Partners", zh: "合作伙伴" },
    contact: { en: "Contact", zh: "联系我们" },
  },
  home: {
    heroHeadline: {
      en: "Small Actions, Big Impact",
      zh: "小行动，大影响",
    },
    heroSub: {
      en: "Join a growing community taking simple everyday actions to reduce waste, save resources, and create a more sustainable future.",
      zh: "加入持续壮大的社区，用简单的日常行动减少浪费、节约资源，共创更可持续的未来。",
    },
    join: { en: "Join the Movement", zh: "加入行动" },
    learn: { en: "Learn How It Works", zh: "了解如何参与" },
    missionTitle: { en: "Why Eco2Zero Exists", zh: "为什么做 Eco2Zero" },
    missionBody: {
      en: "Many people want to help the environment but don't know where to start. Eco2Zero turns sustainability into simple daily actions that anyone can do. Together, small changes create meaningful environmental impact.",
      zh: "很多人想保护环境，却不知从何开始。Eco2Zero 把可持续变成人人都能做的日常行动。我们一起，让小改变汇成真正的环境影响力。",
    },
    stepsTitle: { en: "How It Works", zh: "如何运作" },
    steps: [
      {
        title: { en: "Choose an Action", zh: "选择一个行动" },
        body: {
          en: "Bring a reusable cup, walk or bike instead of drive, reduce food waste, plant a tree, choose e-statements.",
          zh: "自带杯、步行或骑行、减少食物浪费、种一棵树、选择电子账单。",
        },
      },
      {
        title: { en: "Track Your Progress", zh: "记录你的进展" },
        body: {
          en: "Record your completed actions through our platform.",
          zh: "在平台上记录你完成的行动。",
        },
      },
      {
        title: { en: "Create Impact Together", zh: "一起创造影响" },
        body: {
          en: "Watch your individual actions contribute to community-wide environmental goals.",
          zh: "看见个人行动如何汇入社区级环境目标。",
        },
      },
    ],
    impactPreview: {
      title: { en: "Impact Dashboard", zh: "影响力仪表盘" },
      metrics: [
        { en: "Actions Completed", zh: "已完成行动", sample: "1,245" },
        { en: "kg CO₂ Reduced", zh: "减少二氧化碳（公斤）", sample: "2,360" },
        { en: "Community Members", zh: "社区成员", sample: "450" },
      ],
    },
    storyQuote: {
      en: "Eco2Zero made sustainability feel achievable.",
      zh: "Eco2Zero 让可持续变得触手可及。",
    },
    storyAttribution: {
      en: "— Sarah, Victoria",
      zh: "— Sarah，维多利亚",
    },
    ctaTitle: {
      en: "Ready to Make a Difference?",
      zh: "准备好带来改变了吗？",
    },
    ctaButton: { en: "Get Started", zh: "开始行动" },
  },
  about: {
    title: { en: "About Eco2Zero", zh: "关于 Eco2Zero" },
    storyTitle: { en: "Our Story", zh: "我们的故事" },
    storyLead: {
      en: "What if protecting the environment didn't have to start with big sacrifices, but with small everyday choices?",
      zh: "如果保护环境不必从小牺牲开始，而可以从日常的小选择开始呢？",
    },
    mission: {
      en: "To inspire, educate, and empower individuals and communities to take simple, measurable actions that create positive environmental impact.",
      zh: "启发、教育并赋能个人与社区，采取简单、可衡量的行动，创造积极的环境影响力。",
    },
    vision: {
      en: "A future where sustainable choices are easy, accessible, and integrated into everyday living, creating healthier communities and a more resilient planet for future generations.",
      zh: "让可持续选择变得简单、可及，并融入日常生活，为下一代创造更健康的社区与更有韧性的地球。",
    },
    values: [
      {
        title: { en: "Sustainability", zh: "可持续" },
        body: {
          en: "We promote practical actions that support long-term environmental well-being.",
          zh: "推动支持长期环境福祉的切实行动。",
        },
      },
      {
        title: { en: "Community", zh: "社区" },
        body: {
          en: "We believe collective action creates stronger and more meaningful impact.",
          zh: "相信集体行动能创造更强、更有意义的影响。",
        },
      },
      {
        title: { en: "Education", zh: "教育" },
        body: {
          en: "We empower people with knowledge, tools, and opportunities to make informed choices.",
          zh: "用知识、工具与机会赋能人们做出明智选择。",
        },
      },
      {
        title: { en: "Innovation", zh: "创新" },
        body: {
          en: "We embrace creative solutions that make sustainability engaging, measurable, and achievable.",
          zh: "拥抱让可持续变得有趣、可衡量、可实现的创新方案。",
        },
      },
    ],
  },
  actions: {
    categories: [
      {
        id: "waste",
        title: { en: "Waste Reduction", zh: "减少浪费" },
        items: {
          en: ["Reusable bags", "Refillable water bottles", "Composting"],
          zh: ["可重复使用购物袋", "可重复灌装水瓶", "堆肥"],
        },
      },
      {
        id: "transport",
        title: { en: "Transportation", zh: "出行" },
        items: {
          en: ["Walking", "Cycling", "Carpooling"],
          zh: ["步行", "骑行", "拼车"],
        },
      },
      {
        id: "energy",
        title: { en: "Energy Saving", zh: "节能" },
        items: {
          en: ["Reduce electricity use", "Smart thermostat settings"],
          zh: ["减少用电", "智能温控设置"],
        },
      },
      {
        id: "community",
        title: { en: "Community Actions", zh: "社区行动" },
        items: {
          en: ["Clean-up events", "Tree planting", "Workshops"],
          zh: ["清洁行动", "植树", "工作坊"],
        },
      },
    ],
    rewards: {
      en: ["Points system", "Badges", "Monthly challenges", "Community leaderboards"],
      zh: ["积分系统", "徽章", "月度挑战", "社区排行榜"],
    },
  },
  parentOrg: {
    en: "A program of Victoria Cultural & Wellness Society",
    zh: "维多利亚文化与健康协会旗下项目",
  },
} as const;

export type EcoCopy = typeof copy;
export type EcoNavKey = (typeof nav)[number]["key"];

export function pick<T extends Record<Lang, string>>(field: T, lang: Lang) {
  return field[lang];
}
