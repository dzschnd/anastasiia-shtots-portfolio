import type { Locale } from "../../index";

const ru = {
  pageTitle: "Doctor Helper — Анастасия Штоц",
  backToPortfolio: "Назад к портфолио",
  heroTitle: "Doctor Helper — AI-сервис для расшифровки антибиотикограмм",
  heroParagraphs: [
    "Doctor Helper — healthcare AI-продукт для медицинских специалистов, который помогает интерпретировать антибиотикограммы и быстрее ориентироваться в данных для подбора антибактериальной терапии.",
    "Я работала над интерфейсом AI-расшифровщика, историей запросов, экраном результата, лендингом и визуальным образом продукта с маскотом. Проект получил грант в 2024 году на сумму около 1 млн ₽.",
  ],
  meta: ["#AI", "#Healthcare", "#Web app", "#Grant"],
  projectMeta: [
    { label: "Роль", value: "UX/UI Designer" },
    { label: "Фокус", value: ["AI Tool", "Medical UX", "Landing", "Mascot"] },
    { label: "Платформа", value: "Web app" },
    { label: "Достижение", value: ["Грант 2024", "≈ 1 млн ₽"] },
  ],
  heroImageAlt: "Doctor Helper hero image",
  about: {
    title: "О проекте",
    paragraphs: [
      "Doctor Helper — healthcare AI-сервис для медицинских специалистов, который помогает работать с результатами антибиотикограмм. Пользователь может ввести данные вручную или загрузить фото, добавить дополнительный контекст, получить интерпретацию и сохранить результат в истории.",
      "Продукт был задуман как рабочий инструмент для медицинских данных: быстрый, понятный и аккуратно оформленный, чтобы специалист мог быстрее перейти от исходной антибиотикограммы к структурированной интерпретации.",
    ],
  },
  role: {
    title: "Моя роль",
    paragraphs: [
      "Я работала над интерфейсом продукта и лендингом: проектировала основной экран AI-расшифровщика, историю запросов, модальное окно с результатом интерпретации, состояния интерфейса и визуальную подачу продукта.",
      "Также я участвовала в создании более дружелюбного образа сервиса через маскота, чтобы сложная medical AI-тема воспринималась понятнее, но при этом сохраняла профессиональный характер.",
    ],
  },
  contextAndTask: {
    title: "Контекст и задача",
    paragraphs: [
      "Doctor Helper создавался для медицинских специалистов, которым нужно быстро и аккуратно работать с результатами антибиотикограмм. Такие данные могут быть сложными для интерпретации: важно учитывать чувствительность микроорганизмов к антибиотикам, клинический контекст и необходимость быстро получить понятный вывод.",
      "Интерфейс должен был не перегружать пользователя, а помогать пройти сценарий спокойно и последовательно: ввести данные или загрузить фото, добавить дополнительную информацию, получить интерпретацию и сохранить результат в истории.",
      "Главная задача — сделать сложный healthcare AI-инструмент понятным, рабочим и визуально аккуратным, чтобы медицинский специалист мог быстрее перейти от исходных данных к структурированному результату.",
    ],
    keyTaskLabel: "Ключевая задача",
    keyTaskTitle:
      "Создать понятный AI-интерфейс для расшифровки антибиотикограмм, который помогает медицинскому специалисту быстро получить структурированную интерпретацию результата.",
    taskFocus: [
      "простой ввод данных",
      "загрузка фото антибиотикограммы",
      "дополнительный медицинский контекст",
      "понятная интерпретация результата",
      "история прошлых расшифровок",
      "возможность скачать результат",
    ],
  },
  userFlow: {
    title: "Пользовательский сценарий",
    paragraphs: [
      "Основной сценарий Doctor Helper строится вокруг быстрой работы с антибиотикограммой. Медицинский специалист может ввести данные вручную или загрузить фото, добавить дополнительный контекст, запустить расшифровку и получить структурированную интерпретацию результата.",
      "После анализа результат сохраняется в истории, чтобы пользователь мог вернуться к прошлым расшифровкам, скачать их или удалить при необходимости.",
    ],
    steps: [
      "Ввод данных",
      "Дополнительный контекст",
      "Расшифровка",
      "Интерпретация",
      "История",
      "Скачивание результата",
    ],
    note:
      "Сценарий помогает сохранить рабочий ритм: данные вводятся в одном месте, результат открывается рядом с исходной информацией, а прошлые расшифровки остаются доступными в истории.",
  },
  solutionOne: {
    eyebrow: "Ключевое решение 01",
    title: "AI-расшифровщик как рабочий инструмент",
    paragraphs: [
      "Главный экран Doctor Helper был построен вокруг одного основного действия — расшифровать антибиотикограмму. Пользователь может ввести данные вручную или загрузить фото, добавить дополнительный медицинский контекст и запустить анализ.",
      "Чтобы интерфейс не ощущался как разовая форма, справа была добавлена история запросов. Она помогает быстро вернуться к прошлым результатам, найти нужную расшифровку по диагнозу или дате, скачать результат или удалить запись.",
    ],
    imageAlt: "Doctor Helper interface screenshot: ИИ-Расшифровщик антибиотикограммы",
    note:
      "Основной экран объединяет ввод данных, запуск AI-расшифровки и историю прошлых результатов.",
  },
  solutionTwo: {
    eyebrow: "Ключевое решение 02",
    title: "Результат интерпретации: исходные данные и вывод в одном окне",
    paragraphs: [
      "Результат расшифровки открывается в отдельном модальном окне. Слева сохраняются введённые данные антибиотикограммы и дополнительный контекст, справа отображается структурированная интерпретация.",
      "Такой формат помогает медицинскому специалисту быстро сопоставить исходную информацию и итоговый вывод, не переходя на отдельную страницу и не теряя контекст анализа.",
      "В интерфейсе также предусмотрены действия с результатом: скачать, скопировать, удалить или закрыть окно.",
    ],
    imageAlt: "Doctor Helper result modal screenshot: Интерпретация",
    note:
      "Модальное окно помогает сравнить введённые данные и результат интерпретации без перехода на отдельную страницу.",
  },
  solutionThree: {
    eyebrow: "Ключевое решение 03",
    title: "Лендинг: объяснить ценность и вызвать доверие",
    paragraphs: [
      "Для healthcare AI-продукта важно не только показать функцию, но и быстро объяснить, кому сервис помогает и зачем он нужен. Лендинг Doctor Helper был построен вокруг простой идеи: сделать работу с антибиотикограммой быстрее, понятнее и увереннее для медицинского специалиста.",
      "На первом экране акцент сделан на задаче продукта, понятном CTA и визуальной поддержке через маскота. Также на лендинге была показана грантовая поддержка проекта, чтобы усилить доверие к сервису.",
    ],
    imageAlt: {
      hero: "Doctor Helper landing hero screenshot",
      steps: "Doctor Helper landing steps screenshot",
    },
    note:
      "Лендинг объясняет ценность Doctor Helper, показывает основной сценарий продукта и подчёркивает грантовую поддержку проекта.",
  },
  result: {
    title: "Результат",
    paragraphs: [
      "В результате был создан healthcare AI-продукт с понятным пользовательским сценарием: ввод данных, загрузка фото, расшифровка антибиотикограммы, просмотр интерпретации, история запросов и скачивание результата.",
      "Doctor Helper получил грантовую поддержку в 2024 году на сумму около 1 млн ₽. Проект показал, как можно оформить сложную медицинскую AI-функцию в понятный web-интерфейс для специалистов.",
    ],
    cards: [
      {
        number: "01",
        title: "AI-инструмент для мед-специалистов",
        description:
          "Интерфейс помогает пройти путь от антибиотикограммы до структурированной интерпретации результата.",
      },
      {
        number: "02",
        title: "История и повторный доступ",
        description:
          "Пользователь может возвращаться к прошлым расшифровкам, искать их, скачивать или удалять.",
      },
      {
        number: "03",
        title: "Понятный результат интерпретации",
        description:
          "Исходные данные и AI-вывод показаны рядом, чтобы результат было проще проверить и использовать.",
      },
      {
        number: "04",
        title: "Грантовый проект",
        description:
          "Doctor Helper получил поддержку в 2024 году как перспективный healthcare AI-продукт.",
      },
    ],
  },
};

const en = {
  pageTitle: "Doctor Helper — Anastasiia Shtots",
  backToPortfolio: "Back to portfolio",
  heroTitle: "Doctor Helper — AI service for antibiogram interpretation",
  heroParagraphs: [
    "Doctor Helper is a healthcare AI product for medical specialists that helps interpret antibiograms and navigate treatment-related data faster.",
    "I worked on the AI interpretation interface, request history, result screen, landing page, and product visual image with a mascot. The project received a grant in 2024 worth about 1 million rubles.",
  ],
  meta: ["#AI", "#Healthcare", "#Web app", "#Grant"],
  projectMeta: [
    { label: "Role", value: "UX/UI Designer" },
    { label: "Focus", value: ["AI Tool", "Medical UX", "Landing", "Mascot"] },
    { label: "Platform", value: "Web app" },
    { label: "Achievement", value: ["2024 Grant", "≈ 1M RUB"] },
  ],
  heroImageAlt: "Doctor Helper hero image",
  about: {
    title: "About the project",
    paragraphs: [
      "Doctor Helper is a healthcare AI service for medical specialists that helps work with antibiogram results. Users can enter data manually or upload a photo, add additional context, get interpretation, and save results in history.",
      "The product was designed as a practical tool for medical data: fast, clear, and carefully structured so specialists can move from raw antibiogram data to structured interpretation faster.",
    ],
  },
  role: {
    title: "My role",
    paragraphs: [
      "I worked on the product interface and landing page: designing the core AI interpretation screen, request history, interpretation result modal, interface states, and visual presentation.",
      "I also helped shape a friendlier product image through a mascot so the complex medical AI theme feels clearer while keeping a professional tone.",
    ],
  },
  contextAndTask: {
    title: "Context and challenge",
    paragraphs: [
      "Doctor Helper was created for medical specialists who need to work with antibiogram results quickly and accurately. Such data can be difficult to interpret: it is important to account for microorganism sensitivity to antibiotics, clinical context, and the need to get a clear conclusion fast.",
      "The interface needed to avoid overload and guide users through the flow in a calm sequence: enter data or upload a photo, add extra information, get interpretation, and save the result to history.",
      "The main task was to make a complex healthcare AI tool clear, practical, and visually clean so specialists can move from source data to structured results faster.",
    ],
    keyTaskLabel: "Key challenge",
    keyTaskTitle:
      "Create a clear AI interface for antibiogram interpretation that helps medical specialists quickly get structured results.",
    taskFocus: [
      "simple data input",
      "antibiogram photo upload",
      "additional medical context",
      "clear interpretation result",
      "history of previous interpretations",
      "ability to download results",
    ],
  },
  userFlow: {
    title: "User flow",
    paragraphs: [
      "The core Doctor Helper flow is built around fast work with antibiograms. A medical specialist can enter data manually or upload a photo, add additional context, run interpretation, and get a structured result.",
      "After analysis, the result is saved in history so users can return to previous interpretations, download them, or delete when needed.",
    ],
    steps: [
      "Data input",
      "Additional context",
      "Interpretation run",
      "Result interpretation",
      "History",
      "Download result",
    ],
    note:
      "This flow supports a stable work rhythm: data is entered in one place, the result opens next to source information, and previous interpretations remain available in history.",
  },
  solutionOne: {
    eyebrow: "Key solution 01",
    title: "AI interpreter as a working tool",
    paragraphs: [
      "The main Doctor Helper screen was built around one core action: interpret an antibiogram. Users can enter data manually or upload a photo, add extra medical context, and start analysis.",
      "To avoid a one-off form feeling, request history was added on the right. It helps users quickly return to past results, find interpretations by diagnosis or date, download results, or delete records.",
    ],
    imageAlt: "Doctor Helper interface screenshot: AI antibiogram interpretation",
    note:
      "The main screen combines data input, AI interpretation launch, and past-result history.",
  },
  solutionTwo: {
    eyebrow: "Key solution 02",
    title: "Interpretation result: source data and conclusion in one view",
    paragraphs: [
      "The interpretation result opens in a dedicated modal. Entered antibiogram data and additional context stay on the left, while structured interpretation is shown on the right.",
      "This format helps medical specialists quickly compare source information and final conclusions without switching pages or losing context.",
      "The interface also includes actions for the result: download, copy, delete, or close.",
    ],
    imageAlt: "Doctor Helper result modal screenshot: Interpretation",
    note:
      "The modal makes it easy to compare entered data and interpretation result without opening a separate page.",
  },
  solutionThree: {
    eyebrow: "Key solution 03",
    title: "Landing page: explain value and build trust",
    paragraphs: [
      "For a healthcare AI product, it is important not only to show functionality but also to quickly explain who the service helps and why it matters. The Doctor Helper landing page was built around a simple idea: make antibiogram work faster, clearer, and more confident for medical specialists.",
      "The first screen focuses on product purpose, clear CTA, and visual support through a mascot. The landing page also highlights grant support to strengthen trust in the service.",
    ],
    imageAlt: {
      hero: "Doctor Helper landing hero screenshot",
      steps: "Doctor Helper landing steps screenshot",
    },
    note:
      "The landing page explains Doctor Helper value, shows the core product flow, and highlights the project grant support.",
  },
  result: {
    title: "Result",
    paragraphs: [
      "The result was a healthcare AI product with a clear user flow: data input, photo upload, antibiogram interpretation, interpretation view, request history, and result download.",
      "Doctor Helper received grant support in 2024 worth about 1 million rubles. The project showed how a complex medical AI function can be packaged as a clear web interface for specialists.",
    ],
    cards: [
      {
        number: "01",
        title: "AI tool for medical specialists",
        description:
          "The interface guides users from antibiogram data to structured interpretation results.",
      },
      {
        number: "02",
        title: "History and repeat access",
        description:
          "Users can return to previous interpretations, search them, download, or delete records.",
      },
      {
        number: "03",
        title: "Clear interpretation output",
        description:
          "Source data and AI conclusions are shown side by side, making results easier to verify and use.",
      },
      {
        number: "04",
        title: "Grant-backed project",
        description:
          "Doctor Helper received support in 2024 as a promising healthcare AI product.",
      },
    ],
  },
};

export const doctorHelperPageContent: Record<Locale, typeof ru> = {
  ru,
  en,
};
