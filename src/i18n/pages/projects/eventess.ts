import type { Locale } from "../../index";

const ru = {
  pageTitle: "Eventess — Анастасия Штоц",
  backToPortfolio: "Назад к портфолио",
  heroTitle: "Eventess — дизайн и брендинг сервиса свадебных digital-приглашений",
  heroIntro:
    "Eventess — стартап-продукт для создания и публикации свадебных онлайн-приглашений. Я разрабатывала проект с нуля вместе с командой: от брендинга, визуального языка и стилей шаблонов до конструктора, личного кабинета, ответов гостей, мобильных версий и UI kit.",
  meta: ["#startup", "#web app", "#branding", "#UX/UI"],
  projectMeta: [
    { label: "Роль", value: "UX/UI Designer" },
    { label: "Период", value: "Июнь 2023 — январь 2024" },
    { label: "Фокус", value: ["Branding", "Constructor", "Templates", "Mobile"] },
    { label: "Платформа", value: "Web app" },
    { label: "Сайт проекта", value: "eventess.org ↗", href: "https://eventess.org/" },
  ],
  heroImageAlt: "Eventess hero image",
  about: {
    title: "О проекте",
    paragraphs: [
      "Eventess — сервис для создания свадебных digital-приглашений. Пользователь выбирает готовый визуальный стиль, заполняет данные мероприятия, проверяет приглашение, смотрит превью, оплачивает публикацию и получает готовую страницу приглашения.",
      "Продукт также помогает собрать ответы гостей после публикации: пользователь может видеть, кто оставил ответ, и управлять своими приглашениями в личном кабинете.",
    ],
  },
  role: {
    title: "Моя роль",
    paragraphs: [
      "Я работала над Eventess как UX/UI Designer и участвовала в создании стартап-продукта с нуля вместе с командой.",
      "В мою зону ответственности входили брендинг, визуальная система, стили шаблонов, пользовательские сценарии, интерфейс конструктора, личный кабинет, ответы гостей, мобильная адаптация и UI kit.",
    ],
  },
  contributions: {
    title: "Мой вклад в проект",
    intro:
      "Я работала над Eventess с нуля: от брендинга и визуального языка до конструктора, шаблонов, личного кабинета и мобильных сценариев.",
    items: [
      {
        number: "01",
        title: "Брендинг и визуальный стиль",
        description:
          "Разработала айдентику продукта: настроение, цвета, типографику и визуальный язык сервиса.",
        tag: "Branding",
      },
      {
        number: "02",
        title: "Сценарий создания приглашения",
        description:
          "Проектировала путь от выбора шаблона до проверки, оплаты, публикации и сбора ответов гостей.",
        tag: "User flow",
      },
      {
        number: "03",
        title: "Конструктор и шаблоны",
        description:
          "Создавала интерфейс конструктора и стили шаблонов, чтобы пользователь получал красивый результат без ручного редактирования дизайна.",
        tag: "Constructor",
      },
      {
        number: "04",
        title: "Личный кабинет и mobile",
        description:
          "Проектировала управление приглашениями, черновики, ответы гостей, empty states и мобильные версии.",
        tag: "Product UX",
      },
    ],
  },
  contextAndTask: {
    title: "Контекст и задача",
    paragraphs: [
      "Eventess создавался как стартап-продукт с нуля, поэтому важно было сразу заложить понятную структуру: от первого знакомства с сервисом до создания, оплаты, публикации приглашения и сбора ответов гостей.",
      "Главный вызов был в балансе между эстетикой и функциональностью. Свадебное приглашение должно выглядеть красиво и эмоционально, но сам интерфейс не должен превращаться в сложный редактор с большим количеством настроек.",
      "Задача заключалась в том, чтобы создать продукт, где пользователь без дизайнерского опыта может быстро выбрать готовый стиль, заполнить данные и получить аккуратное digital-приглашение.",
    ],
    keyTaskLabel: "Ключевая задача",
    keyTaskTitle:
      "Создать простой и красивый сервис для свадебных digital-приглашений без перегруженного редактора.",
    taskFocus: [
      "понятный пошаговый сценарий",
      "готовые стили шаблонов",
      "превью перед публикацией",
      "оплата публикации",
      "ответы гостей после отправки приглашения",
    ],
  },
  userFlow: {
    title: "Пользовательский сценарий",
    paragraphs: [
      "Основной сценарий Eventess был построен как понятный пошаговый путь. Пользователь не редактирует дизайн вручную, а выбирает готовый стиль, заполняет данные, проверяет приглашение, смотрит превью, оплачивает публикацию и собирает ответы гостей.",
      "Такой подход помогает получить красивое digital-приглашение без сложного редактора и дизайнерских навыков.",
    ],
    steps: [
      "Выбор шаблона",
      "Заполнение данных",
      "Проверка",
      "Превью",
      "Оплата",
      "Публикация",
      "Ответы гостей",
    ],
    note:
      "Сценарий ведёт пользователя от первого выбора до опубликованного приглашения и обратной связи от гостей.",
  },
  brandingSolution: {
    eyebrow: "Ключевое решение 01",
    title: "Брендинг: праздничный стиль без визуального перегруза",
    paragraphs: [
      "Eventess должен был выглядеть мягко, празднично и эмоционально, но при этом оставаться современным digital-продуктом. Важно было не уйти в слишком декоративную свадебную эстетику, которая мешает интерфейсу и усложняет сценарий.",
      "Я разработала визуальное направление продукта с нуля: настроение, цветовую палитру, типографику, UI-стиль и стили шаблонов. Брендинг должен был поддерживать ощущение праздника, но не отвлекать пользователя от главной задачи — создать и опубликовать приглашение.",
    ],
    figureCaption: "Визуальное направление продукта",
    figureLightboxCaption: "Визуальное направление продукта",
    figureAria: "Открыть визуальное направление продукта в большом размере",
    figureAlt: "Визуальное направление продукта Eventess",
  },
  priorities: {
    title: "Что было важно в продукте",
    intro:
      "Eventess должен был быть не просто красивым свадебным сервисом, а понятным продуктом, который помогает пользователю пройти весь путь без дизайнерских навыков: выбрать стиль, заполнить данные, проверить приглашение, оплатить публикацию и получить ответы гостей.",
    cards: [
      {
        number: "01",
        title: "Красивый результат без дизайнера",
        description:
          "Пользователь выбирает готовый стиль шаблона, а не собирает дизайн вручную. Это снижает сложность и помогает быстрее получить аккуратное приглашение.",
      },
      {
        number: "02",
        title: "Пошаговый сценарий без перегруза",
        description:
          "Процесс создания приглашения был выстроен как последовательный путь: шаблон, данные, проверка, превью, оплата и публикация.",
      },
      {
        number: "03",
        title: "Эмоциональный, но понятный интерфейс",
        description:
          "Визуальный стиль должен был сохранять свадебное настроение, но не мешать функциональности: формы, CTA, навигация и состояния остаются простыми и читаемыми.",
      },
      {
        number: "04",
        title: "Продукт после публикации",
        description:
          "Eventess не заканчивается созданием приглашения: пользователь может управлять проектами, черновиками и видеть ответы гостей после публикации.",
      },
    ],
  },
  constructorSolution: {
    eyebrow: "Ключевое решение 01",
    title: "Конструктор: готовый стиль вместо сложного редактора",
    paragraphs: [
      "Главной частью Eventess стал конструктор приглашения. Важно было сделать процесс достаточно гибким, чтобы пользователь мог создать персональное приглашение, но не превращать интерфейс в сложный редактор с большим количеством ручных настроек.",
      "Пользователь выбирает готовый стиль шаблона, заполняет данные по шагам и сразу видит результат в preview. Такой подход помогает сохранить контроль над качеством дизайна и при этом сделать процесс понятным для людей без дизайнерского опыта.",
    ],
    figureLightboxCaption: "Eventess constructor screenshot",
    figureAria: "Открыть скрин конструктора Eventess в большом размере",
    figureAlt: "Eventess constructor screenshot",
    note:
      "Конструктор помогает заполнить приглашение по шагам и сразу увидеть, как данные будут выглядеть в готовом digital-приглашении.",
  },
  accountSolution: {
    eyebrow: "Ключевое решение 02",
    title: "Личный кабинет: управление приглашениями после создания",
    paragraphs: [
      "После создания приглашения пользователю важно иметь понятное место, где можно вернуться к проектам, продолжить черновик, посмотреть опубликованные приглашения и проверить ответы гостей.",
      "Я проектировала личный кабинет как спокойное рабочее пространство: с разделами для приглашений, черновиков, ответов гостей и страницы профиля. Важно было сделать структуру простой, чтобы пользователь быстро понимал, где находится нужная информация и что можно сделать дальше.",
      "Личный кабинет поддерживает весь путь после создания приглашения: от сохранения черновика до публикации и сбора обратной связи от гостей.",
    ],
    figureTitle: "Личный кабинет Eventess",
    draftsCaption: "Мои черновики",
    draftsLightboxCaption: "Мои черновики",
    draftsAria: "Открыть скриншот Мои черновики",
    draftsAlt: "Скриншот раздела Мои черновики в личном кабинете Eventess",
    profileCaption: "Профиль / личный кабинет",
    profileLightboxCaption: "Профиль / личный кабинет",
    profileAria: "Открыть скриншот профиля в личном кабинете Eventess",
    profileAlt: "Скриншот профиля в личном кабинете Eventess",
    note:
      "Личный кабинет помогает пользователю управлять приглашениями после создания: возвращаться к черновикам, отслеживать опубликованные проекты и видеть ответы гостей.",
  },
  result: {
    title: "Результат",
    paragraphs: [
      "В результате Eventess получил цельную продуктовую и визуальную систему: брендинг, стили шаблонов, конструктор приглашений, личный кабинет, ответы гостей, мобильные версии и UI kit.",
      "Проект объединил свадебную эстетику и понятный пользовательский сценарий: пользователь мог выбрать готовый стиль, заполнить данные, опубликовать приглашение и собрать ответы гостей без сложного редактора и дизайнерских навыков.",
    ],
    cards: [
      {
        number: "01",
        title: "Брендинг с нуля",
        description:
          "Продукт получил узнаваемый визуальный язык: логотип, палитру, типографику, настроение и стиль интерфейса.",
      },
      {
        number: "02",
        title: "Понятный сценарий создания",
        description:
          "Путь от выбора шаблона до публикации был выстроен как последовательный и спокойный пользовательский процесс.",
      },
      {
        number: "03",
        title: "Готовые стили шаблонов",
        description:
          "Пользователь мог выбрать настроение приглашения без ручной настройки дизайна и перегруженного редактора.",
      },
      {
        number: "04",
        title: "Личный кабинет и ответы гостей",
        description:
          "После публикации пользователь мог управлять приглашениями, возвращаться к черновикам и видеть ответы гостей.",
      },
    ],
  },
  lightbox: {
    closeAria: "Закрыть изображение",
  },
};

const en = {
  pageTitle: "Eventess — Anastasiia Shtots",
  backToPortfolio: "Back to portfolio",
  heroTitle: "Eventess — design and branding for a wedding digital invitation service",
  heroIntro:
    "Eventess is a startup product for creating and publishing wedding online invitations. I developed the project from scratch with the team: from branding, visual language, and template styles to the builder, account area, guest responses, mobile versions, and UI kit.",
  meta: ["#startup", "#web app", "#branding", "#UX/UI"],
  projectMeta: [
    { label: "Role", value: "UX/UI Designer" },
    { label: "Period", value: "June 2023 — January 2024" },
    { label: "Focus", value: ["Branding", "Builder", "Templates", "Mobile"] },
    { label: "Platform", value: "Web app" },
    { label: "Project site", value: "eventess.org ↗", href: "https://eventess.org/" },
  ],
  heroImageAlt: "Eventess hero image",
  about: {
    title: "About the project",
    paragraphs: [
      "Eventess is a service for creating wedding digital invitations. The user chooses a ready visual style, fills event details, reviews the invitation, checks preview, pays for publication, and receives a published invitation page.",
      "The product also helps collect guest responses after publication: the user can see who replied and manage invitations in the account area.",
    ],
  },
  role: {
    title: "My role",
    paragraphs: [
      "I worked on Eventess as a UX/UI Designer and helped build the startup product from scratch with the team.",
      "My responsibilities included branding, visual system, template styles, user flows, builder interface, account area, guest responses, mobile adaptation, and UI kit.",
    ],
  },
  contributions: {
    title: "My contribution",
    intro:
      "I worked on Eventess end-to-end: from branding and visual language to the builder, templates, account area, and mobile flows.",
    items: [
      {
        number: "01",
        title: "Branding and visual style",
        description:
          "I created the product identity: mood, colors, typography, and the service visual language.",
        tag: "Branding",
      },
      {
        number: "02",
        title: "Invitation creation flow",
        description:
          "I designed the user journey from template selection to review, payment, publication, and guest responses.",
        tag: "User flow",
      },
      {
        number: "03",
        title: "Builder and templates",
        description:
          "I designed the builder interface and template styles so users could get a polished result without manual design editing.",
        tag: "Builder",
      },
      {
        number: "04",
        title: "Account area and mobile",
        description:
          "I designed invitation management, drafts, guest responses, empty states, and mobile versions.",
        tag: "Product UX",
      },
    ],
  },
  contextAndTask: {
    title: "Context and challenge",
    paragraphs: [
      "Eventess was built as a startup product from scratch, so it was important to define a clear structure from the first interaction with the service to invitation creation, payment, publication, and guest response collection.",
      "The main challenge was balancing aesthetics and functionality. A wedding invitation should look beautiful and emotional, but the interface should not become a complex editor with too many settings.",
      "The goal was to create a product where users without design experience can quickly choose a ready style, fill in data, and get a polished digital invitation.",
    ],
    keyTaskLabel: "Key challenge",
    keyTaskTitle:
      "Create a simple and beautiful wedding digital invitation service without an overloaded editor.",
    taskFocus: [
      "clear step-by-step flow",
      "ready-to-use template styles",
      "preview before publication",
      "publication payment",
      "guest responses after invitation is sent",
    ],
  },
  userFlow: {
    title: "User flow",
    paragraphs: [
      "The core Eventess scenario was designed as a clear step-by-step path. Users do not edit design manually: they choose a ready style, fill data, review the invitation, check preview, pay for publication, and collect guest responses.",
      "This approach helps users get a beautiful digital invitation without a complex editor or design skills.",
    ],
    steps: [
      "Template selection",
      "Data entry",
      "Review",
      "Preview",
      "Payment",
      "Publication",
      "Guest responses",
    ],
    note:
      "The flow guides users from the first choice to a published invitation and guest feedback.",
  },
  brandingSolution: {
    eyebrow: "Key solution 01",
    title: "Branding: celebratory style without visual overload",
    paragraphs: [
      "Eventess had to feel soft, festive, and emotional while still being a modern digital product. It was important to avoid overly decorative wedding aesthetics that reduce usability and complicate the flow.",
      "I created the visual direction from scratch: mood, color palette, typography, UI style, and template styles. Branding had to support a festive feel without distracting users from the main goal: creating and publishing an invitation.",
    ],
    figureCaption: "Product visual direction",
    figureLightboxCaption: "Product visual direction",
    figureAria: "Open product visual direction in large view",
    figureAlt: "Eventess product visual direction",
  },
  priorities: {
    title: "What mattered in the product",
    intro:
      "Eventess had to be more than a beautiful wedding service. It had to be a clear product that helps users complete the full path without design skills: choose a style, fill data, review invitation, pay for publication, and receive guest responses.",
    cards: [
      {
        number: "01",
        title: "Beautiful result without a designer",
        description:
          "Users select a ready template style instead of building design manually. This reduces complexity and helps produce a polished invitation faster.",
      },
      {
        number: "02",
        title: "Step-by-step flow without overload",
        description:
          "The invitation creation process was structured as a sequential path: template, data, review, preview, payment, and publication.",
      },
      {
        number: "03",
        title: "Emotional but clear interface",
        description:
          "The visual style had to preserve wedding mood without harming usability: forms, CTA, navigation, and states remain simple and readable.",
      },
      {
        number: "04",
        title: "Product after publication",
        description:
          "Eventess does not end at invitation creation: users can manage projects, drafts, and guest responses after publication.",
      },
    ],
  },
  constructorSolution: {
    eyebrow: "Key solution 01",
    title: "Builder: ready style instead of a complex editor",
    paragraphs: [
      "The invitation builder became the core part of Eventess. The process had to stay flexible enough for users to create personalized invitations without turning the interface into a complicated editor with many manual settings.",
      "Users choose a ready template style, fill data step by step, and instantly see the result in preview. This keeps design quality controlled while remaining clear for people without design skills.",
    ],
    figureLightboxCaption: "Eventess builder screenshot",
    figureAria: "Open Eventess builder screenshot in large view",
    figureAlt: "Eventess builder screenshot",
    note:
      "The builder helps users fill invitations step by step and immediately see how data looks in the final digital invitation.",
  },
  accountSolution: {
    eyebrow: "Key solution 02",
    title: "Account area: invitation management after creation",
    paragraphs: [
      "After creating an invitation, users need a clear place to return to projects, continue drafts, view published invitations, and check guest responses.",
      "I designed the account area as a calm workspace with sections for invitations, drafts, guest responses, and profile. The structure had to stay simple so users quickly understand where information lives and what to do next.",
      "The account area supports the full post-creation path: from saved draft to publication and guest feedback collection.",
    ],
    figureTitle: "Eventess account area",
    draftsCaption: "My drafts",
    draftsLightboxCaption: "My drafts",
    draftsAria: "Open My drafts screenshot",
    draftsAlt: "My drafts section screenshot in Eventess account area",
    profileCaption: "Profile / account",
    profileLightboxCaption: "Profile / account",
    profileAria: "Open profile screenshot in Eventess account area",
    profileAlt: "Profile screenshot in Eventess account area",
    note:
      "The account area helps users manage invitations after creation: return to drafts, track published projects, and view guest responses.",
  },
  result: {
    title: "Result",
    paragraphs: [
      "As a result, Eventess received a cohesive product and visual system: branding, template styles, invitation builder, account area, guest responses, mobile versions, and UI kit.",
      "The project combined wedding aesthetics with a clear user flow: users could choose a ready style, fill data, publish invitations, and collect guest responses without a complex editor or design skills.",
    ],
    cards: [
      {
        number: "01",
        title: "Branding from scratch",
        description:
          "The product received a recognizable visual language: logo, palette, typography, mood, and interface style.",
      },
      {
        number: "02",
        title: "Clear creation flow",
        description:
          "The path from template selection to publication was structured as a sequential and calm user process.",
      },
      {
        number: "03",
        title: "Ready template styles",
        description:
          "Users could choose invitation mood without manual design setup or an overloaded editor.",
      },
      {
        number: "04",
        title: "Account area and guest responses",
        description:
          "After publication, users could manage invitations, return to drafts, and view guest responses.",
      },
    ],
  },
  lightbox: {
    closeAria: "Close image",
  },
};

export const eventessPageContent: Record<Locale, typeof ru> = {
  ru,
  en,
};
