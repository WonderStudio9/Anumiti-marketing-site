import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") ?? "Anumiti";
  const product = searchParams.get("product") as "kavach" | "netra" | null;

  const bgColor = product === "kavach" ? "#1A1A6C" : product === "netra" ? "#E8820C" : "#0A0F2C";
  const accentColor = "#00D4AA";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: bgColor,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: accentColor,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            marginBottom: 24,
          }}
        >
          {product === "kavach" ? "KAVACH कवच" : product === "netra" ? "NETRA नेत्र" : "ANUMITI अनुमिति"}
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.2,
            maxWidth: "900px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
            marginTop: 24,
          }}
        >
          anumiti.com — India&apos;s AI Infrastructure for Compliance &amp; Document Intelligence
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
