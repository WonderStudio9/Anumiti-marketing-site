'use client';

import { useState, useEffect } from 'react';

type LogoVariant = 'full' | 'icon' | 'footer' | 'favicon';
type LogoTheme = 'dark' | 'light';

interface AnumitiLogoProps {
  /** Size of the icon in pixels */
  size?: number;
  /** full = icon+wordmark, icon = mark only, footer = icon+wordmark+sanskrit, favicon = simplified mark */
  variant?: LogoVariant;
  /** Play draw animation on mount */
  animated?: boolean;
  /** dark = white wordmark, light = dark wordmark */
  theme?: LogoTheme;
  /** Additional className */
  className?: string;
}

const NAVY = '#0A0F2C';
const TEAL = '#00D4AA';

export function AnumitiLogo({
  size = 40,
  variant = 'full',
  animated = true,
  theme = 'dark',
  className,
}: AnumitiLogoProps) {
  const [drawn, setDrawn] = useState(!animated);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (animated) {
      const t = setTimeout(() => setDrawn(true), 80);
      return () => clearTimeout(t);
    }
  }, [animated]);

  const textColor = theme === 'dark' ? '#FFFFFF' : NAVY;
  const mutedColor = theme === 'dark' ? '#8A94A6' : '#5A6478';
  const iconOnly = variant === 'icon' || variant === 'favicon';
  const isFavicon = variant === 'favicon';

  // Favicon uses thicker strokes, no inner hook
  const mastW = isFavicon ? '5.5' : '4';
  const bodyW = isFavicon ? '5' : '3.5';
  const hookOpacity = isFavicon ? 0 : 0.55;
  const dotR = isFavicon ? '4' : '3.2';

  const transition = (delay: number) =>
    `stroke-dashoffset ${0.5}s cubic-bezier(0.34,1.56,0.64,1) ${delay}s, opacity 0.4s ease ${delay}s`;

  return (
    <span
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size * 0.28,
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Anumiti logo"
        role="img"
        style={{
          transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          flexShrink: 0,
        }}
      >
        <defs>
          <filter id="anumiti-glow">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background circle */}
        <circle
          cx="60" cy="60" r="56" fill={NAVY}
          style={{ opacity: drawn ? 1 : 0, transition: 'opacity 0.3s ease' }}
        />

        <g
          style={{ filter: hovered ? 'url(#anumiti-glow)' : 'none' }}
        >
          {/* Vertical mast */}
          <path
            d="M70 22 L70 98"
            stroke={TEAL}
            strokeWidth={mastW}
            strokeLinecap="round"
            style={{
              strokeDasharray: 76,
              strokeDashoffset: drawn ? 0 : 76,
              transition: transition(0.15),
            }}
          />

          {/* Outer curve */}
          <path
            d="M70 40 Q38 38 38 60 Q38 82 60 82 Q70 82 70 72"
            stroke={TEAL}
            strokeWidth={bodyW}
            strokeLinecap="round"
            fill="none"
            style={{
              strokeDasharray: 110,
              strokeDashoffset: drawn ? 0 : 110,
              transition: transition(0.4),
            }}
          />

          {/* Inner hook (hidden at favicon size) */}
          {!isFavicon && (
            <path
              d="M70 54 Q56 54 54 63 Q52 72 62 72"
              stroke={TEAL}
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity={hookOpacity}
              style={{
                strokeDasharray: 46,
                strokeDashoffset: drawn ? 0 : 46,
                transition: transition(0.75),
              }}
            />
          )}
        </g>

        {/* Anusvara dot */}
        <circle
          cx="42" cy="30" r={drawn ? Number(dotR) : 0}
          fill={TEAL}
          style={{
            transition: `r 0.3s cubic-bezier(0.34,1.56,0.64,1) 1s, opacity 0.3s ease 1s`,
            opacity: drawn ? 1 : 0,
          }}
        />
      </svg>

      {/* Wordmark */}
      {!iconOnly && (
        <span
          style={{
            display: 'flex',
            flexDirection: 'column',
            opacity: drawn ? 1 : 0,
            transform: drawn ? 'translateX(0)' : 'translateX(-4px)',
            transition: 'opacity 0.4s ease 0.5s, transform 0.4s ease 0.5s',
          }}
        >
          <span
            style={{
              fontSize: size * 0.55,
              fontWeight: 500,
              fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
              color: textColor,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            anumiti
          </span>
          {variant === 'footer' && (
            <span
              style={{
                fontSize: size * 0.22,
                fontWeight: 400,
                fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
                color: mutedColor,
                letterSpacing: '0.06em',
                marginTop: 1,
              }}
            >
              अनुमिति
            </span>
          )}
        </span>
      )}
    </span>
  );
}

export default AnumitiLogo;
