This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Portfolio content

- Experience dates and titles follow the supplied September 2026 résumé, with the owner's confirmation that MTN, Justrite, and AB InBev contracts remain ongoing. Concurrent dates represent contract engagements.
- The downloadable résumé preserves the supplied document's body, updating contract labels and ongoing dates. The original in Downloads is unchanged.
- Homepage highlights describe delivery evidence. Restore usage or improvement figures only with the project, measurement period, definition, and individual contribution documented.
- English is the working language. French, German, and Spanish are site translations; technical case-study bodies and summaries remain English.
- `/en` is an accessible alias with a canonical URL of `/`. Do not redirect it back to `/` in the proxy: an internal English rewrite can re-enter the proxy and loop.

To verify a production preview, run `npm run build -- --webpack`, then `npm run start -- --hostname 127.0.0.1 --port 3100` and `node scripts/check-preview.mjs`. The webpack option is useful in environments where Turbopack's worker cannot bind a port.
