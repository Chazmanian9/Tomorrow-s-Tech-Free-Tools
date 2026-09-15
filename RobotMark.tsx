export function RobotMark({ className = '', animated = false }: { className?: string; animated?: boolean }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* antenna */}
      <line x1="32" y1="4" x2="32" y2="11" stroke="#4FC3F7" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="3" r="2.5" fill="#4FC3F7" className={animated ? 'animate-pulse' : ''} />

      {/* head */}
      <rect x="14" y="12" width="36" height="30" rx="10" stroke="#4FC3F7" strokeWidth="2.5" />

      {/* eyes */}
      <circle cx="25" cy="27" r="4.5" fill="#4FC3F7" />
      <circle cx="39" cy="27" r="4.5" fill="#4FC3F7" />

      {/* smile */}
      <path d="M25 34 Q32 38 39 34" stroke="#4FC3F7" strokeWidth="2.5" strokeLinecap="round" />

      {/* ears */}
      <rect x="8" y="21" width="5" height="12" rx="2.5" stroke="#4FC3F7" strokeWidth="2.5" />
      <rect x="51" y="21" width="5" height="12" rx="2.5" stroke="#4FC3F7" strokeWidth="2.5" />

      {/* body hint */}
      <path d="M22 42 L20 52 Q20 56 24 56 H40 Q44 56 44 52 L42 42" stroke="#4FC3F7" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}
