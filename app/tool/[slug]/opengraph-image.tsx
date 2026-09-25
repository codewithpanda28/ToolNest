import { ImageResponse } from "next/og";
import { getToolBySlug, getToolRank } from "@/lib/db/tools";

export const alt = "ToolNest Tool";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ToolOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);
  const metaLine = tool
    ? [
        tool.category,
        tool.pricing
          ? tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)
          : "",
        `Ranked #${await getToolRank(tool)}`,
      ]
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
            {tool?.logo ?? "🛠️"}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
              {tool?.name ?? "Tool"}
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
          {tool?.description ?? "Discover the best tools for freelancers and businesses on ToolNest."}
        </div>
        <div style={{ marginTop: "auto", fontSize: 18, opacity: 0.6 }}>
          toolnest.in/tool
        </div>
      </div>
    ),
    size
  );
}