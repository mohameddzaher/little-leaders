"use client";

export default function WaveDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ height: "60px", overflow: "hidden" }}
    >
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z"
          fill="currentColor"
          opacity="0.1"
        />
        <path
          d="M0,80 Q200,40 400,80 T800,80 T1200,80 L1200,120 L0,120 Z"
          fill="currentColor"
          opacity="0.08"
        />
        <path
          d="M0,100 Q250,60 500,100 T1000,100 L1200,100 L1200,120 L0,120 Z"
          fill="currentColor"
          opacity="0.06"
        />
      </svg>
    </div>
  );
}
