import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            background: "linear-gradient(to bottom right, #1e293b, #334155)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/og-image.png"
            alt="CreolePro Logo"
            width={400}
            height={400}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error(e);
    return new Response(`Failed to generate image: ${e.message}`, {
      status: 500,
    });
  }
}
