import type { IconProps } from "./techIcons";

/**
 * Google Gemini "spark" mark — 4-pointed star with concave sides.
 * Uses the Gemini brand gradient (blue → purple → magenta).
 */
export function Gemini({
  className,
  size,
  ...rest
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Gemini"
      {...rest}
    >
      <defs>
        <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9168F0" />
          <stop offset="100%" stopColor="#E94235" />
        </linearGradient>
      </defs>
      <path
        d="M12 0 C12.6 6.4 17.6 11.4 24 12 C17.6 12.6 12.6 17.6 12 24 C11.4 17.6 6.4 12.6 0 12 C6.4 11.4 11.4 6.4 12 0 Z"
        fill="url(#gemini-grad)"
      />
    </svg>
  );
}
