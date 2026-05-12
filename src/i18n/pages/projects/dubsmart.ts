import type { Locale } from "../../index";

const ru = {
  pageTitle: "Dubsmart — Анастасия Штоц",
  backToPortfolio: "Назад к портфолио",
  heroTitle: "DubSmart — дизайн и развитие AI-платформы для медиа",
  heroIntro:
    "DubSmart объединяет инструменты для дубляжа, озвучивания, клонирования голосов, генерации изображений и субтитров в одной платформе. Я работала над развитием продукта в течение двух лет: проектировала новые функции, улучшала ключевые сценарии, поддерживала UI kit и помогала делать интерфейс более понятным, цельным и масштабируемым.",
  meta: ["AI", "SaaS", "Web", "UX/UI", "2024–2026"],
  projectMeta: [
    { label: "Роль", value: ["Product Designer", "UX/UI Designer"] },
    { label: "Период", value: "2024–2026" },
    { label: "Фокус", value: ["AI Dubbing", "Dashboard", "Design System"] },
    { label: "Платформа", value: "Web app" },
    { label: "Сайт проекта", value: "Посмотреть сайт ↗", href: "https://dubsmart.ai/" },
  ],
  heroImageAlt: "DubSmart cover",
  about: {
    title: "О проекте",
    paragraphs: [
      "DubSmart уже был рабочим AI-продуктом с платными пользователями и одной из ранних реализаций AI Dubbing. По мере роста платформы интерфейс начал хуже справляться с новыми задачами: пользователям было сложно ориентироваться в функциях, сценарии становились перегруженными, а старые решения хуже подходили для масштабирования.",
      "Команде нужно было не просто обновить внешний вид, а сделать продукт более понятным, профессиональным и готовым к росту.",
    ],
  },
  contributions: {
    title: "Мой вклад в проект",
    intro:
      "Я проектировала ключевые пользовательские сценарии, редизайнила интерфейсы AI-инструментов и помогала сделать платформу более понятной, цельной и масштабируемой.",
    impactLabel: "Что это дало",
    items: [
      {
        number: "01",
        title: "UX-сценарии AI-инструментов",
        description:
          "Проектировала флоу для загрузки файлов, настройки параметров, обработки, редактирования и экспорта результата.",
        impact: "AI-сценарии стали понятнее и предсказуемее для пользователя.",
        tag: "AI workflows",
      },
      {
        number: "02",
        title: "Редизайн ключевых разделов",
        description:
          "Работала над AI Dubbing, Text to Speech, Voice Cloning, Speech to Text, Text to Image, Speech Separator, дашбордами и страницами проектов.",
        impact: "Разные разделы платформы стали выглядеть и работать более цельно.",
        tag: "Product redesign",
      },
      {
        number: "03",
        title: "Дизайн-система и UI kit",
        description:
          "Расширяла и поддерживала дизайн-систему: обновляла компоненты, состояния, паттерны и UI kit для новых сценариев.",
        impact: "Интерфейс стал консистентнее, а продукт — проще для масштабирования.",
        tag: "Design system",
      },
      {
        number: "04",
        title: "Дашборды и управление проектами",
        description:
          "Улучшала структуру карточек проектов, статусы, действия и навигацию между разными типами задач.",
        impact: "Дашборд стал рабочим пространством, а не просто списком файлов.",
        tag: "Dashboard UX",
      },
    ],
  },
  contextAndTask: {
    title: "Контекст и задача",
    paragraphs: [
      "DubSmart уже был рабочим AI-продуктом с пользователями и платными подписчиками, но по мере роста платформы интерфейс начал хуже справляться с новыми задачами. В продукт добавлялись новые функции, сценарии становились сложнее, а пользователям было не всегда легко быстро найти нужный инструмент и пройти путь до результата.",
      "Команде нужно было не просто обновить внешний вид интерфейса, а сделать продукт более понятным, профессиональным и готовым к масштабированию. Важно было сохранить существующую логику сервиса, но при этом улучшить структуру ключевых сценариев, навигацию, визуальную консистентность и работу с новыми функциями.",
      "Главная задача — сделать DubSmart удобнее для регулярной работы: от выбора AI-инструмента и загрузки материала до обработки, редактирования и получения результата.",
    ],
    keyTaskLabel: "Ключевая задача",
    keyTaskTitle:
      "Сделать сложную AI-платформу более понятной, профессиональной и готовой к росту.",
    focusLabel: "Фокус работы:",
    taskFocus: [
      "Упростить путь от выбора инструмента до результата",
      "Сделать функции легче для поиска",
      "Привести разные разделы к единой логике",
      "Поддержать добавление новых возможностей",
      "Повысить ощущение качества и доверия к продукту",
    ],
  },
  improvements: {
    title: "Что нужно было улучшить",
    intro:
      "Существующий интерфейс уже закрывал базовые задачи продукта, но хуже подходил для следующего этапа роста. Пользовательские сценарии становились сложнее, количество инструментов увеличивалось, а интерфейсу нужно было поддерживать больше действий, состояний и типов проектов.",
    cards: [
      {
        number: "01",
        title: "Сложность интерфейса",
        description:
          "Пользователям было не всегда просто понять, где находится нужная функция и как быстрее перейти к результату.",
      },
      {
        number: "02",
        title: "Устаревшая визуальная система",
        description:
          "Продукту нужно было выглядеть более современно, профессионально и убедительно для платных пользователей и крупных клиентов.",
      },
      {
        number: "03",
        title: "Слабая масштабируемость",
        description:
          "Старые решения хуже подходили для добавления новых функций, инструментов и состояний интерфейса.",
      },
      {
        number: "04",
        title: "Разрозненность сценариев",
        description:
          "Разные разделы платформы нуждались в более единой логике, чтобы продукт ощущался цельной системой.",
      },
    ],
  },
  solutionOne: {
    eyebrow: "Ключевое решение 01",
    title: "AI Dubbing Studio: от набора настроек к рабочей среде",
    paragraphs: [
      "AI Dubbing был одним из самых сложных сценариев в продукте. Старый интерфейс решал базовую задачу, но с ростом функциональности стал хуже масштабироваться: текст, перевод, спикеры, видео и настройки воспринимались как отдельные части, а не как единый рабочий процесс.",
      "В новой версии интерфейс был переосмыслен как студия редактирования: с таймлайном, видео-превью, дорожками, текстовыми блоками и более явной связью между переводом, аудио и результатом.",
    ],
    imageCaptions: {
      old: "Old Design",
      new: "New Design",
    },
    imageAria: {
      old: "Открыть Old Design в большом размере",
      new: "Открыть New Design в большом размере",
    },
    imageAlt: {
      old: "Old AI Dubbing Studio interface",
      new: "New AI Dubbing Studio interface",
    },
    oldListTitle: "Что не работало в старом дизайне",
    oldList: [
      "Интерфейс выглядел как набор отдельных полей и настроек, а не как цельная рабочая среда.",
      "Сценарий плохо масштабировался под новые функции и более сложные задачи.",
      "Видео, текст, перевод и настройки воспринимались как разрозненные части.",
      "Пользователю было сложнее контролировать процесс и понимать структуру проекта.",
    ],
    newListTitle: "Что улучшилось в новой версии",
    newList: [
      "Интерфейс стал больше похож на полноценную рабочую студию.",
      "Появился таймлайн, который помогает видеть структуру проекта во времени.",
      "Видео-превью, дорожки и текстовые блоки стали частью единого процесса.",
      "Пользователь получил больше контроля над редактированием и результатом.",
    ],
  },
  solutionTwo: {
    eyebrow: "Ключевое решение 02",
    title: "Dashboard: от витрины функций к рабочему пространству",
    paragraphs: [
      "Вместе с ростом DubSmart нужно было переосмыслить dashboard. Старая версия больше работала как витрина основных инструментов: пользователь видел доступные функции, но структура хуже подходила для регулярной работы с проектами, статусами и новыми сценариями.",
      "В новой версии dashboard стал более рабочим и масштабируемым: навигация стала понятнее, инструменты — лучше организованными, а проекты и их статусы — заметнее. Интерфейс стал больше похож на пространство для ежедневной работы с AI-проектами, а не просто на стартовый экран продукта.",
    ],
    imageCaptions: {
      old: "Old Design",
      new: "New Design",
    },
    imageAria: {
      old: "Открыть Old Dashboard Design в большом размере",
      new: "Открыть New Dashboard Design в большом размере",
    },
    imageAlt: {
      old: "Old dashboard interface",
      new: "New dashboard interface",
    },
    oldListTitle: "Что не работало в старом dashboard",
    oldList: [
      "Главный экран больше напоминал витрину функций, чем рабочее пространство.",
      "Карточки инструментов занимали много внимания, а проекты выглядели второстепенно.",
      "Навигация хуже масштабировалась под рост количества AI-инструментов.",
      "Интерфейс выглядел менее зрелым для продукта с платными пользователями и крупными клиентами.",
    ],
    newListTitle: "Что улучшилось в новой версии",
    newList: [
      "Dashboard стал рабочим пространством для управления AI-проектами.",
      "Навигация стала более структурированной и готовой к добавлению новых инструментов.",
      "Пользователь быстрее видит актуальные проекты, их статусы и доступные действия.",
      "Интерфейс стал выглядеть более профессионально, цельно и подходяще для регулярного использования.",
    ],
    callouts: [
      {
        number: "01",
        title: "Масштабируемая навигация",
        description:
          "Боковая навигация помогла организовать растущее количество AI-инструментов и сделать нужные разделы быстрее доступными.",
      },
      {
        number: "02",
        title: "Фокус на проектах",
        description:
          "Интерфейс сместил акцент с демонстрации функций на проекты, статусы и быстрые действия, необходимые в ежедневной работе.",
      },
      {
        number: "03",
        title: "Понятная иерархия",
        description:
          "Главные действия, список проектов и навигация стали визуально яснее, благодаря чему интерфейс проще считывается и лучше направляет пользователя.",
      },
      {
        number: "04",
        title: "Более зрелый образ продукта",
        description:
          "DubSmart стал выглядеть более профессионально и убедительно для платных пользователей, команд и крупных клиентов.",
      },
    ],
  },
  solutionThree: {
    eyebrow: "Ключевое решение 03",
    title: "Расширение функциональности без усложнения интерфейса",
    paragraphs: [
      "В DubSmart регулярно появлялись новые функции и сценарии, поэтому важно было добавлять их так, чтобы интерфейс не становился сложнее для пользователя.",
      "Я работала над тем, чтобы новые инструменты логично встраивались в продукт: через пользовательские сценарии, UI-компоненты, состояния проектов и отображение в dashboard.",
    ],
    integrationCaption: "Как новая функция встраивается в продукт",
    integrationSteps: [
      "Новая функция",
      "UX Flow",
      "UI Components",
      "Project State",
      "Dashboard Integration",
    ],
    integrationNote:
      "Схема показывает, как новая функция проходила путь от отдельного сценария до полноценной части платформы.",
    cards: [
      {
        number: "01",
        title: "Не отдельный экран, а часть продукта",
        description:
          "Новая функция должна была работать не изолированно, а как часть общей платформы: с понятной навигацией, едиными паттернами и связью с проектами пользователя.",
      },
      {
        number: "02",
        title: "Сценарий от начала до результата",
        description:
          "Для каждой функции важно было продумать полный путь: как пользователь создаёт проект, какие параметры выбирает, что происходит во время обработки и как он получает результат.",
      },
      {
        number: "03",
        title: "Масштабирование без визуального хаоса",
        description:
          "Новые инструменты должны были использовать общие компоненты, состояния и правила интерфейса, чтобы продукт оставался консистентным при росте функциональности.",
      },
    ],
  },
  result: {
    title: "Результат",
    paragraphs: [
      "Работа над DubSmart помогла перевести интерфейс платформы на более зрелый уровень: продукт стал выглядеть современнее, профессиональнее и лучше подготовленным к росту функциональности.",
      "Ключевые сценарии стали понятнее для пользователя: AI Dubbing был переосмыслен как полноценная рабочая студия, dashboard стал удобнее для управления проектами, а новые функции начали встраиваться в продукт через более единую систему сценариев, компонентов и состояний.",
      "Для меня этот проект стал важным опытом работы с реальным AI-продуктом, где дизайн должен был решать не только визуальные задачи, но и помогать продукту масштабироваться, сохранять понятность и поддерживать доверие пользователей.",
    ],
    cards: [
      {
        number: "01",
        title: "Более понятные AI-сценарии",
        description:
          "Пользовательский путь стал яснее: от выбора инструмента и загрузки материала до обработки, редактирования и результата.",
      },
      {
        number: "02",
        title: "Более зрелый интерфейс",
        description:
          "Платформа стала выглядеть современнее и профессиональнее для пользователей, команд и крупных клиентов.",
      },
      {
        number: "03",
        title: "Масштабируемая продуктовая система",
        description:
          "Новые функции стало проще встраивать в интерфейс через общие паттерны, состояния и компоненты.",
      },
      {
        number: "04",
        title: "Единый пользовательский опыт",
        description:
          "Разные инструменты платформы стали ощущаться как части одного продукта, а не как отдельные несвязанные разделы.",
      },
    ],
  },
  lightbox: {
    closeAria: "Закрыть изображение",
  },
};

const en = {
  pageTitle: "Dubsmart — Anastasiia Shtots",
  backToPortfolio: "Back to portfolio",
  heroTitle: "DubSmart — design and growth of an AI media platform",
  heroIntro:
    "DubSmart combines dubbing, voice-over, voice cloning, image generation, and subtitles in one platform. I worked on the product for two years: designing new features, improving key user flows, maintaining the UI kit, and making the interface clearer, more consistent, and scalable.",
  meta: ["AI", "SaaS", "Web", "UX/UI", "2024–2026"],
  projectMeta: [
    { label: "Role", value: ["Product Designer", "UX/UI Designer"] },
    { label: "Period", value: "2024–2026" },
    { label: "Focus", value: ["AI Dubbing", "Dashboard", "Design System"] },
    { label: "Platform", value: "Web app" },
    { label: "Project site", value: "View website ↗", href: "https://dubsmart.ai/" },
  ],
  heroImageAlt: "DubSmart cover",
  about: {
    title: "About the project",
    paragraphs: [
      "DubSmart was already a working AI product with paying users and one of the early implementations of AI Dubbing. As the platform grew, the interface became less effective for new tasks: users found it harder to navigate features, flows became overloaded, and older solutions scaled poorly.",
      "The team needed more than a visual refresh. The product had to become clearer, more professional, and ready for growth.",
    ],
  },
  contributions: {
    title: "My contribution",
    intro:
      "I designed key user flows, redesigned AI tool interfaces, and helped make the platform clearer, more cohesive, and scalable.",
    impactLabel: "Impact",
    items: [
      {
        number: "01",
        title: "UX flows for AI tools",
        description:
          "I designed flows for file upload, parameter setup, processing, editing, and exporting results.",
        impact: "AI workflows became clearer and more predictable for users.",
        tag: "AI workflows",
      },
      {
        number: "02",
        title: "Redesign of key sections",
        description:
          "I worked on AI Dubbing, Text to Speech, Voice Cloning, Speech to Text, Text to Image, Speech Separator, dashboards, and project pages.",
        impact: "Platform sections became more visually and functionally consistent.",
        tag: "Product redesign",
      },
      {
        number: "03",
        title: "Design system and UI kit",
        description:
          "I expanded and maintained the design system: updating components, states, patterns, and the UI kit for new scenarios.",
        impact: "The interface became more consistent, and the product became easier to scale.",
        tag: "Design system",
      },
      {
        number: "04",
        title: "Dashboards and project management",
        description:
          "I improved project card structure, statuses, actions, and navigation between different task types.",
        impact: "The dashboard became a real workspace, not just a file list.",
        tag: "Dashboard UX",
      },
    ],
  },
  contextAndTask: {
    title: "Context and challenge",
    paragraphs: [
      "DubSmart was already a working AI product with users and paid subscriptions, but as the platform grew, the interface became less effective for new tasks. New features were added, scenarios became more complex, and users could not always quickly find the right tool and complete the path to a result.",
      "The team needed more than a visual update. The product had to become clearer, more professional, and ready to scale. It was important to keep the existing service logic while improving the structure of key flows, navigation, visual consistency, and integration of new features.",
      "The main goal was to make DubSmart more convenient for daily work: from choosing an AI tool and uploading material to processing, editing, and getting the final output.",
    ],
    keyTaskLabel: "Key challenge",
    keyTaskTitle:
      "Make a complex AI platform clearer, more professional, and ready for growth.",
    focusLabel: "Focus areas:",
    taskFocus: [
      "Simplify the path from tool selection to result",
      "Make features easier to find",
      "Unify interaction logic across sections",
      "Support adding new capabilities",
      "Increase the sense of quality and trust in the product",
    ],
  },
  improvements: {
    title: "What had to be improved",
    intro:
      "The existing interface covered core product needs but was less suitable for the next growth stage. User flows became more complex, the number of tools increased, and the interface had to support more actions, states, and project types.",
    cards: [
      {
        number: "01",
        title: "Interface complexity",
        description:
          "Users did not always clearly understand where the needed feature was and how to reach the result faster.",
      },
      {
        number: "02",
        title: "Outdated visual system",
        description:
          "The product needed to look more modern, professional, and credible for paying users and enterprise clients.",
      },
      {
        number: "03",
        title: "Limited scalability",
        description:
          "Legacy solutions were less suitable for adding new features, tools, and interface states.",
      },
      {
        number: "04",
        title: "Fragmented flows",
        description:
          "Different platform sections needed a more unified logic so the product felt like one complete system.",
      },
    ],
  },
  solutionOne: {
    eyebrow: "Key solution 01",
    title: "AI Dubbing Studio: from settings panel to production workspace",
    paragraphs: [
      "AI Dubbing was one of the most complex product flows. The old interface solved the basic task, but as functionality grew it scaled poorly: text, translation, speakers, video, and settings felt like separate pieces instead of one workflow.",
      "In the new version, the interface was rethought as an editing studio with a timeline, video preview, tracks, text blocks, and a clearer link between translation, audio, and output.",
    ],
    imageCaptions: {
      old: "Old Design",
      new: "New Design",
    },
    imageAria: {
      old: "Open Old Design in large view",
      new: "Open New Design in large view",
    },
    imageAlt: {
      old: "Old AI Dubbing Studio interface",
      new: "New AI Dubbing Studio interface",
    },
    oldListTitle: "What did not work in the old design",
    oldList: [
      "The interface looked like a set of separate fields and settings rather than a cohesive workspace.",
      "The flow scaled poorly for new features and more complex tasks.",
      "Video, text, translation, and settings felt disconnected.",
      "Users had less control and a weaker understanding of project structure.",
    ],
    newListTitle: "What improved in the new version",
    newList: [
      "The interface became closer to a full production studio.",
      "A timeline was added to show project structure over time.",
      "Video preview, tracks, and text blocks became parts of one process.",
      "Users gained more control over editing and output.",
    ],
  },
  solutionTwo: {
    eyebrow: "Key solution 02",
    title: "Dashboard: from feature showcase to workspace",
    paragraphs: [
      "As DubSmart grew, the dashboard had to be rethought. The old version behaved more like a showcase of core tools: users could see available features, but the structure was weaker for daily work with projects, statuses, and new scenarios.",
      "In the new version, the dashboard became more practical and scalable: navigation became clearer, tools were better organized, and projects with statuses became more visible. The interface now feels like a space for daily AI project work, not just a starting screen.",
    ],
    imageCaptions: {
      old: "Old Design",
      new: "New Design",
    },
    imageAria: {
      old: "Open Old Dashboard Design in large view",
      new: "Open New Dashboard Design in large view",
    },
    imageAlt: {
      old: "Old dashboard interface",
      new: "New dashboard interface",
    },
    oldListTitle: "What did not work in the old dashboard",
    oldList: [
      "The main screen looked more like a feature showcase than a workspace.",
      "Tool cards took too much attention while projects looked secondary.",
      "Navigation scaled worse as the number of AI tools increased.",
      "The interface looked less mature for a product with paying users and enterprise clients.",
    ],
    newListTitle: "What improved in the new version",
    newList: [
      "The dashboard became a workspace for managing AI projects.",
      "Navigation became more structured and ready for new tools.",
      "Users can see current projects, statuses, and available actions faster.",
      "The interface became more professional, cohesive, and suitable for regular use.",
    ],
    callouts: [
      {
        number: "01",
        title: "Scalable navigation",
        description:
          "Side navigation organized a growing number of AI tools and made key sections faster to access.",
      },
      {
        number: "02",
        title: "Project-centered focus",
        description:
          "The interface shifted focus from feature exposure to projects, statuses, and quick actions needed in daily work.",
      },
      {
        number: "03",
        title: "Clear hierarchy",
        description:
          "Primary actions, project list, and navigation became clearer, making the interface easier to scan and follow.",
      },
      {
        number: "04",
        title: "More mature product image",
        description:
          "DubSmart started to look more professional and convincing for paid users, teams, and enterprise clients.",
      },
    ],
  },
  solutionThree: {
    eyebrow: "Key solution 03",
    title: "Feature expansion without interface complexity",
    paragraphs: [
      "New features and scenarios were added to DubSmart regularly, so it was important to integrate them without making the interface harder for users.",
      "I worked on integrating new tools into the product logically: through user flows, UI components, project states, and dashboard integration.",
    ],
    integrationCaption: "How a new feature is integrated into the product",
    integrationSteps: [
      "New feature",
      "UX Flow",
      "UI Components",
      "Project State",
      "Dashboard Integration",
    ],
    integrationNote:
      "This scheme shows how a new feature moved from a standalone scenario to a full part of the platform.",
    cards: [
      {
        number: "01",
        title: "Not a separate screen, but part of the product",
        description:
          "A new feature had to work not in isolation, but as part of the platform: with clear navigation, shared patterns, and connection to user projects.",
      },
      {
        number: "02",
        title: "Flow from start to result",
        description:
          "For each feature, the full journey had to be designed: how a user creates a project, chooses parameters, what happens during processing, and how the result is delivered.",
      },
      {
        number: "03",
        title: "Scalability without visual chaos",
        description:
          "New tools had to reuse shared components, states, and interface rules so the product stayed consistent while functionality grew.",
      },
    ],
  },
  result: {
    title: "Result",
    paragraphs: [
      "Work on DubSmart moved the platform interface to a more mature level: the product became more modern, more professional, and better prepared for functional growth.",
      "Key flows became clearer for users: AI Dubbing was rethought as a full production studio, the dashboard became more convenient for project management, and new features started integrating through a more unified system of flows, components, and states.",
      "For me, this project became important experience working on a real AI product where design had to solve not only visual tasks but also support scale, preserve clarity, and maintain user trust.",
    ],
    cards: [
      {
        number: "01",
        title: "Clearer AI workflows",
        description:
          "The user path became clearer: from tool selection and upload to processing, editing, and final output.",
      },
      {
        number: "02",
        title: "More mature interface",
        description:
          "The platform became more modern and professional for users, teams, and enterprise clients.",
      },
      {
        number: "03",
        title: "Scalable product system",
        description:
          "New features became easier to integrate through shared patterns, states, and components.",
      },
      {
        number: "04",
        title: "Unified user experience",
        description:
          "Different platform tools started to feel like parts of one product instead of disconnected sections.",
      },
    ],
  },
  lightbox: {
    closeAria: "Close image",
  },
};

export const dubsmartPageContent: Record<Locale, typeof ru> = {
  ru,
  en,
};
