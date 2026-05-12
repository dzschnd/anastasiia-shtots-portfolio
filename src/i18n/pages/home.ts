import type { Locale } from "../index";

const ru = {
  caseStudies: [
    {
      title: "DubSmart",
      description:
        "Работа над AI-платформой для медиа: новые функции, UX-сценарии, dashboard, AI Dubbing Studio и дизайн-система.",
      tags: ["#AI", "#SaaS", "#Web app", "#UX/UI"],
      href: "/projects/dubsmart",
      gradient:
        "linear-gradient(147deg, rgba(252, 231, 243, 1) 0%, rgba(243, 232, 255, 1) 100%)",
    },
    {
      title: "Eventess",
      description:
        "Стартап-продукт для создания свадебных digital-приглашений: брендинг, конструктор, шаблоны, личный кабинет и mobile.",
      tags: ["#startup", "#web app", "#branding", "#UX/UI"],
      href: "/projects/eventess",
      gradient:
        "linear-gradient(147deg, rgba(228, 247, 255, 1) 0%, rgba(226, 235, 255, 1) 100%)",
    },
    {
      title: "Doctor Helper",
      description:
        "Healthcare AI-сервис для расшифровки антибиотикограмм: интерфейс AI-инструмента, история запросов, результат интерпретации, лендинг и маскот.",
      tags: ["#AI", "#Healthcare", "#Web app", "#Grant"],
      href: "/projects/doctor-helper",
      gradient:
        "linear-gradient(147deg, rgba(226, 242, 250, 1) 0%, rgba(212, 235, 248, 1) 100%)",
    },
  ],
  visualProjects: [
    {
      title: "Lollygoth",
      description:
        "Готический бьюти-концепт в розово-чёрной эстетике: косметика, упаковка, визуальный стиль и яркая продуктовая подача.",
      tags: ["#beauty", "#branding", "#packaging", "#visual"],
      href: "https://www.behance.net/gallery/246068139/Lollygoth-Branding-E-Commerce",
      tagClass: "border-[#ff92ee]/18 bg-[#ff92ee]/8 text-[#ffb7f3]",
      behanceLabel: "Behance",
      coverAlt: "Lollygoth cover",
    },
    {
      title: "No Limits",
      description:
        "Смелый визуальный проект на контрасте чёрного, белого и неонового лайма: сайт, графика, постеры и бренд-материалы.",
      tags: ["#branding", "#graphics", "#web", "#poster"],
      href: "https://www.behance.net/gallery/248873323/NO-LIMITS-AGENCY",
      tagClass: "border-[#CEFC51]/35 bg-[#CEFC51]/10 text-[#CEFC51]",
      behanceLabel: "Behance",
      coverAlt: "No Limits cover",
    },
  ],
};

const en = {
  caseStudies: [
    {
      title: "DubSmart",
      description:
        "Work on an AI media platform: new features, UX flows, dashboard, AI Dubbing Studio, and design system.",
      tags: ["#AI", "#SaaS", "#Web app", "#UX/UI"],
      href: "/projects/dubsmart",
      gradient:
        "linear-gradient(147deg, rgba(252, 231, 243, 1) 0%, rgba(243, 232, 255, 1) 100%)",
    },
    {
      title: "Eventess",
      description:
        "Startup product for creating wedding digital invitations: branding, builder, templates, account dashboard, and mobile versions.",
      tags: ["#startup", "#web app", "#branding", "#UX/UI"],
      href: "/projects/eventess",
      gradient:
        "linear-gradient(147deg, rgba(228, 247, 255, 1) 0%, rgba(226, 235, 255, 1) 100%)",
    },
    {
      title: "Doctor Helper",
      description:
        "Healthcare AI service for antibiogram interpretation: AI tool interface, request history, interpretation result, landing page, and mascot.",
      tags: ["#AI", "#Healthcare", "#Web app", "#Grant"],
      href: "/projects/doctor-helper",
      gradient:
        "linear-gradient(147deg, rgba(226, 242, 250, 1) 0%, rgba(212, 235, 248, 1) 100%)",
    },
  ],
  visualProjects: [
    {
      title: "Lollygoth",
      description:
        "Gothic beauty concept in pink and black aesthetics: cosmetics, packaging, visual style, and bold product presentation.",
      tags: ["#beauty", "#branding", "#packaging", "#visual"],
      href: "https://www.behance.net/gallery/246068139/Lollygoth-Branding-E-Commerce",
      tagClass: "border-[#ff92ee]/18 bg-[#ff92ee]/8 text-[#ffb7f3]",
      behanceLabel: "Behance",
      coverAlt: "Lollygoth cover",
    },
    {
      title: "No Limits",
      description:
        "Bold visual project built on black/white contrast and neon lime accents: website, graphics, posters, and brand materials.",
      tags: ["#branding", "#graphics", "#web", "#poster"],
      href: "https://www.behance.net/gallery/248873323/NO-LIMITS-AGENCY",
      tagClass: "border-[#CEFC51]/35 bg-[#CEFC51]/10 text-[#CEFC51]",
      behanceLabel: "Behance",
      coverAlt: "No Limits cover",
    },
  ],
};

export const homePageContent: Record<Locale, typeof ru> = {
  ru,
  en,
};
