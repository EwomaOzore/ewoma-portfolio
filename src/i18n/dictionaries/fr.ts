import type { Dictionary } from "./en";

export const fr = {
  meta: {
    title: "Ewoma Ozore — Ingénieur frontend et mobile senior",
    description:
      "Ingénieur frontend et mobile senior basé à Lagos, au Nigeria. Études de cas React, React Native et Next.js : MTN, Justrite, Zona et AB InBev. Ouvert au télétravail et à la mobilité internationale.",
    projectsTitle: "Projets personnels",
    projectsDescription:
      "Projets personnels d’Ewoma Ozore — QuantumSpecs, Pollux, GameBuddy, Interswitch et Flux. Conçus le soir et le week-end.",
    caseStudy: "Étude de cas",
  },
  caseLedes: {
    quantumspecs:
      "Une console d’ops qui surveille la santé du checkout sur cinq régions, puis laisse un analyste IA interroger les mêmes données et proposer des actions qu’il faut confirmer avant toute mutation en production.",
    "mtn-partner-portal":
      "Le frontend partenaire de l’écosystème digital de MTN Nigeria : onboarding, conformité, contrats, lancement de services et intégration aux plateformes MTN, sans un processus de papier et d’e-mails.",
    justrite:
      "Je dirige le développement de l’app React Native de Justrite : achats par magasin, paiement, intégrations bancaires de paiement différé et publications sur iOS et Android.",
    zona: "La nuit n’attend pas. Trouver un lieu, rejoindre une guest list, réserver une bouteille — depuis le téléphone, ce soir.",
    "kuja-erp":
      "Un ERP distributeurs pour AB InBev Afrique : stocks, ventes, réclamations et finances sur les marchés anglophones et lusophones.",
  },
  caseDisclaimers: {
    quantumspecs:
      "Kora est un tenant fictif. Slack, PagerDuty et Linear sont des lignes d’une boîte de test, pas des webhooks de production.",
  },
  nav: {
    work: "Travail",
    projects: "Projets",
    experience: "Expérience",
    skills: "Compétences",
    contact: "Contact",
    resume: "CV",
    home: "Accueil",
    open: "Ouvrir le menu",
    close: "Fermer le menu",
    footer: "Pied de page",
    social: "Réseaux",
    languages: "Langues",
    download: "Télécharger le CV",
  },
  hero: {
    location:
      "Lagos, Nigeria · WAT (UTC+1) · Télétravail et mobilité internationale",
    hello: "Bonjour !",
    before: "Je suis",
    name: "Ewoma Ozore",
    afterStart: "ingénieur frontend senior,",
    afterEnd: "je développe pour le web et le mobile.",
    intro:
      "Je prends en charge l’inscription, le paiement et les outils métier, de la conception et l’intégration des API à la mise en production et au support.",
    studies: "Lire les études de cas",
    contact: "Me écrire",
    scroll: "Aller au travail",
    where: "Là où je veux travailler",
  },
  work: {
    eyebrow: "01 — Travaux choisis",
    title: "Comment je pense, pas seulement ce qui a été livré.",
    body: "Études de cas de production. Arbitrages, contraintes, et ce que je ferais avec plus de temps.",
    personal: "Projets personnels",
    read: "Lire l’étude de cas",
    visit: "Voir le site",
    logo: "logo",
    screenshot: "Capture de {name}",
    app: "Capture de l’app {name}",
  },
  roles: {
    "mtn-partner-portal": "Développeur logiciel senior",
    justrite: "Développeur mobile principal",
    zona: "Ingénieur mobile",
    "kuja-erp": "Ingénieur frontend senior",
  },
  workCopy: {
    "mtn-partner-portal": {
      description:
        "Inscription et intégration des services des partenaires de MTN Nigeria.",
      detail:
        "Portail Next.js en production pour les agrégateurs licenciés, les partenaires VAS approuvés par la NCC et les équipes qui les font tourner : onboarding, conformité, contrats et intégration de services avec MTN, en ligne sur partner.mtn.ng.",
      metric: "Portail en production",
    },
    justrite: {
      description: "Un ecommerce alimentaire qui ressemble au magasin.",
      detail:
        "Client React Native de Justrite Superstore : stock par magasin, paiement multi-passerelles et BNPL bancaire, plus la montée vers React Native 0.77 et CodePush OTA. En ligne sur iOS, Android et justriteonline.com.",
      metric: "iOS + Android",
    },
    zona: {
      description: "La nuit à Miami et New York, réservée depuis la poche.",
      detail:
        "Application de vie nocturne pour trouver un lieu, rejoindre une guest list et réserver une bouteille. Publiée sur les deux stores, avec une interface qui se sent native.",
      metric: "iOS + Android",
    },
    "kuja-erp": {
      description:
        "Stocks, ventes et finances pour les distributeurs d’AB InBev Afrique.",
      detail:
        "ERP distributeurs pour les admins et le backoffice : réseau, stock, vente au comptoir, réclamations, finance et fidélité. Une app Next.js bilingue, avec permissions et contexte pays.",
      metric: "AB InBev",
    },
  },
  stats: [
    "années en frontend, stages inclus",
    "études de cas en production",
    "apps mobiles sur les deux stores",
    "clients servis sur l’ensemble des projets",
  ],
  experience: {
    context:
      "MTN et AB InBev sont des missions contractuelles en cours, prolongées par renouvellement. Elles sont menées en parallèle de mon poste chez Justrite, ce qui explique le chevauchement des dates.",
    present: "Aujourd’hui",
    engagements: {
      contract: "Mission contractuelle",
      internship: "Stage",
    },
    eyebrow: "02 — Expérience",
    title: "Près de la production. À chaque fois.",
    roles: {
      "MTN Nigeria": "Développeur logiciel senior",
      Justrite: "Développeur mobile principal",
      "AB InBev": "Ingénieur frontend senior",
      SmallClosedWorld: "Développeur frontend principal — web et mobile",
      "Satori Mental Health": "Développeur frontend",
      Techbeaver: "Développeur React Native",
      "SubShare Inc.": "Développeur frontend — stage web et mobile",
      "Integrated Orange": "Développeur frontend stagiaire",
    },
    points: {
      "MTN Nigeria": [
        "J’ai construit le frontend du Digital Partner Portal en Next.js 15, TypeScript, TanStack Query, React Hook Form et Zod.",
        "J’ai pris l’onboarding partenaires et agrégateurs, la documentation de services et l’intégration v2, la navigation par rôle et les widgets de tâches du tableau de bord.",
        "Livré en production via des PRs GitHub, on-prem, Azure et OpenShift.",
        "Je collabore avec les équipes produit, design, backend et QA sur les API, les revues de code, la préparation des versions et le support en production.",
      ],
      Justrite: [
        "Je porte le client React Native de Justrite Superstore : catalogue par magasin, paiement multi-passerelles et BNPL bancaire sur iOS et Android.",
        "J’ai livré le checkout, le BNPL Stanbic, Wema et CashConnect, la performance du catalogue et une refonte de Accueil, Wallet, Panier, Fidélité et Vous.",
        "Montée du stack natif vers React Native 0.77 (Hermes, pages 16 Ko sur Play) et CodePush OTA sans geler les livraisons hebdomadaires.",
        "J’ai mis en place des tests unitaires et d’intégration avec Jest et je collabore avec les équipes produit, design et backend sur la qualité des versions et les incidents en production.",
      ],
      "AB InBev": [
        "Frontend de KUJA Web, l’ERP distributeurs d’AB InBev Afrique : Next.js 14, TypeScript, le design system KJ, React Query et Redux.",
        "Tranches verticales : Super Admin, rôles, catalogue et consignes, fidélité Awoof, réclamations, finance et migration des vendeurs.",
        "Le dur était l’UX multi-personas avec permissions, les marchés bilingues (anglais et portugais), et des tableaux et une observabilité fiables en production.",
        "Je participe aux discussions d’architecture et aux revues de code, et accompagne les fonctionnalités de l’intégration des API à la QA et à la publication.",
      ],
      SmallClosedWorld: [
        "J’ai dirigé le développement d’applications React Native scalables pour plusieurs clients et produits.",
        "J’ai contribué aux sorties iOS et Android et aux décisions techniques de projets menés en parallèle.",
      ],
      "Satori Mental Health": [
        "Applications React accessibles et adaptatives à partir de maquettes Figma, avec Redux et React Hooks.",
        "Rendu plus efficace en supprimant les re-renders inutiles.",
      ],
      Techbeaver: [
        "Développement et maintenance d’applications React Native en production, du build à la sortie store.",
        "Diagnostic et correctifs de stabilité, de fiabilité et d’expérience.",
      ],
      "SubShare Inc.": [
        "Applications interactives React et React Native selon le produit et le client.",
        "Composants réutilisables et interfaces adaptatives sur desktop, tablette et mobile.",
      ],
      "Integrated Orange": [
        "Sites interactifs et adaptatifs en HTML, CSS, JavaScript et outillage moderne.",
        "Migration d’interfaces jQuery héritées vers une architecture React, plus maintenable et plus rapide à faire évoluer.",
      ],
    },
  },
  skills: {
    eyebrow: "03 — Capacités",
    title: "De Figma à l’App Store.",
    mobile: "Des apps qui se sentent natives, publiées sur les deux stores.",
    groups: {
      Languages: "Langages",
      Web: "Web",
      Mobile: "Mobile",
      "State & Data": "État et données",
      Quality: "Qualité",
      Performance: "Performance",
    },
    labels: {
      "Accessibility (WCAG)": "Accessibilité (WCAG)",
      "Code Reviews": "Relectures de code",
      "Code Splitting": "Découpage du code",
      "Lazy Loading": "Chargement différé",
      "Rendering Optimisation": "Optimisation du rendu",
    },
  },
  projects: {
    eyebrow: "Travail personnel",
    title: "Les soirs et les week-ends.",
    body: "Pas des briefs clients. Une console d’ops, un plan de contrôle pour développeurs, une boutique, un tableau de bord bancaire et une app de budget que je voulais voir exister. Conçus et livrés par moi.",
    web: "web",
    mobile: "mobile",
    read: "Lire l’étude de cas",
    visit: "Voir le site",
    crumb: "Projets personnels",
    home: "Accueil",
  },
  projectCopy: {
    QuantumSpecs: {
      description:
        "Une console d’ops qui surveille la santé du checkout sur cinq régions, puis laisse un analyste IA interroger les mêmes données et proposer des actions que vous confirmez avant toute mutation en production.",
      detail:
        "Intelligence opérationnelle pour Kora, une société de paiement panafricaine fictive. Elle suit le revenu, le taux d’échec, la latence, les marchands, les incidents et les déploiements. L’analyste appelle des outils sur un Postgres réel au lieu d’inventer des métriques. Ouvrir un incident, alerter une équipe, rollback de checkout-api ou désactiver Paystack Nigeria exige toujours un clic humain.",
      metric: "Console en ligne",
    },
    Pollux: {
      description:
        "Une plateforme développeur sombre, pensée pour le clavier : un plan de contrôle façon Vercel pour livrer, observer et sécuriser des apps.",
      detail:
        "Choisissez un projet, déployez depuis git et suivez un pipeline vivant : git → build → tests → scan → deploy → santé. Les logs sont virtualisés au-delà de 10 000 lignes. Traces et web vitals sont dans l’observabilité. La sécurité couvre RBAC, clés d’API et journal d’audit. Une CLI et le hook de preview des PRs GitHub partagent les mêmes APIs. Le SSE garde l’interface vivante. Le catalogue porte des noms d’étoiles.",
      metric: "Plateforme en ligne",
    },
    GameBuddy: {
      description:
        "Des consoles officielles, en nairas, vendues comme si le match était ce soir.",
      detail:
        "Une boutique de Lagos pour PlayStation, Xbox, Nintendo, PC et Steam Deck : catalogue, offres, panier et fidélité. Livraison le lendemain, pages par plateforme, et une UI commerce que je continue d’itérer.",
      metric: "Boutique en ligne",
    },
    Interswitch: {
      description:
        "Un tableau de bord bancaire nigérian que l’on peut vraiment lire.",
      detail:
        "Vue de compte Next.js : soldes épargne, courant et prêt en nairas, envoi d’argent et activité récente. Formulaires typés, TanStack Query, et une couverture Jest plus Playwright.",
      metric: "Tableau de bord en ligne",
    },
    Flux: {
      description: "Une app de budget que j’ouvre vraiment le jour de paie.",
      detail:
        "App d’argent en React Native : timeline de dépenses, planification de la paie, photos de reçus, Face ID et sauvegardes locales. Construite pour ma façon de dépenser, pas un tableur déguisé en app.",
      metric: "Finances personnelles",
    },
  },
  contact: {
    language:
      "Langue de travail : anglais. Ce site est aussi traduit en français, allemand et espagnol.",
    eyebrow: "04 — Contact",
    title: "Construisons quelque chose que les gens aiment utiliser.",
    body: "Basé à Lagos, au Nigeria (WAT, UTC+1). Ouvert aux postes senior en frontend et mobile avec des équipes internationales, à distance ou avec une aide à la mobilité. Les plages horaires communes sont à convenir pour chaque poste.",
    resume: "Télécharger le CV",
  },
  caseStudy: {
    detailLanguage: "Étude de cas technique en anglais",
    visit: "Voir le site",
    previous: "Précédent",
    next: "Suivant",
    onThisPage: "Sur cette page",
    selectedWork: "Travaux choisis",
    personalProjects: "Projets personnels",
    demo: "Démo",
    selectedDemo: "Démo choisie",
    privateDisclaimer:
      "Système de production privé. Ceci est l’histoire publique, pas le code.",
    demoDisclaimer:
      "Une démo choisie. L’histoire publique d’un système que j’ai conçu et livré.",
    home: "Accueil",
    sections: {
      Problem: "Problème",
      Approach: "Approche",
      "What shipped": "Ce qui a été livré",
      "Trade-offs": "Arbitrages",
      Quality: "Qualité",
      Result: "Résultat",
      Next: "Ensuite",
      "My role": "Mon rôle",
      "Frontend decisions": "Décisions frontend",
    },
  },
  notFound: {
    title: "Cette page n’existe pas.",
    body: "Cette URL n’est ni une étude de cas ni un projet de ce site.",
    home: "Accueil",
    studies: "Études de cas",
    projects: "Projets personnels",
    contact: "Contact",
    crumb: "Page introuvable",
    metaTitle: "Page introuvable",
    metaDescription:
      "Cette page n’existe pas. Retournez à l’accueil, lisez une étude de cas, ou écrivez-moi.",
  },
} satisfies Dictionary;
