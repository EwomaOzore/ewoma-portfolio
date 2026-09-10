import { ImageResponse } from "next/og";
import { caseStudies } from "@/constants/caseStudies";
import { workBySlug } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Case study — Ewoma Ozore";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function OpenGraphImage({ params }: Readonly<Props>) {
  const { slug } = await params;
  const work = workBySlug(slug);
  const name = work?.name ?? "Case study";
  const role = work && "role" in work ? work.role : "Selected work";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f4ef",
          color: "#141414",
          padding: "72px 80px",
        }}
      >
        <p
          style={{
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6b675e",
            margin: 0,
          }}
        >
          Case study · Ewoma Ozore
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              fontSize: 68,
              lineHeight: 0.95,
              margin: 0,
              fontFamily: "Georgia, serif",
              maxWidth: 960,
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontSize: 28,
              color: "#6b675e",
              marginTop: 24,
            }}
          >
            {role}
          </p>
        </div>
      </div>
    ),
    { ...size },
  );
}
