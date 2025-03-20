export const personalData = {
  name: "Carolin Andersson",
  role: "Webbutvecklare e-handel",
  education: [
    "Webbutvecklare inom e-handel - YH-utbildning, Medieinstitutet (2024–nuvarande)",
    "Frontendutvecklare - YH-utbildning, EC Utbildning (2022–2024)",
  ],
  contactLinks: [
    "mailto:carolinmimmie@gmail.com",
    "https://www.linkedin.com/in/carolin-andersson-b8b34b249/",
  ],
};

export const aboutMe = {
  title: "SÖKER LIA HÖSTEN 2025",
  body: [
    "Jag är utbildad frontendutvecklare och vidareutbildar mig till fullstack med inriktning e-handel. Med lång erfarenhet från restaurangbranschen har jag utvecklat hög arbetsmoral, en stark förmåga att skapa goda kundrelationer och ett naturligt sätt att arbeta i team. Jag trivs med att ta ansvar och arbeta mot gemensamma mål. Nu söker jag en praktikplats inför hösten 2025 där jag vill lära mig så mycket som möjligt och bidra till ert team med målet att få en framtida anställning.",
  ],
};

export const skills = {
  tekniker: [
    // Språk
    { icon: "🌐", text: "HTML5" },
    { icon: "🎨", text: "CSS" },
    { icon: "ʦ", text: "TypeScript" },
    { icon: "📜", text: "JavaScript" },
    { icon: "🐘", text: "PHP" },

    // Ramverk/Bibliotek
    { icon: "🔺", text: "Angular" },
    { icon: "🚀", text: "Next.js" },
    { icon: "⚛️", text: "React" },
    { icon: "📚", text: "Storybook" },
    { icon: "🎨", text: "Material UI" },
    { icon: "🎨", text: "SASS" },
    { icon: "🛠️", text: "Tailwind CSS" },

    // Backend & API-utveckling
    { icon: "🌿", text: "Node.js" },
    { icon: "🔗", text: "API-utveckling" },
    { icon: "🔄", text: "Integrationer med andra system" },
    { icon: "💳", text: "Betalsystem" },
    { icon: "🖥️", text: "Realtidssystem (WebSockets)" },

    // Databaser
    { icon: "💾", text: "MySQL" },
    { icon: "🍃", text: "MongoDB" },
    { icon: "🗂️", text: "SQL" },
    { icon: "🛒", text: "Bygga databasdrivna e-handelsplattformar" },

    // CMS & E-handel
    { icon: "📄", text: "WordPress Headless" },
    { icon: "🛍️", text: "WooCommerce" },
    { icon: "🌐", text: "Sökmotoroptimering (SEO)" },
    { icon: "🛒", text: "Utveckling mot e-handelsplattformar" },

    // Arkitektur & Designmönster
    { icon: "🏗️", text: "Arkitektur & designmönster" },
    { icon: "🛡️", text: "Säkerhet för utvecklare" },

    // Verktyg & Arbetsmetodik
    { icon: "🐙", text: "Källkodshantering (Git)" },
    { icon: "⚡", text: "Testning" },
    { icon: "🔄", text: "Agila metoder & projektmetodik" },
  ],
  styrkor: [
    { icon: "👂🏼", text: "Lyhörd" },
    { icon: "💬", text: "Social och kommunikativ" },
    { icon: "👥", text: "Samarbetsvillig" },
    { icon: "🤝", text: "Ansvarsfull i team" },
    { icon: "💡", text: "Kreativ problemlösare" },
    { icon: "💪", text: "Hög arbetsmoral" },
    { icon: "📈", text: "Resultatinriktad" },
    { icon: "🕒", text: "God tidsplanering" },
  ],
};

export const educationData = {
  title: "Utbildning",
  experiences: [
    {
      role: "Webbutvecklare inom e-handel, YH-utbildning, Medieinstitutet, Stockholm (2024–nuvarande)",
      description:
        "Utbildning i front- och backendutveckling med fokus på e-handelssystem, API-utveckling och tredjepartsintegration.",
      current: true,
    },
    {
      role: "Frontendutvecklare, YH-utbildning, EC Utbildning, Växjö (2022–2024)",
      description:
        "Utbildning inom frontendutveckling som omfattar både tekniska färdigheter och designprinciper, med fokus på att skapa dynamiska och användarvänliga lösningar.",
      current: false,
    },
  ],
};

export const professionalData = {
  title: "ARBETSLIV",
  experiences: [
    {
      role: "Frontendutvecklare, Afonso, Stockholm (2022–2023)",
      description:
        "Under min praktik utvecklade jag moderna webbapplikationer med Next.js och TypeScript, implementerade CMS-lösningar med WordPress Headless och designade responsiva gränssnitt med Sass och Tailwind.",
      current: false,
    },
    {
      role: "Frukost/Konferens, Hotel Rival, Stockholm (2016–2022)",
      description:
        "Ansvarade för frukost- och konferensgäster, säkerställde hög servicekvalitet, ledde och fördelade arbetsuppgifter inom teamet samt främjade samarbetet med andra avdelningar på hotellet.",
      current: false,
    },
    {
      role: "Kock/Servitris/Personansvarig, Restaurang Klaver, Stockholm (2011–2016)",
      description:
        "Arbetade i ett sammansvetsat team för att driva restaurangen under både dag- och kvällspass, samt ansvarade för personal och service.",
      current: false,
    },
  ],
};

export const projectData = {
  title: "NÅGRA AV MINA PROJEKT",
  projects: [
    {
      title: "Poster Webshop",
      body1:
        "Mitt senaste projekt är en webbshop för posters med modern design och användarvänlig funktionalitet.",
      body2: "Använda teknologier: TypeScript, HTML och SASS.",
      image: "/images/liora-webshop.png",
      current: true,
      links: [
        {
          text: "Github",
          url: "https://github.com/carolinmimmie/LioraWebshop",
        },
        {
          text: "Testa appen",
          url: "https://liora-webshop.vercel.app/",
        },
      ],
    },
    {
      title: "Audiobooks",
      body1:
        "En bokshop där användare kan bläddra, filtrera och söka bland ljudböcker.",
      body2: "Använda teknologier: Next.js och Firebase och TailWind",
      image: "/images/audiobooks.png",
      current: false,
      links: [
        {
          text: "Github",
          url: "https://github.com/carolinmimmie/LioraWebshop",
        },
        {
          text: "Testa appen",
          url: "https://audio-books-liart.vercel.app/",
        },
      ],
    },
    {
      title: "Cleantidy",
      body1:
        "En webbapplikation som låter användare boka städtjänster snabbt och enkelt.",
      body2: "Använda teknologier: React, Material UI och Firebase.",
      image: "/images/cleantidy.png",
      current: false,
      links: [
        {
          text: "Github",
          url: "https://github.com/carolinmimmie/CleanTidy-react",
        },
        {
          text: "Testa appen",
          url: "https://cleantidy.vercel.app/",
        },
      ],
    },
    {
      title: "Cool Fashion",
      body1:
        "En användarvänlig app där du kan shoppa och hantera administratörsfunktioner. Som kund kan du söka, bläddra igenom produkter, lägga dem i varukorgen.",
      body2: "Använda teknologier: React, Material UI, Bootstrap och Firebase.",
      image: "/images/coolfashion.png",
      current: false,
      links: [
        {
          text: "Github",
          url: "https://github.com/carolinmimmie/CoolFashion",
        },
        {
          text: "Testa appen",
          url: "https://cool-fashion.vercel.app/",
        },
      ],
    },
    {
      title: "FindWeather",
      body1:
        "En webbapplikation där användare kan söka efter väderprognos för sin stad och se en veckovis väderprognos.",
      body2: "Använda teknologier: Next.js, Tailwind CSS och Open API.",
      image: "/images/findweather.png",
      current: false,
      links: [
        {
          text: "Github",
          url: "https://github.com/carolinmimmie/FindWeather",
        },
        {
          text: "Testa appen",
          url: "https://find-weather-one.vercel.app/",
        },
      ],
    },
    {
      title: "Todo",
      body1:
        "En enkel webbapplikation för att skapa och hantera att-göra-listor.",
      body2: "Använda teknologier: React och CSS.",
      image: "/images/todo.png",
      current: false,
      links: [
        {
          text: "Github",
          url: "https://github.com/carolinmimmie/TodoReact",
        },
        {
          text: "Testa appen",
          url: "  https://todo-react-xi-teal.vercel.app/",
        },
      ],
    },
  ],
};
