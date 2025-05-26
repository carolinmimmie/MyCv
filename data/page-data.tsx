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
  title: "Söker extrajobb som utvecklare",
  body: [
    "Jag är utbildad frontendutvecklare och vidareutbildar mig just nu till fullstackutvecklare med inriktning på e-handel. Med lång erfarenhet från restaurangbranschen har jag utvecklat en stark arbetsmoral, en god förmåga att bygga kundrelationer och en naturlig känsla för samarbete i team.",
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

    // Backend & API
    { icon: "🌿", text: "Node.js" },
    { icon: "🔗", text: "API" },
    { icon: "🔄", text: "Integrationer" },
    { icon: "💳", text: "Betalsystem" },
    { icon: "🖥️", text: "WebSockets" },

    // Databaser
    { icon: "💾", text: "MySQL" },
    { icon: "🍃", text: "MongoDB" },
    { icon: "🗂️", text: "SQL" },
    { icon: "🛒", text: "E-handel DB" },

    // CMS & E-handel
    { icon: "📄", text: "Headless WP" },
    { icon: "🛍️", text: "WooCommerce" },
    { icon: "🌐", text: "SEO" },
    { icon: "🛒", text: "E-handelsutv." },

    // Arkitektur & Designmönster
    { icon: "🏗️", text: "Arkitektur" },
    { icon: "🛡️", text: "Säkerhet" },

    // Verktyg & Arbetsmetodik
    { icon: "🐙", text: "Git" },
    { icon: "⚡", text: "Testning" },
    { icon: "🔄", text: "Agila metoder" },
  ],
  styrkor: [
    { icon: "👂🏼", text: "Lyhörd" },
    { icon: "💬", text: "Social och kommunikativ" },
    { icon: "👥", text: "Samarbetsvillig" },
    { icon: "🤝", text: "Ansvarsfull i team" },
    { icon: "💡", text: "Kreativ problemlösare" },
    { icon: "💪", text: "Hög arbetsmoral" },
    { icon: "📈", text: "Resultatinriktad" },
    { icon: " 🌟", text: "Positiv energi" },
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
      title: "PosterShop",
      body1:
        "En webbshop för posters med modern design och fokus på användarvänlighet.",
      body2: "Använda teknologier: React, TypeScript, SASS, Context API",
      image: "/images/liora-webshop.png",
      current: false,
      links: [
        {
          text: "Github",
          url: "https://github.com/carolinmimmie/PosterShop",
        },
        {
          text: "Testa appen",
          url: "https://dapper-caramel-329e66.netlify.app/",
        },
      ],
    },
    {
      title: "Sliding Puzzle",
      body1:
        "Detta projekt är ett klassiskt sliding puzzle där brickorna måste ordnas i rätt ordning genom att flytta dem till det tomma utrymmet. När spelet är vunnet visas en popup med animation.",
      body2: "Använda teknologier: React, TypeScript, SASS och Framer Motion.",
      image: "/images/slidingpuzzle.png",
      current: true,
      links: [
        {
          text: "Github",
          url: "https://github.com/carolinmimmie/n-puzzle",
        },
        {
          text: "Testa appen",
          url: "https://n-puzzle-three.vercel.app/",
        },
      ],
    },
    {
      title: "Tic Tac Toe",
      body1:
        "Ett klassiskt Tic Tac Toe-spel med en rosa twist! Spelarna turas om att sätta sina symboler i ett rutnät tills någon vinner eller det blir oavgjort. Spelet har enkel funktionalitet och lekfull design.",
      body2: "Använda teknologier: React, TypeScript och SASS.",
      image: "/images/tictactoe.png",
      current: true,
      links: [
        {
          text: "Github",
          url: "https://github.com/carolinmimmie/tic-tac-toe",
        },
        {
          text: "Testa spelet",
          url: "https://tic-tac-toe-five-black-30.vercel.app/",
        },
      ],
    },
    {
      title: "The Zoo",
      body1:
        "En djurhemsida där djur hämtas från ett API och användaren kan mata dem via en knapp. Djuren blir hungriga igen efter några timmar.",
      body2: "Använda teknologier: React, TypeScript och SASS.",
      image: "/images/thezoo.png",
      current: true,
      links: [
        {
          text: "Github",
          url: "https://github.com/carolinmimmie/the-zoo-carolinmimmie-main",
        },
        {
          text: "Testa appen",
          url: "https://thezoo-pi.vercel.app/",
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
