import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/content/blog";

export const alt = "ToolNest Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function BlogOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              padding: "8px 20px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.15)",
            }}
          >
            {post?.category ?? "Blog"} · {post?.readingTime ?? 5} min read
          </span>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: 950,
          }}
        >
          {post?.title ?? "ToolNest Blog"}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 22,
            opacity: 0.9,
            maxWidth: 850,
            lineHeight: 1.5,
          }}
        >
          {post?.excerpt ?? "Guides and insights for Indian freelancers and businesses."}
        </div>
        <div style={{ marginTop: "auto", fontSize: 18, opacity: 0.6 }}>
          toolnest.in/blog
        </div>
      </div>
    ),
    size
  );
}