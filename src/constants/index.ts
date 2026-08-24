export const links = {
  email: "ewomaozore@gmail.com",
  github: "https://github.com/EwomaOzore",
  linkedin: "https://www.linkedin.com/in/ewomaozore",
  cv: "/documents/Ewomaoghene%20Ozore's%20Resume.pdf",
  site: "https://ewomaozore.vercel.app",
};

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
    name: "MTN Partner Portal",
    role: "Senior Software Developer",
    description: "A partner platform reaching millions in Nigeria.",
    detail:
      "Production web app for licensed aggregators and VAS partners — onboarding, service integration, payments, and analytics on top of MTN's nationwide customer base.",
    icon: "/assets/mtnnigeria.jpeg",
    screen: "/assets/mtnscreen.png",
    tags: ["React", "TypeScript", "REST APIs"],
    accent: "#FFCC00",
    metric: "1M+ customers",
    index: "01",
    kind: "web",
    href: "https://partner.mtn.ng/",
  },
  {
    name: "Justrite",
    role: "Lead Mobile Developer",
    description: "E-commerce at retail scale, on iOS and Android.",
    detail:
      "Led the modernisation of a production shopping app handling 10,000+ daily user operations. Rebuilt authentication flows, optimised API data retrieval, and cut production errors by 60% with Jest test coverage.",
    icon: "/assets/justrite.jpeg",
    screen: "/assets/justritescreen.jpeg",
    tags: ["React Native", "Expo", "Jest"],
    accent: "#7B2CBF",
    metric: "10K+ daily users",
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
    name: "Kuja ERP",
    role: "Senior Frontend Engineer",
    description: "Enterprise logistics for AB InBev staff and distributors.",
    detail:
      "Web ERP for AB InBev Africa — internal staff and distributor access, authentication, and operational workflows across the distribution map. Built as a production React application with a clear split between employee and partner entry points.",
    icon: "/assets/abinbev.jpeg",
    screen: "/assets/kujascreen.png",
    tags: ["React", "TypeScript", "Next.js"],
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
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "MTN Nigeria",
    role: "Senior Software Developer",
    period: "Feb 2025 — Jul 2026",
    icon: "/assets/mtnnigeria.jpeg",
    points: [
      "Built and maintained production React and React Native applications supporting 1M+ customers across web and mobile.",
      "Integrated REST APIs, authentication workflows, and analytics across critical customer journeys.",
      "Improved performance through lazy loading, rendering optimisation, and efficient state management.",
    ],
  },
  {
    company: "Justrite",
    role: "Lead Mobile Developer",
    period: "May 2025 — Jun 2026",
    icon: "/assets/justrite.jpeg",
    points: [
      "Spearheaded modernisation of a production e-commerce app supporting 10,000+ daily user operations.",
      "Implemented unit and integration testing with Jest, contributing to a 60% reduction in production errors.",
      "Strengthened authentication flows and resolved production performance bottlenecks.",
    ],
  },
  {
    company: "AB InBev",
    role: "Senior Frontend Engineer",
    period: "Jan 2024 — Dec 2025",
    icon: "/assets/abinbev.jpeg",
    points: [
      "Developed scalable customer-facing dashboards with React, Next.js, and TypeScript.",
      "Improved performance with SSR, code splitting, caching strategies, and rendering optimisation.",
      "Contributed to architecture discussions, code reviews, and release planning.",
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
