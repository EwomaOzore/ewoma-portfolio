export type CaseStudySection = {
  title: string;
  paragraphs: string[];
};

export type CaseStudy = {
  slug: string;
  lede: string;
  summary: { title: string; body: string }[];
  disclaimer?: string;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    summary: [
      { title: "Ownership", body: "Personal project: designed and built the console, data model, AI tools, and evaluation workflow." },
      { title: "Key decision", body: "The analyst reads the same database as the UI. Write actions require explicit confirmation." },
      { title: "Outcome", body: "A deployed demo with a seeded payment incident, tool traces, and repeatable evaluations. External integrations are simulated." },
    ],
    slug: "quantumspecs",
    lede: "An ops console that watches checkout health across five regions, then lets an AI analyst query the same data and propose actions you have to confirm before anything mutates production.",
    disclaimer:
      "Kora is a fictional tenant. Slack, PagerDuty, and Linear are sandbox inbox rows — not production webhooks.",
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "African payment infrastructure is not one Stripe dashboard. Kora — the fictional tenant in this project — routes card, mobile money, and bank transfer across Paystack, Flutterwave, MTN MoMo, M-Pesa, Stripe, and NUBAN. Failure modes are regional: a Paystack Nigeria mobile timeout does not look like an M-Pesa payout delay in Kenya or GBP/NGN quote drift in London.",
          "Generic “AI ops” demos fail in three ways. The model talks about outages that are not in the data. Write actions run with no confirmation — page, rollback, disable a route. There is no score for whether the model picked the right tools. QuantumSpecs is built to refuse those shortcuts.",
        ],
      },
      {
        title: "Approach",
        paragraphs: [
          "Data first. Prisma and Postgres (Neon in production) hold merchants, about 10,000 checkouts, incidents, deploys, logs, payment routes, and workflow runs. Seed data is generated relative to now, so the Paystack Nigeria spike is always a few hours behind the current time. Overview, Analytics, Customers, and Incidents all read that database. The analyst uses the same queries.",
          "Tools, then language. The analyst has read tools — transaction metrics, provider health, deployments, logs, region compare, customer and incident search — and write tools that never execute inside the model loop. GPT-4o via the Vercel AI SDK chooses tools when an API key is set; a local planner covers the same catalog without a key. Suggested actions — create incident, notify, rollback, disable route — only run after confirm in the UI, and they write real rows.",
          "Evaluate the live path. /evaluation does not score a fake transcript. Each case calls the same runAgent path as the console and checks tool selection, evidence grounding, latency, and token use. Keep it operable: the public Vercel app is behind Auth.js. Agent, action, eval, and ingest routes are session-gated and rate-limited. Workflows can page on a trigger; they will not disable a payment route without Run playbook.",
        ],
      },
      {
        title: "What shipped",
        paragraphs: [
          "Overview is the on-call board: KPIs, 24-hour traffic, regional health, the Paystack Nigeria alert, recent incidents and deploys. Analytics, Customers, and Incidents cover filters, merchant risk and KYC, and incident timelines. The AI agent (⌘K) streams an investigation with a tool trace and confirm-to-write actions. Past investigations persist as AgentRun rows. Workflows share the analyst’s tools. AI Evaluation runs the live-model suite. Settings owns routes, team, and inbox.",
        ],
      },
      {
        title: "Trade-offs",
        paragraphs: [
          "Kora is a fictional tenant. Slack, PagerDuty, and Linear are sandbox inbox rows, not production webhooks. The value is the loop: telemetry → tools → evidence → confirmed action → eval, on a payments topology that actually has regions, providers, and mobile-money rails.",
          "I did not let the model mutate production. A console that can disable Paystack Nigeria from a paragraph is a demo. A console that proposes it, shows the blast radius from tools, and waits for a click is an operations product.",
        ],
      },
      {
        title: "Quality",
        paragraphs: [
          "The evaluation suite hits the same agent path the console uses — tool selection, grounding, latency, tokens — including “Why did checkout failures increase this morning?” and “Compare Nigeria vs Ghana.” Vitest, Playwright, and GitHub Actions sit on the repo. Opening Overview writes fresh checkouts so the 24-hour charts do not go quiet after seed.",
        ],
      },
      {
        title: "Result",
        paragraphs: [
          "Live at quantumspecs.vercel.app. The seeded scenario is a real ops shape: checkout-api@2.14.3 ships, Paystack Nigeria mobile timeouts spike for about 32 minutes, Overview flags it, and the analyst can reconstruct the blast radius from tools instead of a canned paragraph.",
        ],
      },
      {
        title: "Next",
        paragraphs: [
          "With more time I would wire real PagerDuty and Linear webhooks, and add more honest failover across mobile-money rails — still behind a human confirm.",
        ],
      },
    ],
  },
  {
    summary: [
      { title: "Ownership", body: "Ongoing contract as Senior Software Developer. I own the frontend for partner onboarding, service integration, and dashboard actions." },
      { title: "Key decision", body: "Use API-provided document schemas and role-aware workflows to support different partner types in one portal." },
      { title: "Outcome", body: "A production portal where MTN partners can submit documentation, resolve rejections, and integrate services." },
    ],
    slug: "mtn-partner-portal",
    lede: "The partner portal for MTN Nigeria: onboarding, compliance documents, contracts, and service integration in one workflow.",
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "MTN partners have different onboarding requirements. Aggregators manage sub-partners; service providers submit compliance documents; technical admins configure integrations; directors and witnesses handle contracts. The portal needed to guide each person through the right next action and let them resume unfinished work.",
        ],
      },
      {
        title: "My role",
        paragraphs: [
          "Senior Software Developer on contract, February 2025 to present. I own the frontend for partner and aggregator onboarding, service documentation, service-integration v2, dashboard actions, and rejection/correction flows.",
          "I work with product, design, backend engineers, and QA on requirements, API integration, code reviews, release planning, and production support. My responsibility is the frontend workflow within the wider delivery team.",
        ],
      },
      {
        title: "Frontend decisions",
        paragraphs: [
          "The portal uses Next.js, TypeScript, TanStack Query, React Hook Form, and Zod. The API supplies documentation schemas, so different service types can share the same form workflow rather than each needing a separate implementation.",
          "Dashboard widgets take partners to their next task: submit a license, correct rejected documents, complete a contract, or finish integration. Role-aware navigation supports a technical-admin handoff without exposing the full workspace. Saved drafts preserve progress through longer forms.",
        ],
      },
      {
        title: "Trade-offs",
        paragraphs: [
          "Schema-driven forms require close agreement with the backend on validation and saved state. That coordination is worthwhile because document requirements vary by partner and service type.",
          "The application mixes an older UI kit with newer components. I worked within that constraint to ship the onboarding and integration flows; consolidating the design system remains follow-up work.",
        ],
      },
      {
        title: "Quality",
        paragraphs: [
          "Typed forms, lint checks, code reviews, and QA environments support delivery through development, staging, and production. I follow changes through production support across on-premises, Azure, and OpenShift environments.",
          "The portal has no automated frontend test script. End-to-end coverage for saving drafts, submitting documents, correcting rejections, and handing off service integration is the first testing improvement I would make.",
        ],
      },
      {
        title: "Result",
        paragraphs: [
          "The portal is live at partner.mtn.ng. Partners can complete onboarding, manage documentation, respond to rejections, and move services toward integration in the same application.",
        ],
      },
    ],
  },
  {
    summary: [
      { title: "Ownership", body: "Ongoing contract as Lead Mobile Developer. I lead checkout, bank BNPL integrations, native upgrades, and release quality." },
      { title: "Key decision", body: "Keep the store, inventory, and payable total consistent across payment methods while upgrading the native stack alongside feature releases." },
      { title: "Outcome", body: "An iOS and Android shopping app with multiple payment gateways and Stanbic IBTC, Wema, and CashConnect BNPL flows." },
    ],
    slug: "justrite",
    lede: "I lead development of Justrite’s React Native app: store-aware shopping, checkout, bank buy-now-pay-later integrations, and releases on iOS and Android.",
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "A grocery order must match a real store’s stock, prices, delivery rules, and payment options. Switching stores, applying a promotion, or returning from a bank credit flow must not leave the cart or checkout total inconsistent.",
          "The app also needed native upgrades for platform requirements while regular shopping features continued to ship.",
        ],
      },
      {
        title: "My role",
        paragraphs: [
          "Lead Mobile Developer on contract, May 2025 to present. I joined an existing app and lead work on checkout, bank BNPL integrations, catalog performance, interface updates, native upgrades, and release quality.",
          "I work with product managers, designers, backend engineers, and stakeholders on technical decisions, code reviews, debugging, and releases. I also implemented unit and integration tests with Jest.",
        ],
      },
      {
        title: "Frontend decisions",
        paragraphs: [
          "The React Native client uses TypeScript and Redux Toolkit for session, cart, and store state. Cart and catalog requests carry the current warehouse so a store change does not leave shoppers looking at another store’s inventory.",
          "Checkout reconciles promotions, bag fees, delivery fees, and the selected store into one payable total. Bank BNPL flows respect operational rules such as pickup-only eligibility, and successful credit purchases clear the cart.",
          "I upgraded the native stack through React Native 0.77 alongside feature work. Fastlane handles native releases; CodePush handles JavaScript updates. Native architecture changes were constrained by Firebase notification compatibility.",
        ],
      },
      {
        title: "Trade-offs",
        paragraphs: [
          "Bank BNPL required separate eligibility and payment handling for Stanbic IBTC, Wema, and CashConnect. A single generic payment button would hide important differences in pickup rules and required parameters.",
          "Keeping JavaScript updates separate from binary releases helped deliver fixes during the native upgrade. Changes to native dependencies still needed TestFlight and Play releases.",
        ],
      },
      {
        title: "Quality",
        paragraphs: [
          "Jest unit and integration testing, code reviews, and production troubleshooting support release quality. Critical cases include coupon revalidation, the final payable total, cart reset after BNPL success, and catalog consistency after changing stores.",
          "GitHub Actions and Fastlane support delivery to TestFlight and Google Play. Low-end Android performance budgets and broader device-level checkout coverage are the next improvements I would prioritize.",
        ],
      },
      {
        title: "Result",
        paragraphs: [
          "The app is available on iOS and Android. My delivered work includes multiple payment gateways, three bank BNPL integrations, store-aware cart handling, and native upgrades alongside feature releases.",
        ],
      },
    ],
  },
  {
    summary: [
      { title: "Ownership", body: "Mobile Engineer on a React Native nightlife app for Miami and New York. I built the interface, integrated APIs, and shipped store releases." },
      { title: "Key decision", body: "Connect venue discovery and booking in a consistent mobile flow, keeping animations responsive on older devices." },
      { title: "Outcome", body: "An app released on iOS and Android for discovering venues, joining guest lists, and booking bottle service." },
    ],
    slug: "zona",
    lede: "A React Native app for discovering nightlife venues, joining guest lists, and booking bottle service in Miami and New York.",
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "People need to move quickly from finding a venue to making a booking on their phone. Venue details, guest lists, and bottle service needed to feel like one connected experience.",
        ],
      },
      {
        title: "My role",
        paragraphs: [
          "As Mobile Engineer, I built the cross-platform interface in React Native and TypeScript, integrated REST APIs for venue and booking data, and shipped releases to the App Store and Google Play.",
        ],
      },
      {
        title: "Frontend decisions",
        paragraphs: [
          "I connected discovery, venue details, and booking through a consistent navigation flow. Transitions help users follow that flow, with animation responsiveness treated as part of the experience.",
          "The API supplies venue and booking data. Store releases also required attention to permissions and review-ready user journeys.",
        ],
      },
      {
        title: "Trade-offs",
        paragraphs: [
          "React Native allowed a shared application across iOS and Android. The trade-off was maintaining native release workflows and checking that animations remained responsive on older devices.",
        ],
      },
      {
        title: "Quality",
        paragraphs: [
          "The app shipped through the iOS and Android store release processes. The next improvements I would prioritize are testing under slow venue responses and asking for location permission when someone chooses a nearby search.",
        ],
      },
      {
        title: "Result",
        paragraphs: [
          "Zona is released on both stores with venue discovery, guest lists, and bottle-service booking. The store listings let prospective employers see the released product.",
        ],
      },
    ],
  },
  {
    summary: [
      { title: "Ownership", body: "Ongoing contract as Senior Frontend Engineer. I deliver distributor and admin workflows with the wider frontend team." },
      { title: "Key decision", body: "Carry country, role, and distributor context through shared components and API integration; localize features in the same change." },
      { title: "Outcome", body: "A production distributor ERP with inventory, sales, claims, finance, and loyalty workflows in English and Portuguese." },
    ],
    slug: "kuja-erp",
    lede: "A distributor ERP for AB InBev Africa, covering inventory, sales, claims, and finance across English- and Portuguese-speaking markets.",
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "AB InBev Africa needed a shared application for network administrators and distributor backoffice teams. Screens and actions depend on the user’s country, role, permissions, and distributor, while market-specific features must remain consistent across the product.",
        ],
      },
      {
        title: "My role",
        paragraphs: [
          "Senior Frontend Engineer on contract, January 2024 to present. I deliver features across administration, user roles, catalog and returnable packaging, Awoof loyalty, claims, finance, and seller migration.",
          "I work within the frontend team and contribute to architecture discussions, shared components, and code reviews. I carry features through API integration, English and Portuguese localization, QA, and release.",
        ],
      },
      {
        title: "Frontend decisions",
        paragraphs: [
          "Next.js and TypeScript host the application. Shared KJ components and Mantine cover tables, forms, drawers, and empty states; React Query manages server data, while Redux holds session and draft UI state.",
          "Navigation combines permissions with market configuration. Each feature carries country and distributor context through the interface and API requests. Translation ships with the feature so both language versions stay usable.",
          "Table hooks support domain-specific controls such as quantity steppers and delivery options. Dirty-form actions, confirmations, and explicit error states help protect work in claims, inventory, and finance.",
        ],
      },
      {
        title: "Trade-offs",
        paragraphs: [
          "Mantine, Tailwind, and SCSS helped the team deliver branded interfaces quickly, but left overlapping styling systems. Shared design tokens are the next consolidation step.",
          "Some persisted Redux data overlaps with React Query. Table hooks preserve flexibility but also allow duplication. I would reduce those overlaps incrementally around shared querying, sorting, and pagination.",
        ],
      },
      {
        title: "Quality",
        paragraphs: [
          "Typed API boundaries, code reviews, lint checks, QA environments, security scanning, and Datadog support release quality. Features pass through development and QA before production on Azure Kubernetes.",
          "Automated coverage is limited. Claims, seller migration, checkout, and inventory setup are the first workflows I would cover more thoroughly with Jest and Playwright.",
        ],
      },
      {
        title: "Result",
        paragraphs: [
          "KUJA Web provides a production interface for distributor inventory, sales, claims, finance, loyalty, and network administration across English- and Portuguese-speaking markets.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
