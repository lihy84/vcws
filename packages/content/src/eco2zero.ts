import type { Lang } from "./types";

/**
 * Eco2Zero product copy from the organizational design doc.
 * Shared by future eco2zero web surfaces and the mobile app.
 */
export const nav = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/eco-points", key: "ecoPoints" as const },
  { href: "/programs", key: "programs" as const },
  { href: "/schools", key: "schools" as const },
  { href: "/impact", key: "impact" as const },
  { href: "/partners", key: "partners" as const },
  { href: "/volunteer", key: "volunteer" as const },
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
    ecoPoints: { en: "Eco Points", zh: "环保积分" },
    impact: { en: "Impact", zh: "影响力" },
    programs: { en: "Programs & Events", zh: "项目与活动" },
    schools: { en: "Schools", zh: "学校合作" },
    partners: { en: "Partners", zh: "合作伙伴" },
    volunteer: { en: "Volunteer", zh: "志愿者" },
    contact: { en: "Contact", zh: "联系我们" },
  },
  home: {
    heroHeadline: {
      en: "Building Sustainable Communities Through Everyday Action",
      zh: "通过日常行动建设可持续社区",
    },
    heroSub: {
      en: "Eco2Zero empowers individuals, schools, businesses, and communities to take simple environmental actions, earn rewards, and create measurable impact together.",
      zh: "Eco2Zero帮助个人、学校、商家和社区通过简单环保行动获得积分奖励，并共同创造可衡量的环境影响力。",
    },
    join: { en: "Join the Movement", zh: "加入行动" },
    learn: { en: "Learn How It Works", zh: "了解如何参与" },
    missionTitle: { en: "What is Eco2Zero", zh: "什么是 Eco2Zero" },
    missionBody: {
      en: "Eco2Zero is a community-based environmental initiative that encourages people to take simple everyday actions to reduce waste, conserve resources, and build sustainable communities.",
      zh: "Eco2Zero是一个社区环保行动平台，通过鼓励人们实践简单环保行为，共同减少浪费、节约资源并建设可持续社区。",
    },
    stepsTitle: { en: "How It Works", zh: "如何运作" },
    steps: [
      {
        title: { en: "Take Eco Actions", zh: "参与环保行为" },
        body: {
          en: "Bring a reusable cup, walk or bike instead of drive, reduce food waste, plant a tree, choose e-statements.",
          zh: "自带杯、步行或骑行、减少食物浪费、种一棵树、选择电子账单。",
        },
      },
      {
        title: { en: "Earn Eco Points", zh: "获得环保积分" },
        body: {
          en: "Record environmental actions and earn points as you build better habits.",
          zh: "记录环保行为，在养成良好习惯的同时获取积分奖励。",
        },
      },
      {
        title: { en: "Redeem Rewards", zh: "兑换奖励" },
        body: {
          en: "Redeem coffee coupons, local discounts, event benefits, and community rewards.",
          zh: "兑换咖啡券、商家折扣、活动福利和社区奖励。",
        },
      },
      {
        title: { en: "Create Community Impact", zh: "创造社区影响力" },
        body: {
          en: "See every small action contribute to measurable community-wide change.",
          zh: "让每个人的小行动共同形成可衡量的社区改变。",
        },
      },
    ],
    impactPreview: {
      title: { en: "Impact Dashboard", zh: "影响力仪表盘" },
      metrics: [
        { en: "Total Actions", zh: "环保行为总数", sample: "1,245" },
        { en: "Community Members", zh: "参与人数", sample: "450" },
        { en: "kg CO₂ Reduced", zh: "减少碳排放（公斤）", sample: "2,360" },
        { en: "kg Waste Diverted", zh: "减少垃圾量（公斤）", sample: "860" },
        { en: "Partner Businesses", zh: "合作商家数量", sample: "18" },
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
      en: "To inspire, educate and empower communities through simple measurable environmental actions.",
      zh: "通过简单且可衡量的环保行动激励、教育并赋能社区。",
    },
    vision: {
      en: "A future where sustainable living becomes part of everyday life.",
      zh: "让可持续生活成为每个人的日常习惯。",
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
      {
        title: { en: "Impact", zh: "影响力导向" },
        body: {
          en: "We focus on measurable outcomes that strengthen funding, learning, and community trust.",
          zh: "关注可衡量的成果，为资金申请、持续学习与社区信任提供支持。",
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
