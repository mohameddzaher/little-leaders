'use client';

export default function ShapeDivider({ className = '', position = 'bottom' }: { className?: string; position?: 'top' | 'bottom' }) {
  return (
    <div className={`absolute ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 w-full ${className}`} style={{ height: '80px', overflow: 'hidden' }}>
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Multiple layered waves for creative effect */}
        <path
          d="M0,80 L0,40 Q180,20 360,40 T720,40 T1080,40 T1440,40 L1440,80 Z"
          fill="currentColor"
          opacity="0.15"
        />
        <path
          d="M0,80 L0,50 Q200,30 400,50 T800,50 T1200,50 L1440,50 L1440,80 Z"
          fill="currentColor"
          opacity="0.12"
        />
        <path
          d="M0,80 L0,60 Q160,45 320,60 T640,60 T960,60 T1280,60 L1440,60 L1440,80 Z"
          fill="currentColor"
          opacity="0.1"
        />
        <path
          d="M0,80 L0,70 Q140,65 280,70 T560,70 T840,70 T1120,70 L1440,70 L1440,80 Z"
          fill="currentColor"
          opacity="0.08"
        />
      </svg>
    </div>
  );
}

