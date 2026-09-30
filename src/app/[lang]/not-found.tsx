import React from "react";
import type { Metadata } from "next";
import NotFoundScreen from "@/components/NotFoundScreen";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary();

  return {
    ...pageMeta({
      title: dict.notFound.metaTitle,
      description: dict.notFound.metaDescription,
      path: "/404",
      locale,
    }),
    robots: { index: false, follow: true },
  };
}

export default async function NotFound() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return <NotFoundScreen locale={locale} dict={dict} />;
}
