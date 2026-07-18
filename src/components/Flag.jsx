// Drapeaux en SVG inline : s'affichent identiquement sur tous les OS,
// y compris Windows (qui ne rend pas les emojis drapeaux 🇫🇷/🇬🇧).

const flags = {
  FR: (
    <g>
      <rect width="8" height="16" x="0" fill="#0055A4" />
      <rect width="8" height="16" x="8" fill="#fff" />
      <rect width="8" height="16" x="16" fill="#EF4135" />
    </g>
  ),
  GB: (
    <g>
      <rect width="24" height="16" fill="#012169" />
      <path d="M0,0 L24,16 M24,0 L0,16" stroke="#fff" strokeWidth="3.2" />
      <path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" strokeWidth="1.9" />
      <path d="M12,0 V16 M0,8 H24" stroke="#fff" strokeWidth="5.4" />
      <path d="M12,0 V16 M0,8 H24" stroke="#C8102E" strokeWidth="3.2" />
    </g>
  ),
}

export default function Flag({ country, size = 20, title }) {
  return (
    <svg
      viewBox="0 0 24 16"
      width={size}
      height={size * (16 / 24)}
      role="img"
      aria-label={title || country}
      style={{ borderRadius: 3, display: 'block', boxShadow: '0 0 0 1px rgba(0,0,0,0.08)' }}
    >
      {title ? <title>{title}</title> : null}
      <clipPath id={`fc-${country}`}>
        <rect width="24" height="16" rx="2" />
      </clipPath>
      <g clipPath={`url(#fc-${country})`}>{flags[country] || flags.FR}</g>
    </svg>
  )
}
