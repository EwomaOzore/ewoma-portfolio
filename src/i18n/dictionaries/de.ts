import type { Dictionary } from "./en";

export const de = {
  meta: {
    title: "Ewoma Ozore — Senior Frontend- und Mobile-Engineer",
    description:
      "Senior Frontend- und Mobile-Engineer. Fallstudien zu React-, React-Native- und Next.js-Systemen, die über 1 Million Menschen im Web, auf iOS und Android erreichen.",
    projectsTitle: "Eigene Projekte",
    projectsDescription:
      "Eigene Projekte von Ewoma Ozore — QuantumSpecs, Pollux, GameBuddy, Interswitch und Flux. Abends und am Wochenende gebaut.",
    caseStudy: "Fallstudie",
  },
  caseLedes: {
    quantumspecs:
      "Eine Ops-Konsole, die die Checkout-Gesundheit in fünf Regionen beobachtet und einen KI-Analysten dieselben Daten abfragen lässt. Aktionen muss jemand bestätigen, bevor sich Produktion ändert.",
    "mtn-partner-portal":
      "Das Partner-Frontend für das digitale Partner-Ökosystem von MTN Nigeria: Onboarding, Compliance, Verträge, Services starten und an MTN-Plattformen anbinden, ohne Papier und E-Mail.",
    justrite:
      "Ich verantworte den React-Native-Client für Justrite Superstore, nigerianisches Lebensmittel-Ecommerce: filialbezogener Bestand, Checkout über mehrere Gateways und Bank-BNPL, inklusive Upgrade auf React Native 0.77 und CodePush-OTA.",
    zona: "Nachtleben wartet nicht. Eine Location finden, auf die Gästeliste, Bottle Service buchen — vom Telefon, heute Nacht.",
    "kuja-erp":
      "Ein zweisprachiges, berechtigtes Händler-ERP für AB InBev Afrika: die gemeinsame Oberfläche für Netzwerk-Admins und das Distributor-Backoffice, keine Marketingseite mit ausgetauschtem Logo.",
  },
  caseDisclaimers: {
    quantumspecs:
      "Kora ist ein fiktiver Mandant. Slack, PagerDuty und Linear sind Zeilen einer Sandbox-Inbox, keine Produktions-Webhooks.",
  },
  nav: {
    work: "Arbeit",
    projects: "Projekte",
    experience: "Erfahrung",
    skills: "Fähigkeiten",
    contact: "Kontakt",
    resume: "Lebenslauf",
    home: "Start",
    open: "Menü öffnen",
    close: "Menü schließen",
    footer: "Fußzeile",
    social: "Sozial",
    languages: "Sprachen",
    download: "Lebenslauf herunterladen",
  },
  hero: {
    hello: "Hallo!",
    before: "Ich bin",
    name: "Ewoma Ozore",
    after: "6 Jahre Produkt ausgeliefert.",
    intro:
      "Ich baue Produkt-Interfaces für Web, iOS und Android und bleibe bis in die Produktion dabei.",
    studies: "Fallstudien lesen",
    contact: "Schreiben",
    scroll: "Zur Arbeit",
    where: "Wo ich arbeiten will",
  },
  work: {
    eyebrow: "01 — Ausgewählte Arbeit",
    title: "Wie ich denke, nicht nur was live ging.",
    body: "Fallstudien aus der Produktion. Abwägungen, Grenzen und was ich mit mehr Zeit tun würde.",
    personal: "Eigene Projekte",
    read: "Fallstudie lesen",
    visit: "Live-Seite öffnen",
    logo: "Logo",
    screenshot: "Screenshot von {name}",
    app: "App-Screenshot von {name}",
  },
  roles: {
    "mtn-partner-portal": "Leitender Frontend-Engineer",
    justrite: "Mobile Engineer",
    zona: "Mobile Engineer",
    "kuja-erp": "Frontend-Engineer",
  },
  workCopy: {
    "mtn-partner-portal": {
      description:
        "Die operative Oberfläche, um digitaler Partner von MTN zu werden.",
      detail:
        "Next.js-Portal in Produktion für lizenzierte Aggregatoren, von der NCC zugelassene VAS-Partner und die Menschen, die sie betreiben: Onboarding, Compliance, Verträge und Service-Integration mit MTN, live auf partner.mtn.ng.",
      metric: "Über 1 Mio. Kundinnen und Kunden",
    },
    justrite: {
      description: "Lebensmittel-Ecommerce, das zum Laden passt.",
      detail:
        "React-Native-Client für Justrite Superstore: filialbezogener Bestand, Checkout über mehrere Gateways und Bank-BNPL, plus das Upgrade auf React Native 0.77 und CodePush-OTA. Live auf iOS, Android und justriteonline.com.",
      metric: "4,6 bei Play",
    },
    zona: {
      description: "Nachtleben in Miami und New York, gebucht aus der Tasche.",
      detail:
        "App für Nightlife: Locations entdecken, auf Gästelisten kommen, Bottle Service buchen. In beiden Stores, mit einer Oberfläche, die sich nativ anfühlt.",
      metric: "iOS + Android",
    },
    "kuja-erp": {
      description: "Die Web-Steuerung für AB InBevs Route-to-Market in Afrika.",
      detail:
        "Händler-ERP für Admins und Backoffice: Netzwerk, Bestand, Laufkundschaft, Claims, Finanzen und Loyalty. Eine zweisprachige Next.js-App mit Rechten und Länderkontext.",
      metric: "AB InBev",
    },
  },
  stats: [
    "Jahre Produkt ausgeliefert",
    "Kundinnen und Kunden",
    "tägliche Nutzeroperationen",
    "weniger Produktionsfehler",
  ],
  experience: {
    eyebrow: "02 — Erfahrung",
    title: "Nah an der Produktion. Jedes Mal.",
    roles: {
      "MTN Nigeria": "Leitender Frontend-Engineer",
      Justrite: "Mobile Engineer",
      "AB InBev": "Frontend-Engineer",
      SmallClosedWorld: "Leitender Frontend-Entwickler — Web & Mobile",
      "Satori Mental Health": "Frontend-Entwickler",
      Techbeaver: "React-Native-Entwickler",
      "SubShare Inc.": "Frontend-Entwickler — Praktikum Web & Mobile",
      "Integrated Orange": "Frontend-Entwickler im Praktikum",
    },
    points: {
      "MTN Nigeria": [
        "Frontend des Digital Partner Portal in Next.js 15, TypeScript, TanStack Query, React Hook Form und Zod gebaut.",
        "Onboarding von Partnern und Aggregatoren, Service-Dokumentation und Service-Integration v2, rollenbasierte Navigation und Dashboard-Aufgaben verantwortet.",
        "Über GitHub-PRs in Produktion gebracht, on-prem, auf Azure und OpenShift.",
      ],
      Justrite: [
        "Ich verantworte den React-Native-Client für Justrite Superstore: filialbezogener Katalog, Checkout über mehrere Gateways und Bank-BNPL auf iOS und Android.",
        "Checkout, BNPL mit Stanbic, Wema und CashConnect, Katalog-Performance und ein Redesign von Home, Wallet, Cart, Loyalty und You ausgeliefert.",
        "Den nativen Stack auf React Native 0.77 gehoben (Hermes, 16-KB-Pages bei Play) und CodePush-OTA, ohne die wöchentlichen Releases einzufrieren.",
      ],
      "AB InBev": [
        "Frontend von KUJA Web, dem Händler-ERP von AB InBev Afrika: Next.js 14, TypeScript, das KJ-Designsystem, React Query und Redux.",
        "Vertikale Schnitte: Super Admin, Rollen, Katalog und Leergut, Awoof-Loyalty, Claims, Finanzen und Verkäufer-Migration.",
        "Schwer waren berechtigte Multi-Persona-UX, zweisprachige Märkte (Englisch und Portugiesisch) und Tabellen plus Observability, denen man in Produktion traut.",
      ],
      SmallClosedWorld: [
        "Entwicklung skalierbarer React-Native-Anwendungen für mehrere Kunden und Produkte geleitet.",
        "An iOS- und Android-Releases mitgearbeitet und technische Entscheidungen über parallele Projekte unterstützt.",
      ],
      "Satori Mental Health": [
        "Responsive, barrierearme React-Anwendungen aus Figma gebaut, mit Redux und React Hooks.",
        "Rendering verbessert, indem unnötige Re-Renders weggefallen sind.",
      ],
      Techbeaver: [
        "React-Native-Apps in Produktion entwickelt und betreut, von der Entwicklung bis zum Release.",
        "Fehler diagnostiziert und Stabilität, Zuverlässigkeit und Nutzung verbessert.",
      ],
      "SubShare Inc.": [
        "Interaktive React- und React-Native-Anwendungen nach Produkt- und Kundenanforderung entwickelt.",
        "Wiederverwendbare Komponenten und responsive Oberflächen für Desktop, Tablet und Mobile gebaut.",
      ],
      "Integrated Orange": [
        "Responsive, interaktive Webapps mit HTML, CSS, JavaScript und modernem Tooling entwickelt.",
        "Alte jQuery-Oberflächen auf eine React-Architektur migriert, wartbarer und schneller weiterzuentwickeln.",
      ],
    },
  },
  skills: {
    eyebrow: "03 — Fähigkeiten",
    title: "Von Figma in den App Store.",
    mobile: "Apps, die sich nativ anfühlen, in beiden Stores.",
    groups: {
      Languages: "Sprachen",
      Web: "Web",
      Mobile: "Mobile",
      "State & Data": "State & Daten",
      Quality: "Qualität",
      Performance: "Performance",
    },
    labels: {
      "Accessibility (WCAG)": "Barrierefreiheit (WCAG)",
      "Code Reviews": "Code-Reviews",
      "Code Splitting": "Code-Splitting",
      "Lazy Loading": "Lazy Loading",
      "Rendering Optimisation": "Rendering-Optimierung",
    },
  },
  projects: {
    eyebrow: "Eigene Arbeit",
    title: "Abende und Wochenenden.",
    body: "Keine Kundenbriefs. Eine Ops-Konsole, eine Steuerungsoberfläche für Entwickler, ein Shop, ein Banking-Dashboard und eine Budget-App, die es geben sollte. Selbst entworfen und ausgeliefert.",
    web: "Web",
    mobile: "Mobile",
    read: "Fallstudie lesen",
    visit: "Live-Seite öffnen",
    crumb: "Eigene Projekte",
    home: "Start",
  },
  projectCopy: {
    QuantumSpecs: {
      description:
        "Eine Ops-Konsole, die die Checkout-Gesundheit in fünf Regionen beobachtet und einen KI-Analysten dieselben Daten abfragen lässt. Aktionen muss ein Mensch bestätigen, bevor Produktion sich ändert.",
      detail:
        "Operations-Intelligenz für Kora, ein fiktives panafrikanisches Zahlungsunternehmen. Sie verfolgt Umsatz, Fehlerrate, Latenz, Händler, Incidents und Deploys. Der Analyst ruft Tools gegen echtes Postgres auf, statt Metriken zu erfinden. Ein Incident, ein Page, ein Rollback von checkout-api oder das Abschalten von Paystack Nigeria braucht weiter einen menschlichen Klick.",
      metric: "Live-Konsole",
    },
    Pollux: {
      description:
        "Eine dunkle, tastaturerste Entwicklerplattform: eine Steuerung wie bei Vercel, um Apps auszuliefern, zu beobachten und abzusichern.",
      detail:
        "Projekt wählen, aus Git deployen und eine Live-Pipeline gehen: Git → Build → Tests → Scan → Deploy → Health. Logs sind jenseits von 10.000 Zeilen virtualisiert. Traces und Web Vitals liegen in der Observability. Security umfasst RBAC, API-Keys und ein Audit-Log. Eine CLI und der GitHub-PR-Preview-Hook sitzen auf denselben APIs. SSE hält die Oberfläche lebendig. Der Katalog trägt Sternnamen.",
      metric: "Live-Plattform",
    },
    GameBuddy: {
      description:
        "Offizielle Konsolen, in Naira, verkauft, als wäre heute Spieltag.",
      detail:
        "Ein Lagos-Shop für PlayStation, Xbox, Nintendo, PC und Steam Deck: Katalog, Angebote, Warenkorb und Loyalty. Lieferung am nächsten Tag, Plattformseiten und eine Commerce-Oberfläche, an der ich weiter arbeite.",
      metric: "Live-Shop",
    },
    Interswitch: {
      description:
        "Ein nigerianisches Banking-Dashboard, das man wirklich lesen kann.",
      detail:
        "Next.js-Kontoübersicht: Spar-, Giro- und Kreditsalden in Naira, Geld senden und letzte Aktivitäten. Typisierte Formulare, TanStack Query, Jest und Playwright.",
      metric: "Live-Dashboard",
    },
    Flux: {
      description: "Eine Budget-App, die ich am Zahltag wirklich öffne.",
      detail:
        "React-Native-Geld-App: Ausgabenverlauf, Planung bis zum Zahltag, Belegfotos, Face ID und lokale Backups. Gebaut für mein Ausgeben, nicht für eine Tabelle im App-Icon.",
      metric: "Persönliche Finanzen",
    },
  },
  contact: {
    eyebrow: "04 — Kontakt",
    title: "Bauen wir etwas, das Menschen gern benutzen.",
    body: "Senior-Rollen in Frontend und Mobile. Remote in Europa, offen für einen Umzug, und ich lege mich auf eure Arbeitszeiten.",
    resume: "Lebenslauf herunterladen",
  },
  caseStudy: {
    visit: "Live-Seite öffnen",
    previous: "Zurück",
    next: "Weiter",
    onThisPage: "Auf dieser Seite",
    selectedWork: "Ausgewählte Arbeit",
    personalProjects: "Eigene Projekte",
    demo: "Demo",
    selectedDemo: "Ausgewählte Demo",
    privateDisclaimer:
      "Privates Produktionssystem. Das ist die öffentliche Geschichte, nicht der Code.",
    demoDisclaimer:
      "Eine ausgewählte Demo. Die öffentliche Geschichte eines Systems, das ich entworfen und ausgeliefert habe.",
    home: "Start",
    sections: {
      Problem: "Problem",
      Approach: "Ansatz",
      "What shipped": "Ausgeliefert",
      "Trade-offs": "Abwägungen",
      Quality: "Qualität",
      Result: "Ergebnis",
      Next: "Als Nächstes",
      "My role": "Meine Rolle",
      "Frontend decisions": "Frontend-Entscheidungen",
    },
  },
  notFound: {
    title: "Diese Seite gibt es nicht.",
    body: "Diese URL ist keine Fallstudie und kein Projekt auf dieser Seite.",
    home: "Start",
    studies: "Fallstudien",
    projects: "Eigene Projekte",
    contact: "Kontakt",
    crumb: "Seite nicht gefunden",
    metaTitle: "Seite nicht gefunden",
    metaDescription:
      "Diese Seite gibt es nicht. Zurück zum Start, eine Fallstudie lesen oder schreiben.",
  },
} satisfies Dictionary;
