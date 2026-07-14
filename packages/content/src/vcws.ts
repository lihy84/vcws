export type { Lang } from "./types";
export { t } from "./types";

export const nav = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/projects", key: "projects" as const },
  { href: "/events", key: "events" as const },
  { href: "/volunteers", key: "volunteers" as const },
  { href: "/partners", key: "partners" as const },
  { href: "/resources", key: "resources" as const },
  { href: "/contact", key: "contact" as const },
];

export const copy = {
  brand: {
    zh: "维多利亚文化与健康协会",
    en: "Victoria Cultural & Wellness Society",
  },
  brandShort: {
    zh: "VCWS",
    en: "VCWS",
  },
  tagline: {
    zh: "让善意连接社区，让行动创造改变",
    en: "Connecting kindness. Creating change through action.",
  },
  englishTagline: {
    zh: "Together, We Build a Healthier, Stronger and More Connected Community.",
    en: "Together, We Build a Healthier, Stronger and More Connected Community.",
  },
  nav: {
    home: { zh: "首页", en: "Home" },
    about: { zh: "关于我们", en: "About" },
    projects: { zh: "项目中心", en: "Projects" },
    events: { zh: "活动中心", en: "Events" },
    volunteers: { zh: "志愿者", en: "Volunteers" },
    partners: { zh: "合作伙伴", en: "Partners" },
    resources: { zh: "资源中心", en: "Resources" },
    contact: { zh: "联系我们", en: "Contact" },
  },
  cta: {
    join: { zh: "加入我们", en: "Join Us" },
    explore: { zh: "探索项目", en: "Explore Projects" },
    volunteer: { zh: "成为志愿者", en: "Become a Volunteer" },
    learnMore: { zh: "了解更多", en: "Learn More" },
  },
  home: {
    visionLabel: {
      zh: "2026–2028 发展愿景",
      en: "2026–2028 Vision",
    },
    vision: {
      zh: "一个连接政府、社区、学校、企业、志愿者和居民的社区创新平台。",
      en: "A community innovation platform connecting government, neighbourhoods, schools, businesses, volunteers, and residents.",
    },
    intro: {
      zh: "维多利亚文化与健康协会（Victoria Cultural & Wellness Society）是一家注册于加拿大不列颠哥伦比亚省的非营利组织。我们相信，一个充满活力的社区，不仅需要完善的基础设施，更需要人与人之间的连接、关怀与共同成长。",
      en: "Victoria Cultural & Wellness Society (VCWS) is a nonprofit registered in British Columbia, Canada. We believe a vibrant community needs more than infrastructure—it needs connection, care, and shared growth.",
    },
    intro2: {
      zh: "因此，我们致力于通过文化交流、健康促进、环境保护、社区参与和跨代互动等方式，为不同背景、不同年龄和不同文化的人们创造更多相识、相知与合作的机会，共同建设更加包容、健康和可持续发展的社区。",
      en: "Through cultural exchange, wellness, environmental action, community participation, and intergenerational connection, we create opportunities for people of all backgrounds to meet, collaborate, and build a more inclusive, healthy, and sustainable community.",
    },
    focusTitle: {
      zh: "我们关注什么",
      en: "What We Focus On",
    },
    storyTitle: {
      zh: "我们的故事，从一次简单的相聚开始",
      en: "Our story began with a simple gathering",
    },
    storyBody: {
      zh: "当陌生人成为朋友，当参与变成归属感，社区便开始变得更加温暖。也是我们服务社区旅程的开始。",
      en: "When strangers become friends and participation becomes belonging, community grows warmer. That is where our journey of serving Victoria began.",
    },
    inviteTitle: {
      zh: "我们相信",
      en: "What We Believe",
    },
    inviteBody: {
      zh: "真正的社区改变，不是来自某一个人的努力，而是来自许多人愿意一起行动。每一次参与、每一次分享、每一次帮助、每一次善意的传递，都在让我们的社区变得更加温暖。",
      en: "Real community change does not come from one person alone—it comes from many people willing to act together. Every act of participation, sharing, help, and kindness warms our community.",
    },
  },
  about: {
    title: { zh: "关于我们", en: "About Us" },
    whyTitle: { zh: "我们为什么成立", en: "Why We Exist" },
    whyP1: {
      zh: "在今天的社会中，越来越多的人面临着孤独、压力、文化隔阂和社区参与不足等问题。",
      en: "Today, more people face loneliness, stress, cultural barriers, and limited community participation.",
    },
    whyP2: {
      zh: "新移民需要融入社区；长者需要陪伴与关怀；年轻人希望找到成长和贡献的平台；家庭需要更多健康和有意义的社区活动。",
      en: "Newcomers need pathways to belong. Elders need companionship and care. Young people seek platforms to grow and contribute. Families need healthy, meaningful community activities.",
    },
    bridgeTitle: { zh: "我们希望成为一座桥梁", en: "We aim to be a bridge" },
    bridgeItems: {
      zh: ["连接不同文化", "连接不同年龄", "连接资源与需求", "连接善意与行动"],
      en: [
        "Connecting cultures",
        "Connecting generations",
        "Connecting resources with needs",
        "Connecting kindness with action",
      ],
    },
    bridgeClose: {
      zh: "让每一个人都能在社区中找到归属感，也找到发挥自身价值的机会。",
      en: "So everyone can find belonging—and a chance to contribute their gifts.",
    },
    sustainTitle: {
      zh: "我们如何实现可持续发展",
      en: "How We Sustain Impact",
    },
    sustainIntro: {
      zh: "我们不仅关注活动本身，更关注长期的社区影响力。协会正在逐步建立：",
      en: "We look beyond one-off events toward lasting community impact. VCWS is building:",
    },
    pillars: [
      {
        title: { zh: "社区伙伴网络", en: "Community Partner Network" },
        body: {
          zh: "与学校、社区中心、企业、专业人士及其他非营利组织建立长期合作关系，共享资源，共同服务社区。",
          en: "Long-term relationships with schools, community centres, businesses, professionals, and other nonprofits—sharing resources to serve Victoria together.",
        },
      },
      {
        title: { zh: "志愿者成长体系", en: "Volunteer Growth Pathway" },
        body: {
          zh: "让参与者从活动参与者逐步成长为志愿者、项目负责人和社区领导者。",
          en: "Helping participants grow from attendees into volunteers, project leads, and community leaders.",
        },
      },
      {
        title: { zh: "数字化社区平台", en: "Digital Community Platforms" },
        body: {
          zh: "通过数字工具记录参与成果，促进资源共享、社区互动和长期参与。",
          en: "Digital tools that record participation, share resources, and support ongoing engagement.",
        },
      },
      {
        title: { zh: "多元资金支持模式", en: "Diverse Support Model" },
        body: {
          zh: "积极争取政府资助、社区基金、企业合作、社会捐赠、志愿服务贡献与社区资源共享，确保项目持续开展并扩大影响力。",
          en: "Grants, community funds, business partnerships, donations, volunteer contribution, and shared resources—so programs can grow sustainably.",
        },
      },
    ],
  },
  focuses: [
    {
      id: "wellness",
      title: { zh: "健康与福祉", en: "Health & Wellness" },
      body: {
        zh: "我们相信健康不仅仅是身体健康，更包括心理健康、社会联系和生活幸福感。",
        en: "Health is more than the body—it includes mental wellbeing, social connection, and life satisfaction.",
      },
      items: {
        zh: [
          "社区健康讲座",
          "瑜伽与身心健康活动",
          "舞动疗愈与艺术疗愈项目",
          "长者健康促进活动",
          "家庭健康教育项目",
          "社区互助与支持网络",
        ],
        en: [
          "Community health talks",
          "Yoga and mind-body wellness",
          "Dance and art healing programs",
          "Elder wellness activities",
          "Family health education",
          "Mutual-aid and support networks",
        ],
      },
      image: "/images/image1.jpg",
    },
    {
      id: "environment",
      title: { zh: "环境与可持续发展", en: "Environment & Sustainability" },
      body: {
        zh: "每个人微小的环保行动，都可能成为改变社区的重要力量。我们正推动社区环保行动计划，通过数字化积分激励机制，鼓励居民将环保行为融入日常生活。",
        en: "Small eco actions can transform a community. We are advancing digital incentives that help residents weave sustainable habits into daily life.",
      },
      items: {
        zh: [
          "减少一次性用品使用",
          "垃圾分类与回收",
          "资源再利用",
          "社区清洁行动",
          "低碳生活实践",
        ],
        en: [
          "Reducing single-use items",
          "Sorting and recycling",
          "Reuse and resource recovery",
          "Community cleanups",
          "Low-carbon living practices",
        ],
      },
      image: "/images/image7.jpg",
    },
    {
      id: "culture",
      title: { zh: "文化交流与社区融合", en: "Cultural Exchange & Belonging" },
      body: {
        zh: "维多利亚是一座充满多元文化魅力的城市。我们希望通过文化活动让更多人了解彼此、欣赏差异、建立友谊。",
        en: "Victoria is richly multicultural. Through cultural programs, we help people understand one another, appreciate difference, and build friendships.",
      },
      items: {
        zh: [
          "多元文化交流活动",
          "社区节庆活动",
          "艺术与表演项目",
          "国际文化分享会",
          "新移民社区融入活动",
          "青少年跨文化体验项目",
        ],
        en: [
          "Multicultural exchange events",
          "Community festivals",
          "Arts and performance projects",
          "International culture sharing nights",
          "Newcomer integration activities",
          "Youth cross-cultural experiences",
        ],
      },
      image: "/images/image2.jpg",
    },
    {
      id: "volunteer",
      title: { zh: "社区参与与志愿服务", en: "Community & Volunteering" },
      body: {
        zh: "我们相信，每个人都拥有改变社区的力量。无论您是教师、设计师、艺术家、园艺爱好者、企业经营者、学生，还是退休人士，您的经验、时间和热情都可能为社区带来积极影响。",
        en: "Everyone has the power to change a community. Whether you are a teacher, designer, artist, gardener, business owner, student, or retiree—your experience, time, and passion matter.",
      },
      items: {
        zh: [
          "欢迎每一位愿意贡献力量的人加入",
          "在帮助别人的同时创造更好的自己",
          "共同建设更好的社区",
        ],
        en: [
          "Open to everyone ready to contribute",
          "Grow yourself while helping others",
          "Build a stronger community together",
        ],
      },
      image: "/images/image8.jpg",
    },
  ],
  projects: {
    title: { zh: "项目中心", en: "Project Hub" },
    intro: {
      zh: "母站预留项目入口。未来项目中心将自动扩展，持续增加新的社区平台。",
      en: "This hub is the home base for VCWS programs—built to grow as new community platforms launch.",
    },
    items: [
      {
        slug: "eco-action",
        title: { zh: "环保行动平台", en: "Eco Action Platform" },
        subtitle: { zh: "Eco2Zero", en: "Eco2Zero" },
        body: {
          zh: "通过数字化积分激励，把减少浪费、低碳出行和日常环保行动变成社区习惯。",
          en: "Digital incentives that turn waste reduction, low-carbon travel, and everyday eco actions into community habits.",
        },
        image: "/images/image7.jpg",
      },
      {
        slug: "garden-education",
        title: { zh: "园艺教育平台", en: "Garden Education Platform" },
        subtitle: { zh: "Growing together", en: "Growing together" },
        body: {
          zh: "以园艺连接世代，学习粮食种植、自然疗愈与社区共享。",
          en: "Connecting generations through gardens—food growing, nature healing, and shared harvests.",
        },
        image: "/images/image6.jpg",
      },
      {
        slug: "health-promotion",
        title: { zh: "健康促进平台", en: "Health Promotion Platform" },
        subtitle: { zh: "Wellness in community", en: "Wellness in community" },
        body: {
          zh: "瑜伽、身心健康、长者促进与家庭健康教育，让福祉触手可及。",
          en: "Yoga, mind-body care, elder wellness, and family health education—wellbeing within reach.",
        },
        image: "/images/image1.jpg",
      },
      {
        slug: "cultural-exchange",
        title: { zh: "文化交流平台", en: "Cultural Exchange Platform" },
        subtitle: { zh: "Share & belong", en: "Share & belong" },
        body: {
          zh: "节庆、艺术、表演与跨文化体验，促进多元社区的理解与友谊。",
          en: "Festivals, arts, performance, and cross-cultural experiences that deepen understanding and friendship.",
        },
        image: "/images/image2.jpg",
      },
      {
        slug: "youth-development",
        title: { zh: "青年发展平台", en: "Youth Development Platform" },
        subtitle: { zh: "Next generation leaders", en: "Next generation leaders" },
        body: {
          zh: "为年轻人提供成长、贡献与领导的机会，成为社区改变的力量。",
          en: "Pathways for young people to grow, contribute, and lead community change.",
        },
        image: "/images/image5.jpg",
      },
    ],
  },
  events: {
    title: { zh: "活动中心", en: "Events" },
    intro: {
      zh: "活动贯彻低浪费和环保理念，培养切实可行的可持续生活习惯，支持与维多利亚市零废弃目标相一致的社区参与。",
      en: "Our events lean low-waste and practical—building sustainable daily habits aligned with Victoria’s zero-waste goals.",
    },
    featured: {
      name: {
        zh: "Small Actions, Big Impact",
        en: "Small Actions, Big Impact",
      },
      subtitle: {
        zh: "Community Sustainability Workshop",
        en: "Community Sustainability Workshop",
      },
      meta: {
        zh: "90 分钟 · 约 30 人 · Camosun College",
        en: "90 minutes · ~30 people · Camosun College",
      },
      flowTitle: { zh: "活动流程", en: "Workshop Flow" },
      parts: [
        {
          title: { zh: "欢迎与破冰", en: "Welcome & Icebreaker" },
          time: { zh: "10 分钟", en: "10 min" },
          body: {
            zh: "通过简单互动，让大家发现：原来我已经在做很多环保行动。",
            en: "Simple prompts that reveal how many eco actions people already take.",
          },
        },
        {
          title: { zh: "社区对话", en: "Community Conversation" },
          time: { zh: "20 分钟", en: "20 min" },
          body: {
            zh: "围绕维多利亚的环境挑战分组讨论：食物浪费、交通、塑料、快时尚与能源消耗。",
            en: "Small groups explore Victoria’s challenges: food waste, transport, plastics, fast fashion, and energy use.",
          },
        },
        {
          title: { zh: "小行动头脑风暴", en: "Small Actions Brainstorm" },
          time: { zh: "20 分钟", en: "20 min" },
          body: {
            zh: "讨论明天就能做的事：自带杯、步行、减少食物浪费、二手交换。",
            en: "Focus on tomorrow’s choices: reusable cups, walking, less food waste, second-hand swaps.",
          },
        },
        {
          title: { zh: "社区挑战设计", en: "Community Challenge Design" },
          time: { zh: "20 分钟", en: "20 min" },
          body: {
            zh: "各组设计 7-Day Green Challenge，让参与变得可见、可执行。",
            en: "Each group designs a 7-Day Green Challenge that feels doable.",
          },
        },
        {
          title: { zh: "投票与影响挑战", en: "Voting & Impact Challenge" },
          time: { zh: "10 分钟", en: "10 min" },
          body: {
            zh: "用贴纸票选出 People’s Choice Green Challenge。",
            en: "Sticker votes choose the People’s Choice Green Challenge.",
          },
        },
        {
          title: { zh: "继续旅程", en: "Continue the Journey" },
          time: { zh: "10 分钟", en: "10 min" },
          body: {
            zh: "介绍免费社区工具 Eco2Zero，帮助大家记录和追踪行动。",
            en: "Introduce Eco2Zero—a free community tool to record and track actions.",
          },
        },
      ],
    },
    principlesTitle: {
      zh: "活动执行方向",
      en: "How We Run Events",
    },
    principles: {
      zh: [
        "鼓励携带可重复使用的杯子、购物袋和容器",
        "减少印刷材料，优先数字化沟通与二维码参与",
        "材料尽可能重复使用、可回收或减少使用",
        "小规模聚会降低不必要的废物产生",
      ],
      en: [
        "Bring reusable cups, bags, and containers",
        "Fewer printouts—digital updates and QR participation",
        "Reuse, recycle, or reduce materials wherever possible",
        "Small gatherings to avoid unnecessary waste",
      ],
    },
  },
  volunteers: {
    title: { zh: "志愿者", en: "Volunteers" },
    intro: {
      zh: "在这里，您不仅是在帮助别人，也是在创造更好的自己和更好的社区。",
      en: "Here you help others—and grow into a better version of yourself and community.",
    },
    invite: {
      zh: "如果您愿意贡献时间、专业技能、经验、资源或创意，我们诚挚地邀请您加入维多利亚文化与健康协会。",
      en: "If you can offer time, skills, experience, resources, or ideas, we warmly invite you to join VCWS.",
    },
    rolesTitle: { zh: "你可以这样参与", en: "Ways to Get Involved" },
    roles: {
      zh: [
        "活动现场支持与接待",
        "健康与文化项目协助",
        "环保行动与社区清洁",
        "内容、设计与数字平台",
        "翻译与跨文化沟通",
        "合作拓展与资源连接",
      ],
      en: [
        "Event hosting and hospitality",
        "Wellness and culture program support",
        "Eco actions and community cleanups",
        "Content, design, and digital platforms",
        "Translation and cross-cultural communication",
        "Partnership outreach and resource linking",
      ],
    },
  },
  partners: {
    title: { zh: "合作伙伴", en: "Partners" },
    intro: {
      zh: "我们持续与社区领袖、公共服务代表、艺术家与机构交流，了解社区需求，探索更好服务居民的合作机会。",
      en: "We stay in conversation with community leaders, public servants, artists, and institutions—to learn needs and co-create better services.",
    },
    stories: [
      {
        title: {
          zh: "向社区领袖学习与交流",
          en: "Learning with Community Leaders",
        },
        body: {
          zh: "维多利亚文化与健康协会持续与社区领袖及公共服务代表保持沟通与交流，了解社区需求，学习优秀经验，探索能够更好服务居民的创新项目和合作机会。协会负责人拜访 BC 省议员屈洁冰女士，就社区参与、居民服务及非营利组织发展等议题进行交流，为协会未来项目规划和社区服务方向提供参考。",
          en: "VCWS maintains ongoing dialogue with community leaders and public service representatives to understand needs, learn from strong practice, and explore innovative partnerships. Our lead met with BC MLA Grace Chu to discuss civic participation, resident services, and nonprofit development—insights that guide our future programs.",
        },
        image: "/images/image4.jpg",
      },
      {
        title: {
          zh: "促进文化与社区连接",
          en: "Connecting Culture and Community",
        },
        body: {
          zh: "协会积极参与本地文化交流活动，与艺术家、文化工作者及社区代表建立联系，共同探索文化艺术在促进社区融合、身心健康和跨文化交流中的积极作用。",
          en: "We take part in local cultural exchange, building ties with artists, cultural workers, and community representatives to explore how arts strengthen belonging, wellbeing, and cross-cultural connection.",
        },
        image: "/images/image2.jpg",
      },
      {
        title: { zh: "倾听社区声音", en: "Listening to the Community" },
        body: {
          zh: "协会积极参与社区活动及公共交流平台，与不同层级的公共服务代表、社区机构及居民保持互动。我们相信，真正有价值的社区项目，应当建立在倾听居民需求、了解社区现状以及多方合作的基础之上。",
          en: "We show up in community spaces and public forums, staying in dialogue with residents and institutions. Valuable programs begin by listening, understanding local reality, and collaborating across sectors.",
        },
        image: "/images/image8.jpg",
      },
    ],
  },
  resources: {
    title: { zh: "资源中心", en: "Resource Centre" },
    intro: {
      zh: "汇集协会介绍、项目入口与可持续生活实践资料，服务居民、学校与合作伙伴。",
      en: "Guides and entry points for residents, schools, and partners—about VCWS programs and sustainable living.",
    },
    items: [
      {
        title: { zh: "协会简介", en: "About VCWS" },
        body: {
          zh: "认识我们的使命、关注领域与 2026–2028 发展愿景。",
          en: "Learn our mission, focus areas, and 2026–2028 vision.",
        },
        href: "/about",
      },
      {
        title: { zh: "项目入口", en: "Program Entry Points" },
        body: {
          zh: "浏览环保、园艺、健康、文化交流与青年发展平台。",
          en: "Browse eco, garden, health, culture, and youth platforms.",
        },
        href: "/projects",
      },
      {
        title: { zh: "活动参与", en: "Join an Event" },
        body: {
          zh: "了解社区工作坊与可持续行动挑战的参与方式。",
          en: "See how to join workshops and community action challenges.",
        },
        href: "/events",
      },
      {
        title: { zh: "志愿者指南", en: "Volunteer Guide" },
        body: {
          zh: "了解可贡献的角色，把善意化为持续行动。",
          en: "Discover roles where kindness becomes consistent action.",
        },
        href: "/volunteers",
      },
    ],
  },
  contact: {
    title: { zh: "联系我们", en: "Contact" },
    intro: {
      zh: "让我们一起把善意变成行动，把行动变成改变，把改变带给更多人。",
      en: "Let’s turn kindness into action, action into change, and change into wider impact.",
    },
    location: {
      zh: "维多利亚 · 不列颠哥伦比亚省 · 加拿大",
      en: "Victoria · British Columbia · Canada",
    },
    formName: { zh: "姓名", en: "Name" },
    formEmail: { zh: "邮箱", en: "Email" },
    formMessage: { zh: "留言", en: "Message" },
    formSubmit: { zh: "发送留言", en: "Send Message" },
    formNote: {
      zh: "此表单为前端演示。部署后可接入邮箱或表单服务。",
      en: "This form is a front-end demo. Connect email or a form service after deploy.",
    },
  },
  footer: {
    rights: {
      zh: "维多利亚文化与健康协会 · 注册于加拿大不列颠哥伦比亚省",
      en: "Victoria Cultural & Wellness Society · Registered in British Columbia, Canada",
    },
  },
} as const;
