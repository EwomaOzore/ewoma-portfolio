export const links = {
  email: "ewomaozore@gmail.com",
  github: "https://github.com/EwomaOzore",
  linkedin: "https://www.linkedin.com/in/ewomaozore",
  cv: "/documents/Ewomaoghene%20Ozore's%20Resume.pdf",
  site: "https://ewomaozore.vercel.app",
  whatsapp: "https://wa.me/2348134970348",
  telegram: "https://t.me/+2348134970348",
};

export const availability = [
  "Remote from anywhere",
  "Open to relocate",
  "I overlap your working hours from anywhere",
];

export const stats = [
  { value: 5, suffix: "+", label: "years shipping product" },
  { value: 1, suffix: "M+", label: "customers served" },
  { value: 10, suffix: "K+", label: "daily user operations" },
  { value: 60, suffix: "%", label: "fewer production errors" },
];

export const marqueeItems = [
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Expo",
  "TanStack Query",
  "Redux Toolkit",
  "Jest",
  "SSR",
  "iOS",
  "Android",
  "Accessibility",
];

export type Work = {
  name: string;
  slug: string;
  role: string;
  description: string;
  detail: string;
  icon: string;
  screen?: string;
  tags: string[];
  accent: string;
  metric: string;
  index: string;
  kind: "web" | "mobile";
  href?: string;
  stores?: { label: "App Store" | "Google Play"; href: string }[];
};

export const featuredWork: Work[] = [
  {
    name: "MTN Digital Partner Portal",
    slug: "mtn-partner-portal",
    role: "Lead Frontend Engineer",
    description: "The operational surface for becoming an MTN digital partner.",
    detail:
      "Production Next.js portal for licensed aggregators, NCC-approved VAS partners, and the people who run them — onboarding, compliance, contracts, and service integration with MTN, live at partner.mtn.ng.",
    icon: "/assets/mtnnigeria.jpeg",
    screen: "/assets/mtnscreen.png",
    tags: ["Next.js", "TypeScript", "TanStack Query", "Zod"],
    accent: "#FFCC00",
    metric: "1M+ customers",
    index: "01",
    kind: "web",
    href: "https://partner.mtn.ng/",
  },
  {
    name: "Justrite",
    slug: "justrite",
    role: "Mobile Engineer",
    description: "Grocery ecommerce that matches the physical shop.",
    detail:
      "React Native client for Justrite Superstore — store-aware inventory, multi-gateway checkout, and bank BNPL, plus the upgrade to React Native 0.77 and CodePush OTA. Live on iOS, Android, and justriteonline.com.",
    icon: "/assets/justrite.jpeg",
    screen: "/assets/justritescreen.jpeg",
    tags: ["React Native", "TypeScript", "Redux Toolkit"],
    accent: "#7B2CBF",
    metric: "4.6 on Play",
    index: "02",
    kind: "mobile",
    stores: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/justrite-app/id1639832988",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.justrite",
      },
    ],
  },
  {
    name: "Zona",
    slug: "zona",
    role: "Mobile Engineer",
    description: "Miami and NYC nightlife, booked from your pocket.",
    detail:
      "Cross-platform nightlife and entertainment app for discovering venues, joining guest lists, and booking bottle service — shipped to both stores with a native-feeling, animation-rich interface.",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/84/6c/dc/846cdc17-4557-bdcd-03c7-0520d192a92c/Placeholder.mill/400x400bb-75.webp",
    screen: "/assets/zonascreen.webp",
    tags: ["React Native", "TypeScript", "REST APIs"],
    accent: "#E11D8F",
    metric: "iOS + Android",
    index: "03",
    kind: "mobile",
    stores: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/zona-unlock-miami-nightlife/id6479909742",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.myzona",
      },
    ],
  },
  {
    name: "KUJA Web",
    slug: "kuja-erp",
    role: "Frontend Engineer",
    description: "The web control plane for AB InBev Africa’s route-to-market.",
    detail:
      "Distributor ERP for admins and backoffice — network, inventory, walk-in sales, claims, finance, and loyalty — in a bilingual Next.js app with a permissioned, country-aware shell.",
    icon: "/assets/abinbev.jpeg",
    screen: "/assets/kujascreen.png",
    tags: ["Next.js", "TypeScript", "React Query", "Mantine"],
    accent: "#F5C400",
    metric: "AB InBev",
    index: "04",
    kind: "web",
    href: "https://afr-map-kuja-san-dev-appsrvc.azurewebsites.net/auth",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  icon?: string;
  href?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "MTN Nigeria",
    role: "Lead Frontend Engineer",
    period: "Feb 2025 — Sep 2026",
    icon: "/assets/mtnnigeria.jpeg",
    href: "/work/mtn-partner-portal",
    points: [
      "Built the Digital Partner Portal frontend in Next.js 15, TypeScript, TanStack Query, React Hook Form and Zod.",
      "Owned partner and aggregator onboarding, service-documentation and service-integration v2, role-gated navigation, and dashboard task widgets.",
      "Shipped through GitHub PRs into production across on-prem, Azure, and OpenShift.",
    ],
  },
  {
    company: "Justrite",
    role: "Mobile Engineer",
    period: "Jun 2025 — Sep 2026",
    icon: "/assets/justrite.jpeg",
    href: "/work/justrite",
    points: [
      "Own the React Native client for Justrite Superstore — store-aware catalog, multi-gateway checkout, and bank BNPL on iOS and Android.",
      "Shipped checkout, Stanbic / Wema / CashConnect BNPL, catalog performance, and a design refresh of Home, Wallet, Cart, Loyalty, and You.",
      "Took the native stack to React Native 0.77 (Hermes, Play 16 KB pages) and CodePush OTA without freezing weekly releases.",
    ],
  },
  {
    company: "AB InBev",
    role: "Frontend Engineer",
    period: "Jan 2024 — Aug 2026",
    icon: "/assets/abinbev.jpeg",
    href: "/work/kuja-erp",
    points: [
      "Frontend on KUJA Web, AB InBev Africa’s distributor ERP — Next.js 14, TypeScript, a custom KJ design system, React Query, and Redux.",
      "Owned vertical slices: Super Admin, user roles, catalog and empties, Awoof loyalty, claims, finance, and seller migration.",
      "The hard parts were permissioned multi-persona UX, bilingual markets (English and Portuguese), and making tables and observability trustworthy in production.",
    ],
  },
  {
    company: "SmallClosedWorld",
    role: "Lead Frontend Developer — Web & Mobile",
    period: "Sep 2024 — Apr 2025",
    icon: "/assets/smallclosedworld.jpeg",
    points: [
      "Led development of scalable React Native applications across multiple client and product requirements.",
      "Contributed to iOS and Android releases and supported technical decision-making across concurrent projects.",
    ],
  },
  {
    company: "Satori Mental Health",
    role: "Frontend Developer",
    period: "Jul 2023 — Feb 2024",
    icon: "/assets/satori.jpeg",
    points: [
      "Built responsive, accessible React applications from Figma designs with Redux and React Hooks.",
      "Improved rendering efficiency by identifying and eliminating unnecessary component re-renders.",
    ],
  },
  {
    company: "Techbeaver",
    role: "React Native Developer",
    period: "Jan 2022 — Oct 2023",
    icon: "/assets/techbeaver.jpeg",
    points: [
      "Developed and maintained production React Native applications across multiple client projects, from development through release.",
      "Diagnosed application issues and implemented fixes to improve stability, reliability, and user experience.",
    ],
  },
  {
    company: "SubShare Inc.",
    role: "Frontend Developer — Web & Mobile Intern",
    period: "Aug 2021 — Jul 2022",
    icon: "/assets/subshare.jpeg",
    points: [
      "Developed interactive React and React Native applications based on product and client requirements.",
      "Built reusable frontend components and responsive interfaces across desktop, tablet, and mobile.",
    ],
  },
  {
    company: "Integrated Orange",
    role: "Frontend Developer Intern",
    period: "May 2020 — Sep 2021",
    icon: "/assets/integratedorange.jpeg",
    points: [
      "Developed responsive, interactive web apps using HTML, CSS, JavaScript, and modern tooling.",
      "Migrated legacy jQuery interfaces to React architecture, improving maintainability and development velocity.",
    ],
  },
];

export type PersonalProject = {
  name: string;
  slug?: string;
  year: string;
  kind: "web" | "mobile";
  description: string;
  detail: string;
  tags: string[];
  accent: string;
  metric: string;
  href?: string;
  github?: string;
  screen?: string;
  screenWidth?: number;
  screenHeight?: number;
};

export const personalProjects: PersonalProject[] = [
  {
    name: "QuantumSpecs",
    slug: "quantumspecs",
    year: "2026",
    kind: "web",
    description:
      "An ops console that watches checkout health across five regions, then lets an AI analyst query the same data and propose actions you confirm before anything mutates production.",
    detail:
      "Operations intelligence for Kora, a fictional pan-African payments company. It tracks revenue, failure rate, latency, merchants, incidents, and deploys — then an analyst calls tools against live Postgres instead of inventing metrics. Opening an incident, paging a team, rolling back checkout-api, or disabling Paystack Nigeria still requires a human click.",
    tags: ["Next.js", "Vercel AI SDK", "Prisma", "TanStack Query"],
    accent: "#2DD4BF",
    metric: "Live console",
    href: "https://quantumspecs.vercel.app/",
    screen: "/assets/quantumspecs.png",
    screenWidth: 3588,
    screenHeight: 2084,
  },
  {
    name: "GameBuddy",
    year: "2023 — 2026",
    kind: "web",
    description: "Official consoles, priced in Naira, sold like you have a match tonight.",
    detail:
      "A Lagos storefront for PlayStation, Xbox, Nintendo, PC, and Steam Deck — catalogue, deals, cart, and loyalty. Next-day delivery copy, platform pages, and a commerce UI I still iterate on.",
    tags: ["Next.js", "TypeScript", "Zustand", "Tailwind"],
    accent: "#D1FF52",
    metric: "Live store",
    href: "https://gamebuddy.vercel.app",
    github: "https://github.com/EwomaOzore/gamebuddy",
    screen: "/assets/gamebuddy.png",
    screenWidth: 3578,
    screenHeight: 1814,
  },
  {
    name: "Interswitch",
    year: "2025",
    kind: "web",
    description: "A Nigerian banking dashboard you can actually read.",
    detail:
      "Next.js account overview — savings, current, and loan balances in Naira, send-money, and a recent-activity feed. Typed forms, TanStack Query, and Jest plus Playwright coverage.",
    tags: ["Next.js", "TypeScript", "TanStack Query", "Playwright"],
    accent: "#0EA5E9",
    metric: "Live dashboard",
    href: "https://interswitch-dashboard.vercel.app/dashboard",
    github: "https://github.com/EwomaOzore/interswitch-dashboard",
    screen: "/assets/interswitch.png",
    screenWidth: 3600,
    screenHeight: 2080,
  },
  {
    name: "Flux",
    year: "2026",
    kind: "mobile",
    description: "A budget app I actually open on payday.",
    detail:
      "React Native money app: spending timeline, payday planning, receipt capture, Face ID, and local backups. Built for how I spend — not a spreadsheet wearing an app icon.",
    tags: ["React Native", "Expo", "Zustand", "EAS"],
    accent: "#2D6A4F",
    metric: "Personal finance",
    github: "https://github.com/EwomaOzore/Flux",
    screen: "/assets/flux.png",
    screenWidth: 1206,
    screenHeight: 2622,
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "Web",
    skills: ["React", "Next.js", "Tailwind CSS", "Sass/SCSS", "Node.js", "Express"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo", "iOS", "Android", "App Store", "Google Play"],
  },
  {
    title: "State & Data",
    skills: ["Redux Toolkit", "TanStack Query", "Recoil", "Context API", "REST APIs"],
  },
  {
    title: "Quality",
    skills: ["Jest", "React Testing Library", "Accessibility (WCAG)", "Code Reviews"],
  },
  {
    title: "Performance",
    skills: ["SSR", "Code Splitting", "Lazy Loading", "Rendering Optimisation"],
  },
];
