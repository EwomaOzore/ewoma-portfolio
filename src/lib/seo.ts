import type { Metadata } from "next";
import { featuredWork, links, personalProjects } from "@/constants";
import { getCaseStudy } from "@/constants/caseStudies";

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

export function pageMeta({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = canonicalUrl(path);
  const socialTitle = title.includes(siteName) ? title : `${title} — ${siteName}`;
  const image = socialImage(path, socialTitle);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName,
      type,
      locale: "en_US",
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

export function caseStudyMeta(slug: string): Metadata {
  const study = getCaseStudy(slug);
  const work = workBySlug(slug);

  if (!study || !work) {
    return pageMeta({
      title: "Case study",
      description: defaultDescription,
      path: `/work/${slug}`,
      type: "article",
    });
  }

  return pageMeta({
    title: `${work.name} — Case study`,
    description: study.lede,
    path: `/work/${slug}`,
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
      name: "Remote — worldwide",
    },
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
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    availableLanguage: "English",
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
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
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
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: "Ewomaoghene Ozore",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function caseStudyJsonLd(slug: string) {
  const study = getCaseStudy(slug);
  const work = workBySlug(slug);
  if (!study || !work) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: work.name,
    description: study.lede,
    url: canonicalUrl(`/work/${slug}`),
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
    mainEntityOfPage: canonicalUrl(`/work/${slug}`),
    inLanguage: "en",
  };
}
