import React from "react";

interface PawPrintBackgroundProps {
  variant?: "light" | "dark" | "teal" | "hero-teal" | "orange";
}

// Elegant custom vector paw print
const PawPrintIcon = ({ variant = "light" }: { variant?: "light" | "dark" | "teal" | "hero-teal" | "orange" }) => {
  let colorClass = "text-slate-400/80";
  if (variant === "teal") {
    colorClass = "text-teal-600/80";
  } else if (variant === "orange") {
    colorClass = "text-[#E87800]/80";
  } else if (variant === "hero-teal") {
    colorClass = "text-teal-600";
  } else if (variant === "dark") {
    colorClass = "text-white/55";
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-full h-full ${colorClass} transition-colors duration-300`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Toes (4 outer pads) */}
      <circle cx="6.5" cy="9.5" r="2" />
      <circle cx="10" cy="6.5" r="2" />
      <circle cx="14" cy="6.5" r="2" />
      <circle cx="17.5" cy="9.5" r="2" />
      
      {/* Main central pad */}
      <path
        d="M12 11.5c-2.2 0-3.5 1.2-3.5 3 0 2.2 1.3 3.5 3.5 3.5s3.5-1.3 3.5-3.5c0-1.8-1.3-3-3-3z"
      />
    </svg>
  );
};

interface PawConfig {
  id: number;
  top: string;
  left: string;
  size: string; // in px
  delay: string; // in seconds
  rotation: string; // e.g. "15deg"
  desktopOnly?: boolean;
}

// Ambient drift paws
const pawPrints: PawConfig[] = [
  {
    id: 1,
    top: "12%",
    left: "5%",
    size: "60px",
    delay: "0s",
    rotation: "-12deg"
  },
  {
    id: 2,
    top: "32%",
    left: "88%",
    size: "70px",
    delay: "3s",
    rotation: "18deg"
  },
  {
    id: 3,
    top: "58%",
    left: "4%",
    size: "52px",
    delay: "1.5s",
    rotation: "8deg"
  },
  {
    id: 4,
    top: "78%",
    left: "85%",
    size: "64px",
    delay: "4.5s",
    rotation: "-15deg"
  },
  // Desktop-only ambient prints
  {
    id: 5,
    top: "22%",
    left: "22%",
    size: "54px",
    delay: "2.2s",
    rotation: "25deg",
    desktopOnly: true
  },
  {
    id: 6,
    top: "48%",
    left: "75%",
    size: "62px",
    delay: "0.8s",
    rotation: "-8deg",
    desktopOnly: true
  },
  {
    id: 7,
    top: "85%",
    left: "15%",
    size: "58px",
    delay: "3.8s",
    rotation: "-20deg",
    desktopOnly: true
  },
  {
    id: 8,
    top: "68%",
    left: "35%",
    size: "50px",
    delay: "5.5s",
    rotation: "15deg",
    desktopOnly: true
  }
];

// Staggered interactive walking steps
interface WalkStep {
  id: number;
  top: string;
  left: string;
  size: string;
  rotation: string;
  delay: string; // Animation delay to staggered show
  desktopOnly?: boolean;
}

// Trail 1: Elegant walking steps down the left side, framing the content
const trailLeftToCenter: WalkStep[] = [
  { id: 101, top: "6%", left: "6%", size: "44px", rotation: "35deg", delay: "0.0s" },
  { id: 102, top: "14%", left: "10%", size: "44px", rotation: "20deg", delay: "0.4s" },
  { id: 103, top: "22%", left: "5%", size: "44px", rotation: "38deg", delay: "0.8s" },
  { id: 104, top: "30%", left: "9%", size: "44px", rotation: "25deg", delay: "1.2s" },
  { id: 105, top: "38%", left: "4%", size: "44px", rotation: "40deg", delay: "1.6s" },
];

// Trail 2: Elegant walking steps down the right side, framing the content
const trailRightToBottom: WalkStep[] = [
  { id: 201, top: "52%", left: "90%", size: "44px", rotation: "-145deg", delay: "0.5s" },
  { id: 202, top: "60%", left: "84%", size: "44px", rotation: "-160deg", delay: "0.9s" },
  { id: 203, top: "68%", left: "89%", size: "44px", rotation: "-135deg", delay: "1.3s" },
  { id: 204, top: "76%", left: "83%", size: "44px", rotation: "-150deg", delay: "1.7s" },
  { id: 205, top: "84%", left: "88%", size: "44px", rotation: "-140deg", delay: "2.1s" },
];

export default function PawPrintBackground({ variant = "light" }: PawPrintBackgroundProps) {
  // Select maximum opacity depending on the background style
  const minOpacity = variant === "dark" ? "0.12" : "0.10";
  const maxOpacity = variant === "teal" ? "0.55" : variant === "orange" ? "0.28" : variant === "dark" ? "0.45" : variant === "hero-teal" ? "0.35" : "0.45";

  return (
    <>
      <style>{`
        @keyframes subtleDrift {
          0% {
            transform: translateY(0px) rotate(var(--base-rot)) scale(1);
            opacity: ${minOpacity};
          }
          50% {
            transform: translateY(-16px) rotate(calc(var(--base-rot) + 5deg)) scale(1.06);
            opacity: ${maxOpacity};
          }
          100% {
            transform: translateY(0px) rotate(var(--base-rot)) scale(1);
            opacity: ${minOpacity};
          }
        }
        @keyframes pawWalkSequence {
          0% {
            opacity: ${minOpacity};
            transform: scale(0.9) rotate(var(--rot));
          }
          15% {
            opacity: ${maxOpacity};
            transform: scale(1.05) rotate(var(--rot));
          }
          55% {
            opacity: ${maxOpacity};
            transform: scale(1) rotate(var(--rot));
          }
          80%, 100% {
            opacity: ${minOpacity};
            transform: scale(0.9) rotate(var(--rot));
          }
        }
        .animate-subtle-paw {
          animation: subtleDrift 5s ease-in-out infinite;
        }
        .animate-paw-walk {
          animation: pawWalkSequence 3.5s ease-in-out infinite;
        }
      `}</style>
      <div 
        className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden" 
        id="paw-prints-ambient-layer"
      >
        {/* Render drifting background paw prints */}
        {pawPrints.map((paw) => (
          <div
            key={paw.id}
            className={`absolute animate-subtle-paw ${
              paw.desktopOnly ? "hidden lg:block" : "block"
            }`}
            style={{
              top: paw.top,
              left: paw.left,
              width: paw.size,
              height: paw.size,
              animationDelay: paw.delay,
              ["--base-rot" as any]: paw.rotation,
            }}
          >
            <PawPrintIcon variant={variant} />
          </div>
        ))}

        {/* Trail 1: Staggered sequential steps left-to-right */}
        {trailLeftToCenter.map((step) => (
          <div
            key={step.id}
            className={`absolute animate-paw-walk ${
              step.desktopOnly ? "hidden lg:block" : "block"
            }`}
            style={{
              top: step.top,
              left: step.left,
              width: step.size,
              height: step.size,
              animationDelay: step.delay,
              ["--rot" as any]: step.rotation,
            }}
          >
            <PawPrintIcon variant={variant} />
          </div>
        ))}

        {/* Trail 2: Staggered sequential steps right-to-left */}
        {trailRightToBottom.map((step) => (
          <div
            key={step.id}
            className={`absolute animate-paw-walk ${
              step.desktopOnly ? "hidden lg:block" : "block"
            }`}
            style={{
              top: step.top,
              left: step.left,
              width: step.size,
              height: step.size,
              animationDelay: step.delay,
              ["--rot" as any]: step.rotation,
            }}
          >
            <PawPrintIcon variant={variant} />
          </div>
        ))}
      </div>
    </>
  );
}
