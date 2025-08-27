import React from 'react';

const SquareITLogo: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Orange square background */}
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        rx="8"
        fill="url(#gradient)"
        stroke="#f97316"
        strokeWidth="2"
      />
      
      {/* White "S" */}
      <path
        d="M25 35h20v8h-12v6h12v8h-20v-8h12v-6h-12v-8z"
        fill="white"
        strokeWidth="1"
      />
      
      {/* White "I" */}
      <path
        d="M55 35h10v22h-10v-22z"
        fill="white"
      />
      
      {/* White "T" */}
      <path
        d="M25 65h40v8h-16v14h-8v-14h-16v-8z"
        fill="white"
      />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SquareITLogo;