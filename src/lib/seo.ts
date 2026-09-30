import type { Metadata } from "next";
import { featuredWork, links, personalProjects } from "@/constants";
import { getCaseStudy } from "@/constants/caseStudies";
import {
  defaultLocale,
  hiringCountries,
  localize,
  localeMeta,
  type Locale,
} from "@/i18n/config";

export const siteName = "Ewoma Ozore";
export const siteUrl = links.site;
export const defaultTitle =
  "Ewoma Ozore — Senior Frontend & Mobile Engineer";
export const defaultDescription =
  "Senior frontend and mobile engineer. Case studies of React, React Native, and Next.js systems shipped to 1M+ people across web, iOS, and Android.";

export function canonicalUrl(path: string) {
  if (path === "/") return siteUrl;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}

function socialImage(path: string, alt: string) {
  const resolved = path === "/404" ? "/" : path;
  const imagePath =
    resolved === "/"
      ? "/opengraph-image"
      : `${resolved.replace(/\/$/, "")}/opengraph-image`;

  return {
    url: imagePath,
    width: 1200,
    height: 630,
    alt,
  };
}

export function languageAlternates(path: string) {
  return {
    en: canonicalUrl(localize("en", path)),
    es: canonicalUrl(localize("es", path)),
    fr: canonicalUrl(localize("fr", path)),
    de: canonicalUrl(localize("de", path)),
    "x-default": canonicalUrl(localize(defaultLocale, path)),
  };
}

export function pageMeta({
  title,
  description,
  path,
  locale = defaultLocale,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  type?: "website" | "article";
}): Metadata {
  const localizedPath = localize(locale, path);
  const url = canonicalUrl(localizedPath);
  const socialTitle = title.includes(siteName) ? title : `${title} — ${siteName}`;
  const image = socialImage(path === "/404" ? "/404" : path, socialTitle);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName,
      type,
      locale: localeMeta[locale].og,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image.url],
    },
  };
}

export function workBySlug(slug: string) {
  return (
    featuredWork.find((item) => item.slug === slug) ??
    personalProjects.find((item) => item.slug === slug)
  );
}

export function caseStudyMeta(
  slug: string,
  locale: Locale = defaultLocale,
  copy?: { title: string; description: string },
): Metadata {
  const study = getCaseStudy(slug);
  const work = workBySlug(slug);

  if (!study || !work) {
    return pageMeta({
      title: copy?.title ?? "Case study",
      description: copy?.description ?? defaultDescription,
      path: `/work/${slug}`,
      locale,
      type: "article",
    });
  }

  return pageMeta({
    title: copy?.title ?? `${work.name} — Case study`,
    description: copy?.description ?? study.lede,
    path: `/work/${slug}`,
    locale,
    type: "article",
  });
}

const postalAddress = {
  "@type": "PostalAddress",
  addressCountry: "NG",
};

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ewomaoghene Ozore",
    alternateName: "Ewoma Ozore",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    jobTitle: "Senior Frontend & Mobile Engineer",
    email: links.email,
    telephone: "+2348134970348",
    address: postalAddress,
    workLocation: {
      "@type": "Place",
      name: "Remote — Europe and English-speaking countries",
    },
    knowsLanguage: ["en", "es", "fr", "de"],
    sameAs: [links.github, links.linkedin],
    knowsAbout: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "Frontend engineering",
    ],
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ewoma Ozore — Frontend & Mobile Engineering",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    email: links.email,
    telephone: "+2348134970348",
    areaServed: hiringCountries.map((country) => ({
      "@type": "Country",
      name: country.en,
    })),
    availableLanguage: ["English", "Spanish", "French", "German"],
    address: postalAddress,
    founder: {
      "@type": "Person",
      name: "Ewomaoghene Ozore",
    },
    sameAs: [links.github, links.linkedin],
    description: defaultDescription,
    serviceType: [
      "Frontend engineering",
      "Mobile engineering",
      "React Native development",
    ],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ewoma Ozore — Frontend & Mobile Engineering",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    email: links.email,
    telephone: "+2348134970348",
    address: postalAddress,
    areaServed: hiringCountries.map((country) => ({
      "@type": "Country",
      name: country.en,
    })),
    sameAs: [links.github, links.linkedin],
    description: defaultDescription,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    inLanguage: ["en", "es", "fr", "de"],
    author: {
      "@type": "Person",
      name: "Ewomaoghene Ozore",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
  locale: Locale = defaultLocale,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(localize(locale, item.path)),
    })),
  };
}

export function caseStudyJsonLd(slug: string, locale: Locale = defaultLocale, description?: string) {
  const study = getCaseStudy(slug);
  const work = workBySlug(slug);
  if (!study || !work) return null;
  const path = localize(locale, `/work/${slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: work.name,
    description: description ?? study.lede,
    url: canonicalUrl(path),
    image: `${siteUrl}/work/${slug}/opengraph-image`,
    author: {
      "@type": "Person",
      name: "Ewomaoghene Ozore",
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Ewomaoghene Ozore",
      url: siteUrl,
    },
    mainEntityOfPage: canonicalUrl(path),
    inLanguage: locale,
  };
}
