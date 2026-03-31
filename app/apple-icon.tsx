import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const NAVY = "#0A0F2C";
const TEAL = "#00D4AA";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: NAVY,
          borderRadius: 36,
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70 22 L70 98"
            stroke={TEAL}
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <path
            d="M70 40 Q38 38 38 60 Q38 82 60 82 Q70 82 70 72"
            stroke={TEAL}
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="42" cy="30" r="4" fill={TEAL} />
        </svg>
      </div>
    ),
    { ...size }
  );
}
