export type CaseStudySection = {
  title: string;
  paragraphs: string[];
};

export type CaseStudy = {
  slug: string;
  lede: string;
  disclaimer?: string;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
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
    slug: "mtn-partner-portal",
    lede: "The partner-facing frontend for MTN Nigeria’s digital partner ecosystem — onboard, submit compliance, sign contracts, launch services, and integrate with MTN platforms, without a paper-and-email process.",
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "MTN Nigeria needed a single production portal so third-party companies could become digital partners without a paper-heavy, email-driven process. Partners range from licensed aggregators who onboard sub-partners, to NCC-approved VAS partners who integrate services, to unlicensed companies that must attach to a licensed sponsor, to technical admins who only handle service integration, to directors, delegates, and witnesses who mainly sign.",
          "Each path has different documents, SLAs, licenses, contracts, and post-go-live work — shortcodes, revenue share, MTN Play, mobile advertising. The frontend is the operational surface for that lifecycle: public marketing and registration, multi-step onboarding, a task-driven dashboard, service and IP documentation, contract execution, and service-to-network integration.",
        ],
      },
      {
        title: "My role",
        paragraphs: [
          "Lead Frontend Engineer at MTN Nigeria, February 2025 to September 2026. I owned partner and aggregator onboarding, service documentation and service-integration v2, dashboard action widgets and rejection/correction loops, tech-admin invite and assignment, and role gating across the sidebar and layouts.",
          "Feature work was multi-step wizards with save-points, Zod schemas, and TanStack Query mutations against REST v2. Product complexity was partner types encoded into route access and navigation — VAS vs aggregator, licensed vs unlicensed, superadmin vs tech-admin-only, contract signatories. Delivery was GitHub PRs into shared environments, then production across on-prem, Azure, and OpenShift. The codebase is private. This is the public story.",
        ],
      },
      {
        title: "What shipped",
        paragraphs: [
          "Public marketing and acquisition: landing, Discover, FAQ, legal. Registration splits existing vs new partners. New partners complete license confirmation, service selection, and VAS vs aggregator choice — unlicensed partners attach to a licensed sponsor — then a documentation wizard for company, tax, contact, address, preview, and certification.",
          "The authenticated workspace is sixty-eight page routes under a role-aware shell. The dashboard is widget-driven: licenses, contracts, BRD, revenue share, supplier ID, integration, setup testing, and rejections each surface as a next action, drawer, or wizard — not a generic activity feed.",
          "Onboarding and add-service cover live and not-live services, IP documentation, and proof of content ownership. Service integration is choose service → details → product → review, then setup testing, including a tech-admin handoff so a specialist can finish integration without full superadmin access. Contracts, licenses, team, compliance, MTN Play, mobile advertising, and shortcodes sit on the same product.",
          "The core journey is register, qualify, document, operate, launch services, then scale — aggregators adding sub-partners and services, team assignment, revenue share. Partner state is a long machine. Each stage lights a widget instead of a CRUD table.",
        ],
      },
      {
        title: "Frontend decisions",
        paragraphs: [
          "Next.js 15 App Router, React 18, TypeScript strict. Tailwind and shadcn/ui. TanStack Query 5 for server state; TanStack Table for grids. React Hook Form and Zod for the long wizards. Axios against a typed REST contract of 200+ endpoints. Route groups split public marketing, auth and onboarding, the partner workspace, and publish.",
          "Role-conditional navigation: superadmin sees the full dashboard; technical-admin-only sees Dashboard and Service Integration; directors, delegates, and witnesses are pushed toward contracts; aggregators onboard sub-partners and handle clearance; unlicensed partners do not see contracts, partnerships, documents, ads, or MTN Play until they are licensed or attached.",
          "Service and onboarding forms are not hardcoded field-by-field. The API returns documentation schemas; the UI saves, clears, and submits against those schemas. One frontend supports many service classifications without a rewrite per product type. Each dashboard widget is a vertical slice — query, CTA, modal or drawer — so a rejection or an invite pulls the partner into the exact next action.",
        ],
      },
      {
        title: "Trade-offs",
        paragraphs: [
          "This is a B2B operations product, not a marketing site. The hard parts are long-running wizards with draft save, document upload, rejection/correction loops, and role-conditional navigation — all backed by a large REST surface and partner state that spans registration, onboarding, license, contract, and integration.",
          "The UI kits are mixed: DaisyUI leftover plus shadcn. There is no automated frontend test suite in package scripts. Those are real constraints on a large, fast-moving enterprise app. I still chose schema-driven docs over a form per service type, and a widget-driven dashboard over a CRUD admin. A generic table would have been faster to build and worse to operate.",
        ],
      },
      {
        title: "Quality",
        paragraphs: [
          "ESLint (Airbnb, Next, TypeScript, accessibility) and Lefthook on the way in. Verification is lint plus environment deploys — Docker and Helm — across development, staging, and production hosts.",
          "There is no automated frontend test script. That is a gap, not a footnote. The save, submit, and reject loops on the wizards are the paths I would lock down first.",
        ],
      },
      {
        title: "Result",
        paragraphs: [
          "A live telco partner portal at partner.mtn.ng — used to onboard and operate MTN digital partners in Nigeria, not a prototype. Continuous delivery on a regulated B2B surface from February 2025 to September 2026.",
          "The strongest story is the path that turns an approved partner into a live MTN service: service-integration v2 and new-partner/aggregator onboarding, including the technical-admin handoff. Operational complexity is encoded as role-aware navigation and widget-driven next actions, with consistent save, submit, and reject loops.",
        ],
      },
      {
        title: "Next",
        paragraphs: [
          "Playwright on the onboarding and integration wizards. One design system so DaisyUI is not still in the tree. Those are the next things I would do with more time — not a rewrite of the state machine.",
        ],
      },
    ],
  },
  {
    slug: "justrite",
    lede: "I own the React Native client for Justrite Superstore — Nigeria grocery ecommerce with store-aware inventory, multi-gateway checkout, and bank BNPL — including the upgrade to React Native 0.77 and CodePush OTA.",
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "Justrite Superstore is a Nigerian supermarket chain. The official app has to feel as reliable as the aisle: customers shop the catalog of a real store location, pay with local rails or bank credit, and choose home delivery or in-store pickup.",
          "Grocery ecommerce only works if it matches the physical shop. Inventory and prices are warehouse-specific. Payments fail if a single processor is down. A large share of shoppers need credit at the till. Meanwhile Play’s 16 KB page-size rule, iOS 18, and Firebase all required a current React Native line without freezing weekly releases.",
        ],
      },
      {
        title: "My role",
        paragraphs: [
          "Mobile Engineer, React Native, from June 2025 to present. I joined an existing v2 codebase and owned checkout, Buy Now Pay Later partners, catalog performance, a design refresh, native upgrades through React Native 0.77, and over-the-air updates.",
          "The work is product and platform on the same client: Home, search, cart, and promo correctness; Wallet and Loyalty as first-class tabs; Fastlane into TestFlight and Play; CodePush so JS hotfixes do not wait on a store review. The codebase is private. This is the public story.",
        ],
      },
      {
        title: "What shipped",
        paragraphs: [
          "Commerce: store picker, categorized home with pagination, recommendations, search, product details, favorites, promos, cart, delivery vs pickup, order history. Money: multi-acquirer checkout, wallet top-up, loyalty as tender, shopping-bag fees. Credit: Stanbic IBTC, Wema Bank, and CashConnect BNPL, gated so the offer matches ops — pickup-only when that is the rule.",
          "Growth and account: airtime and data, refer-a-friend, push campaigns, email/OTP auth, addresses, Google Places, settings. Five tabs — Home, Wallet, Cart, Loyalty, You — plus the stacks for product, search, checkout, BNPL, orders, and account. Deep links into the live site and the app.",
          "Checkout had to agree on one payable total: promo through coupon revalidation, nylon bag, delivery fee, and current store. Cart presence moved onto live contents so a BNPL success could reset state without ghost items. Home had to survive a warehouse switch without leaving the wrong aisle and products. Search was debounced and race-guarded.",
        ],
      },
      {
        title: "Frontend decisions",
        paragraphs: [
          "A typed React Native client, not a web wrap. React Native 0.77, React 18, TypeScript, Hermes. Screens own a colocated hook; presenters are Justrite-branded controls; containers handle layout. Navigation is stack plus bottom tabs.",
          "Redux Toolkit for auth, home (cart, current store, toasts, location), profile, and theme. The tree is persisted so session, cart, and store survive a kill. Networking fans API messages into a global toast. Offline is a full-screen state. Store location is required before shopping.",
          "Native upgrades ran alongside BNPL and design work: 0.72 through 0.77, Android 16 KB pages, iOS 18, Hermes. Fabric was negotiated against Firebase so background notifications still fired, instead of flipped on as a slogan. Gateway keys are fetched from the API, not baked into the client. CodePush applies JS on next resume; Fastlane still owns the binary.",
        ],
      },
      {
        title: "Trade-offs",
        paragraphs: [
          "BNPL is a product, not a button. Pickup rules, equity percentage, bag and delivery-fee params all have to match operations or the offer is hidden. A single “pay later” CTA would have been faster to ship and wrong at the till.",
          "OTA vs the store: CodePush for JavaScript; Fastlane for native. Weekly grocery features could not freeze for a React Native upgrade, and the upgrade could not skip Play’s 16 KB rule. Bridgeless Fabric stayed off where Firebase could not handle it — notifications on Android mattered more than a checkbox.",
        ],
      },
      {
        title: "Quality",
        paragraphs: [
          "Ship path is GitHub Actions into Fastlane — TestFlight and Play — with CodePush for JS. Payment and checkout paths were the ones that had to stay correct: one payable total, cart reset after credit success, catalog aligned to the current warehouse.",
        ],
      },
      {
        title: "Result",
        paragraphs: [
          "Production iOS and Android client for Justrite shoppers nationwide, live on the App Store, Google Play (4.6 from 275 reviews), and justriteonline.com. Native stack on React Native 0.77, Hermes, without stopping feature releases.",
          "Checkout across Paystack, Flutterwave, Monnify, Alatpay, Squad, wallet, and loyalty, plus three bank BNPL flows. JS hotfixes via CodePush. Store-aware cart: add-to-cart sends the current warehouse, because the wrong store is the wrong aisle.",
        ],
      },
      {
        title: "Next",
        paragraphs: [
          "Device-level performance budgets on low-end Android — the phones Justrite shoppers actually use — and product numbers the git log cannot prove: crash-free sessions, checkout conversion, GMV. Those belong next to this story when the team can share them.",
        ],
      },
    ],
  },
  {
    slug: "zona",
    lede: "Nightlife is time-sensitive. Discover a venue, join a guest list, book bottle service — from a phone, tonight.",
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "Zona is a nightlife and entertainment app for Miami and New York. People needed to discover venues, get on guest lists, and book bottle service from a pocket — not from a website they will not open in a cab.",
          "The product only works if it feels native: lists, venue detail, and booking as one motion, not a stack of web views.",
        ],
      },
      {
        title: "My role",
        paragraphs: [
          "As Mobile Engineer I built the cross-platform React Native app in TypeScript, integrated REST for venue and booking data, and shipped it to the App Store and Google Play with an animation-rich, native-feeling interface.",
        ],
      },
      {
        title: "Frontend decisions",
        paragraphs: [
          "Discovery and conversion had to share a visual hierarchy. Animations were part of that hierarchy — transitions that tell you where you are — not decoration on top of a slow list.",
          "REST owned venue and booking data. Store release meant more than a green build: review-safe flows, permission copy, and an interface that still holds up on a phone at 1 a.m.",
        ],
      },
      {
        title: "Trade-offs",
        paragraphs: [
          "We shipped a native-feeling React Native app instead of a mobile-web wrapper. Nightlife users judge latency and gesture. A responsive website would have been cheaper, and it would have felt like a brochure.",
          "Animation was budgeted. If it fights the JS thread on older devices, it is not craft — it is a dropped frame between the user and a guest list.",
        ],
      },
      {
        title: "Quality",
        paragraphs: [
          "Production releases on iOS and Android. The bar was a store listing people can actually install, not a TestFlight that never left the team.",
        ],
      },
      {
        title: "Result",
        paragraphs: [
          "Zona is live on both stores — venues, guest lists, and bottle service from the same app.",
        ],
      },
      {
        title: "Next",
        paragraphs: [
          "With more time I would tighten real-time venue load and make location permission honest: ask when “near me” is the job, not on first launch as a tax.",
        ],
      },
    ],
  },
  {
    slug: "kuja-erp",
    lede: "A bilingual, permissioned distributor ERP for AB InBev Africa — the shared interface for network admins and distributor backoffice, not a marketing site with a logo swapped in.",
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "AB InBev Africa needed a single web control plane for its route-to-market network: distributors, stockists, BDRs, drivers, points of consumption, and internal backoffice. That work is an operational ERP.",
          "The product has to answer, in one UI: who is this user, in which country, with which role and permissions? Which distributor are they acting on? Can they create SKUs, receive stock, take a walk-in sale, raise a claim, assign a driver, or only view? Is Shop, Express, or distributor-controlled pricing even enabled in this market?",
          "Before KUJA Web, those jobs sat in fragmented tools. The frontend had to become the shared interface for admins (network management) and distributor backoffice (day-to-day selling, inventory, van, finance).",
        ],
      },
      {
        title: "My role",
        paragraphs: [
          "Frontend Engineer, January 2024 to August 2026. I joined at the start of the web control plane. We migrated onto this Next.js platform, and I stayed through catalog, loyalty, claims, finance, seller migration, and production observability.",
          "The valuable unit of work was a vertical slice: implement the screen, integrate the API, wire permissions and country and distributor context, localize English and Portuguese in the same PR, then follow through on QA, empty states, and error states. I did that across Super Admin, user administration, customers, products and empties, distributors, Awoof, walk-in checkout, claims, finance, insights, seller migration, observability, and orders.",
          "The codebase is private. This is the public story.",
        ],
      },
      {
        title: "What shipped",
        paragraphs: [
          "One Next.js app, three shells, one design system. Super Admin console for countries, roles, and platform users. Admin backoffice for distributors, catalog, pricing, customers, claims, and app config. Distributor ERP for home, orders, walk-in sales, products, van warehouse, finance, claims, analytics, and settings.",
          "Personas include administrator, backoffice, BDR, driver, point of consumption, bulk breaker, and stockist. Sister apps — Shop, Drivers, Express — are gated per country; navigation hides what a market has not turned on. Locales are English and Portuguese. Nigeria plus Lusophone Africa share this codebase. i18n shipped in the same PR as the feature.",
          "Modules I took from empty page through API: Super Admin and user-admin (role change, suspend, permissions, assignment — one component family, many matrices); distributor home and inventory setup, the first-run after login; customers, products, and distributors at catalog scale; empties as first-class returnable SKUs; Awoof loyalty (redeemables, SKUs, approve/reject requests); walk-in checkout; claims with evidence and reject reasons; finance and insights; stockist-to-distributor migration; orders and cancelled deliveries.",
        ],
      },
      {
        title: "Frontend decisions",
        paragraphs: [
          "Next.js 14 App Router, React 18, TypeScript. Mantine 7 plus Tailwind brand tokens and a custom KJ atomic layer — buttons, tables, drawers, empty states — so eighty pages did not become eighty one-off screens. Axios into typed clients, React Query for server lists, Redux for session. React Hook Form and Zod with a shared form helper so dirty-state chrome is not reimplemented.",
          "Locale-first routing. Auth is not in middleware; i18n sits at the edge, session in the client after OAuth. Internal users go through Azure AD, external users through Azure AD B2C, both as redirect-based sign-in issued by the backend — not a client public app. Route groups keep full-bleed tables and padded forms on different shells without a layout flag on every page.",
          "Dual state on purpose. Session and draft UI persist (user, role, country, distributor, order draft). Server lists live in React Query and refetch. Failed ERP calls do not retry — duplicate posts and toast storms are worse than a manual retry. A one-minute stale time so tab switches do not hammer the API.",
          "Nav is data: permission modules plus remote app config for what exists in that country. A forbidden page covers deep links the nav hid. Heavy screens use a table-hook pattern instead of inlined columns, so ABI-specific cells (quantity steppers, address popovers, delivery method) stay possible without twenty copy-pasted grids.",
          "This is an authenticated operations tool. SEO does not matter. Drawers, multi-step claims, inventory steppers, and print/PDF do. Most trees are client components. Next.js is still the right host: App Router layouts, next-intl, images, standalone output for Kubernetes, and server-only embeds for analytics.",
        ],
      },
      {
        title: "Trade-offs",
        paragraphs: [
          "Mantine plus Tailwind plus SCSS was the fastest way to look like ABI and still get date pickers, notifications, and a theme. The cost is three sources of truth for color and radius. We accepted it to move.",
          "Redux persist plus React Query: session must survive refresh; lists should not. The overlap is real — some slices still hold data Query could own. Design-then-integrate made QA faster and produced mapping churn once the API arrived. I would still choose it for an ERP with slow backend lag; I would freeze ID contracts earlier.",
          "Table hooks over a generic data-grid library kept flexibility for ABI columns. Duplication is the bill — orders stayed a hotspot. Jest is installed; coverage is thin. Quality actually came from typed boundaries, lint-staged, QA environments, secure-scan, and Datadog. That is a real gap on an eighty-page ERP.",
        ],
      },
      {
        title: "Quality",
        paragraphs: [
          "Empty states as product — never a blank table. i18n in the same PR. Snackbar plus confirmation for destructive work. An action bar for dirty forms so users do not lose a claim or a user-admin change. Backend search and sort once a list left mock data. Observability that initializes once and identifies the company, not a ghost session from hot reload.",
          "Ship path is PR into DEV, QA, then production on Azure Kubernetes, with RUM and product analytics on the client.",
        ],
      },
      {
        title: "Result",
        paragraphs: [
          "A bilingual, permissioned, country-aware distributor ERP used by AB InBev Africa backoffice and distributors. Network admin, catalog (including empties), orders and walk-in, van warehouse, finance and claims, Awoof loyalty, analytics, and insights — on a KJ component system the rest of the frontend team builds on.",
          "What I left behind is not a theme. Super Admin and user-admin UX that still structures how internal teams operate the network. Empties and Awoof as full modules. Claims and seller-migration flows that are high-stakes. Tables and observability that match how distributors actually work.",
        ],
      },
      {
        title: "Next",
        paragraphs: [
          "One token pipeline so color and radius are not three files. Collapse redundant Redux into React Query plus a thin auth persist. A stronger shared table so domain hooks share sorting and pagination. Jest and Playwright around claims, migration, checkout, and inventory setup — the money paths. Keep the atomic KJ layer; it is the right abstraction for this domain.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
