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
      imageCaption: {
        zh: "协会发起人之一与BC省省长 Lorne Doerkson 在活动现场",
        en: "One of our co-founders with BC Premier Lorne Doerkson at an event",
      },
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
    recentTitle: { zh: "近期活动", en: "Recent gatherings" },
    galleryTitle: { zh: "活动瞬间", en: "Moments from the day" },
    featuredLabel: { zh: "工作坊形式", en: "Workshop format" },
    recent: [
      {
        slug: "dance-wellness",
        name: { zh: "舞动疗愈", en: "Dance & Wellness" },
        headline: {
          zh: "当身体开始舞动，心与心便有了回响",
          en: "When bodies begin to move, hearts begin to connect",
        },
        subtitle: {
          zh: "一场关于活力、连接与温暖的社区舞动疗愈之旅",
          en: "A community journey of movement, well-being, and human connection",
        },
        meta: {
          zh: "2026年10月13日 · Fernwood Neighbourhood House",
          en: "October 13, 2026 · Fernwood Neighbourhood House",
        },
        facilitator: {
          zh: "舞动疗愈导师笑含",
          en: "Guided by dance and wellness facilitator 笑含",
        },
        quote: {
          zh: "因舞动而相聚，因善意而连接。",
          en: "Moving together, connecting through kindness.",
        },
        image: "/images/events/dance-lead.jpg",
        lead: [
          {
            zh: "有一种温暖，不需要太多语言；有一种连接，只需要一颗愿意敞开的心。2026年10月13日，在 Fernwood Neighbourhood House 温暖而友好的空间里，维多利亚文化与健康协会举办了一场充满活力、欢笑与感动的舞动疗愈公益活动。",
            en: "Some moments of warmth need very few words. Some of the deepest connections begin with simply being open to one another. On October 13, 2026, Victoria Cultural & Wellness Society brought neighbours together at Fernwood Neighbourhood House for a joyful Dance & Wellness session.",
          },
          {
            zh: "在这里，没有人需要表现得多么出色，也没有人需要跟上谁的节奏。我们不追求标准的舞步，只希望每一个人都能暂时放下生活中的忙碌与压力，回到自己的身体，感受音乐与呼吸，也重新感受内心那份自然流动的生命力。当音乐响起，一个微笑、一次眼神交汇，都让陌生人之间的距离悄然缩短。",
            en: "No one needed to be an experienced dancer, follow perfect steps, or keep up with anyone else. The hope was simply to step away from the busyness of everyday life, reconnect with the body, enjoy the music, and rediscover a natural sense of energy. As the music began, a smile or a shared glance helped bridge the distance between people who had just met.",
          },
        ],
        sections: [
          {
            title: {
              zh: "从拘谨到舒展，从陌生到亲近",
              en: "From hesitation to freedom",
            },
            body: {
              zh: "活动中最令人珍惜的，并不是谁跳出了多么精彩的舞步，而是参与者逐渐打开自己的过程。当大家不再担心动作是否正确，手臂随着音乐舒展，笑容也变得越来越自然。不同的年龄、生活背景与文化经历，在音乐和舞动中有了共同的语言。我们看到的是身体的舒展，感受到的是心灵逐渐打开的温柔力量。",
              en: "The most meaningful part of the session was not how beautifully anyone danced, but how people gradually became more comfortable being themselves. As participants let go of the pressure to get every movement right, their gestures became freer and smiles appeared more naturally. Different ages, cultures, and life experiences found common ground through music and movement. We could see bodies relaxing, and sense people opening to the moment and to one another.",
            },
          },
          {
            title: {
              zh: "一杯茶、一份点心",
              en: "Tea, treats, and conversation",
            },
            body: {
              zh: "舞动带来的美好，并没有随着音乐的暂停而结束。茶歇时光里，大家放慢脚步，享用茶点，聊聊刚才的体验，也分享生活中的点滴。一杯茶、一份点心，不只是小小的休息，更希望每一位参与者感到被欢迎、被尊重，并愿意安心停留。有时，人与人之间的连接，就从这样一段不需要刻意安排的闲谈开始。",
              en: "The warmth continued after the music paused. The refreshment break offered time to slow down, enjoy a treat, and talk about the movement and about ordinary life. A cup of tea and a small bite were a way of caring for each person, so they could feel welcome not only to move, but also to stay. Sometimes the most genuine connections begin with an unhurried conversation.",
            },
          },
          {
            title: {
              zh: "分享心中的感受",
              en: "Sharing what we felt",
            },
            body: {
              zh: "当舞动的喜悦慢慢安静下来，我们邀请大家说出自己的感受：身体自由时的轻盈，暂时放下日常烦恼的片刻，以及与其他居民相遇、交流的温暖。每个人的体验都是独特的。当一个人愿意表达，另一个人愿意倾听，彼此之间便多了一份理解。这些交流让活动的意义超越了舞动本身。",
              en: "As the energy of the dancing settled, participants were invited to share what they had noticed: the lightness of moving freely, a brief pause from everyday worries, or the warmth of meeting other community members. Every experience was unique. When one person feels comfortable speaking and another is willing to listen, understanding begins to grow. Those conversations gave the gathering a meaning that reached beyond movement itself.",
            },
          },
          {
            title: {
              zh: "最动人的疗愈，是真实的连接",
              en: "Healing through connection",
            },
            body: {
              zh: "舞动让身体获得自由，茶歇让人们自在相聚，分享则让内心的感受有机会被听见。一个真诚的笑容可以让人感到被接纳，一段共同舞动、喝茶和分享的时光也可以提醒我们：即使每个人都有自己的生活与烦恼，我们依然能够在社区中彼此陪伴。真正有温度的社区，是人们有机会相遇、认识彼此，并在需要的时候感受到来自他人的善意。这一天，这样的连接真实地发生了。",
              en: "Movement offered freedom of expression. The refreshment break created space to meet. Sharing let personal feelings be heard. A sincere smile can help someone feel welcomed, and time spent dancing, drinking tea, and listening can remind us that we can still find companionship in community. A caring community is about more than living in the same neighbourhood. It is about chances to meet, share happiness, and feel the kindness of others. On this day, that connection became real.",
            },
          },
          {
            title: {
              zh: "让快乐流动，让善意延续",
              en: "Let joy continue",
            },
            body: {
              zh: "我们期待舞动疗愈不只是一次性的相聚，而能够逐渐成为社区生活中持续发生的一份美好，让更多居民在日常生活里找到快乐、活力、陪伴与归属感。当一个人重新感受到自己的生命力，快乐便有了开始；当一群人愿意彼此连接，社区便有了温度；当善意不断流动，美好便会在更多人的生活中生根发芽。",
              en: "We hope Dance & Wellness grows beyond a one-time gathering and becomes an ongoing part of community life, offering more residents joy, vitality, companionship, and a sense of belonging. When we reconnect with our own vitality, joy begins to grow. When people connect with one another, a community becomes warmer. And when kindness continues to flow, good things take root in more lives.",
            },
          },
        ],
        gallery: [
          {
            src: "/images/events/dance-arms.jpg",
            alt: {
              zh: "参与者随着音乐举起双臂",
              en: "Participants reaching upward with the music",
            },
          },
          {
            src: "/images/events/dance-seated.jpg",
            alt: {
              zh: "参与者在垫上做手抚心口的舞动",
              en: "A seated movement with hands over the heart",
            },
          },
          {
            src: "/images/events/dance-heart.jpg",
            alt: {
              zh: "大家闭上眼睛，把手放在心口",
              en: "The group pausing with hands over the heart",
            },
          },
          {
            src: "/images/events/dance-group.jpg",
            alt: {
              zh: "舞动疗愈活动结束后的合影",
              en: "Participants together after the Dance & Wellness session",
            },
          },
          {
            src: "/images/events/dance-table.jpg",
            alt: {
              zh: "茶歇时分享的茶点与水果",
              en: "Tea, fruit, and treats shared during the break",
            },
          },
        ],
      },
    ],
    forum: {
      slug: "mount-douglas",
      name: {
        zh: "从小小创意到美好改变",
        en: "Small Ideas, Meaningful Change",
      },
      headline: {
        zh: "让学生的创造力点亮可持续生活",
        en: "Inspiring sustainable living through student creativity",
      },
      subtitle: {
        zh: "Mount Douglas Secondary School 两场环保互动论坛",
        en: "Two interactive environmental forums at Mount Douglas Secondary School",
      },
      meta: {
        zh: "2026年11月6日 · Mount Douglas Secondary School · 两场论坛，每场约20名学生",
        en: "November 6, 2026 · Mount Douglas Secondary School · Two forums, about 20 students each",
      },
      image: "/images/events/eco-poster.jpg",
      imageAlt: {
        zh: "学生们举起自己的环保创意海报合影",
        en: "Students together with the environmental idea they created",
      },
      quote: {
        zh: "当年轻人被鼓励去创造性地思考、积极地付诸行动时，小小的创意也能够汇聚成真正有意义的改变。",
        en: "When young people are encouraged to think creatively and act thoughtfully, small ideas can become meaningful change.",
      },
      lead: [
        {
          zh: "2026年11月6日，维多利亚文化与健康协会把环保意识与可持续生活的理念带进 Mount Douglas Secondary School，举办了两场环保互动论坛。每场约有20名学生参加，整个上午充满好奇、讨论、创意和互动。",
          en: "On November 6, 2026, Victoria Cultural & Wellness Society brought environmental awareness and sustainable living to Mount Douglas Secondary School, hosting two environmental forums. About 20 students joined each session, and the morning was full of curiosity, discussion, creative ideas, and lively exchange.",
        },
        {
          zh: "我们不只是讲述环境保护的重要性，更希望学生成为积极的思考者、用创意解决问题的参与者，以及可持续未来的共同建设者。",
          en: "Rather than only talking about environmental protection, we invited students to become active thinkers, creative problem-solvers, and contributors to a more sustainable future.",
        },
      ],
      sections: [
        {
          title: { zh: "从环保意识到实际行动", en: "From awareness to action" },
          body: {
            zh: "学生们围绕如何减少浪费、在日常生活中作出更可持续的选择，以及如何承担更多环境责任展开交流。课堂很快成为一个开放讨论的空间：大家提问、分享自己的看法、讨论环境挑战，并提出可以把可持续生活放进日常的具体办法。",
            en: "Students explored practical ways to reduce waste, make more sustainable everyday choices, and take greater responsibility for the environment. The classroom quickly became a place for open conversation: students asked questions, shared their own perspectives, discussed environmental challenges, and proposed practical ways to make sustainable living part of daily routines.",
          },
        },
        {
          title: { zh: "让创意付诸行动", en: "Creativity in action" },
          body: {
            zh: "活动的亮点，是学生把想法做成展示和项目方案。各团队围绕环保主题，用演示文稿和创意构思说明日常的点滴行动如何让社区更健康、更可持续。现场进行了评分和评选，并向优秀团队颁发了包括“最佳创意奖”在内的奖项。",
            en: "A highlight was seeing students turn their ideas into presentations and project proposals. Teams used slides and creative concepts to show how everyday actions can contribute to a healthier, more sustainable community. A judging session recognized outstanding work, including a Best Creative Idea award for the winning teams.",
          },
        },
        {
          title: {
            zh: "一次共同成长的学习体验",
            en: "A shared learning experience",
          },
          body: {
            zh: "两场活动把环保教育、创意实践、开放讨论和积极参与连在一起，累计约有40人次学生参加。学生的投入，以及参与老师的积极反馈，都说明这种互动方式是有效的。尤其令人鼓舞的是，学生们开始想自己在生活里真正能做到的环保行动，而不只是停留在讨论。",
            en: "The two sessions brought together environmental education, creativity, open discussion, and participation. About 40 student participations were recorded across both forums. Students' enthusiasm, and the participating teacher's positive feedback, showed the value of this interactive approach. We were especially encouraged to see students identify practical actions they could take in their own lives.",
          },
        },
        {
          title: { zh: "感恩支持，让社区彼此连接", en: "Gratitude and community connection" },
          body: {
            zh: "协会衷心感谢 Mount Douglas Secondary School、参与活动的老师、所有学生，以及付出时间的志愿者。我们也感谢维多利亚市政府通过 My Great Neighbourhood Grant 支持这个项目，让学生有机会把环保意识、创造力和实际行动连在一起。每一个问题、每一个想法、每一项小小的建议，都是迈向更可持续未来的一步。",
            en: "Victoria Cultural & Wellness Society thanks Mount Douglas Secondary School, the participating teacher, every student, and the volunteers who made the forums possible. We are also grateful to the City of Victoria for supporting this initiative through the My Great Neighbourhood Grant, which helped students connect environmental awareness with creativity and practical action. Every question, every idea, and every small proposal is a step toward a more sustainable future.",
          },
        },
      ],
      closing: [
        {
          zh: "让我们携手同行，让可持续生活成为日常的一部分。",
          en: "Together, let's make sustainable living part of everyday life.",
        },
        {
          zh: "让善意连接社区，让行动创造改变。",
          en: "Let kindness connect community, let action create change.",
        },
      ],
      gallery: [
        {
          src: "/images/events/eco-welcome.jpg",
          alt: {
            zh: "活动开始时，老师与嘉宾互相问候",
            en: "The teacher and guests greeting one another as the forum begins",
          },
        },
        {
          src: "/images/events/eco-present.jpg",
          alt: {
            zh: "引导人在课堂前介绍从想法到计划",
            en: "The facilitator introducing how an idea becomes a plan",
          },
        },
        {
          src: "/images/events/eco-teacher.jpg",
          alt: {
            zh: "老师在课堂上与学生交流",
            en: "The teacher speaking with students during the forum",
          },
        },
        {
          src: "/images/events/eco-question.jpg",
          alt: {
            zh: "学生举手参与讨论",
            en: "A student raising a hand to join the discussion",
          },
        },
        {
          src: "/images/events/eco-team.jpg",
          alt: {
            zh: "学生小组围在电脑前整理创意",
            en: "A student team shaping their idea around a laptop",
          },
        },
        {
          src: "/images/events/eco-room.jpg",
          alt: {
            zh: "学生们在挂满旗帜的教室里听讲",
            en: "Students listening in the classroom",
          },
        },
        {
          src: "/images/events/eco-award-1.jpg",
          alt: {
            zh: "一组学生与老师、嘉宾举着获奖证书合影",
            en: "One student team with their certificate, the teacher, and guests",
          },
        },
        {
          src: "/images/events/eco-award-2.jpg",
          alt: {
            zh: "另一组获奖学生在投影前合影",
            en: "Another winning team photographed in front of the screen",
          },
        },
        {
          src: "/images/events/eco-award-3.jpg",
          alt: {
            zh: "第三组学生展示最佳创意奖证书",
            en: "A third team holding their Best Creative Idea certificate",
          },
        },
        {
          src: "/images/events/eco-award-4.jpg",
          alt: {
            zh: "第四组学生与嘉宾一起展示证书",
            en: "A fourth team with guests, showing their certificate",
          },
        },
        {
          src: "/images/events/eco-guide.jpg",
          alt: {
            zh: "引导人在学生中间讲解",
            en: "The facilitator speaking with students",
          },
        },
        {
          src: "/images/events/eco-sign.jpg",
          alt: {
            zh: "老师为学生填写获奖证书",
            en: "The teacher writing students' award certificates",
          },
        },
        {
          src: "/images/events/eco-share.jpg",
          alt: {
            zh: "学生们围在一起分享茶点",
            en: "Students sharing snacks together",
          },
        },
        {
          src: "/images/events/eco-group.jpg",
          alt: {
            zh: "全体参与者在教室里的大合影",
            en: "The full group together in the classroom",
          },
        },
        {
          src: "/images/events/eco-partners.jpg",
          alt: {
            zh: "引导人与老师站在一起",
            en: "The facilitator and teacher together",
          },
        },
      ],
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
          zh: "回看 Mount Douglas 环保论坛与舞动疗愈，并了解社区工作坊。",
          en: "Revisit the Mount Douglas environmental forums and Dance & Wellness, and see how to join community workshops.",
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
