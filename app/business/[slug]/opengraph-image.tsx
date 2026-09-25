import { ImageResponse } from "next/og";
import { getBusinessBySlug, getBusinessRank } from "@/lib/db/businesses";

export const alt = "ToolNest Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function BusinessOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const business = await getBusinessBySlug(slug);
  const metaLine = business
    ? [business.category, `Ranked #${await getBusinessRank(business)} this week`]
        .filter(Boolean)
        .join(" · ")
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4338ca 0%, #312e81 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 24,
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 56,
            }}
          >
            {business?.logo ?? "🏢"}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
              {business?.name ?? "Business"}
            </div>
            <div
              style={{
                marginTop: 14,
                fontSize: 24,
                opacity: 0.9,
              }}
            >
              {metaLine}
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            opacity: 0.9,
            maxWidth: 850,
            lineHeight: 1.5,
          }}
        >
          {business?.description ?? "Discover top businesses in India on ToolNest."}
        </div>
        <div style={{ marginTop: "auto", fontSize: 18, opacity: 0.6 }}>
          toolnest.in/business
        </div>
      </div>
    ),
    size
  );
}