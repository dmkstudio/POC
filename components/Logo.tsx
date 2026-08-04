/**
 * The "POC" seal mark — a thin ring with the letterset inside, echoing the
 * browser-tab favicon (app/icon.svg) but spelled out as the full monogram.
 *
 * Rendered inline (not <img>) and coloured with currentColor so it inherits
 * the header's own colour logic: white text inverted by mix-blend-mode over
 * the hero photograph, then solid ivory once the header gets its background.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="22" cy="22" r="20.5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <text
        x="22"
        y="27"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="13"
        letterSpacing="2.5"
        fill="currentColor"
      >
        POC
      </text>
    </svg>
  );
}
