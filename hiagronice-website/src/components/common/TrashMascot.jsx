export default function TrashMascot({ className = "w-40 h-40" }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* shadow */}
      <ellipse cx="100" cy="205" rx="55" ry="8" fill="#00000022" />
      {/* legs */}
      <rect x="70" y="170" width="14" height="28" rx="6" fill="#1F7A3D" />
      <rect x="116" y="170" width="14" height="28" rx="6" fill="#1F7A3D" />
      {/* body */}
      <rect x="45" y="70" width="110" height="110" rx="18" fill="#2FA84F" />
      <rect x="45" y="70" width="110" height="110" rx="18" fill="url(#bodyShine)" />
      {/* recycle-style arrows on chest */}
      <g transform="translate(100,120)" fill="none" stroke="#E7F8EC" strokeWidth="5" strokeLinecap="round">
        <path d="M-18,-4 A20,20 0 0,1 8,-16" />
        <path d="M14,-18 A20,20 0 0,1 18,10" />
        <path d="M12,14 A20,20 0 0,1 -16,10" />
        <polygon points="6,-20 16,-14 4,-10" fill="#E7F8EC" stroke="none" />
      </g>
      {/* lid */}
      <rect x="38" y="48" width="124" height="26" rx="10" fill="#1F7A3D" />
      <rect x="60" y="34" width="80" height="16" rx="8" fill="#1F7A3D" />
      {/* face */}
      <circle cx="80" cy="160" r="8" fill="#1B1B1B" />
      <circle cx="120" cy="160" r="8" fill="#1B1B1B" />
      <path d="M78,178 Q100,196 122,178" stroke="#1B1B1B" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* left arm - resting */}
      <path d="M45,120 Q20,130 22,155" stroke="#2FA84F" strokeWidth="12" fill="none" strokeLinecap="round" />
      <circle cx="22" cy="158" r="8" fill="#1F7A3D" />
      {/* right arm - waving */}
      <path d="M155,120 Q182,100 175,72" stroke="#2FA84F" strokeWidth="12" fill="none" strokeLinecap="round" />
      <circle cx="175" cy="70" r="8" fill="#1F7A3D" />
      <defs>
        <linearGradient id="bodyShine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}