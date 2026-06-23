import { Dog, Plus, Heart, Cat } from "lucide-react";

interface LogoProps {
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "horizontal" | "vertical" | "icon";
  lightText?: boolean;
}

export function LogoGrid({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const containerClasses = {
    sm: "w-8.5 h-8.5 gap-[2px]",
    md: "w-11.5 h-11.5 gap-[3.5px]",
    lg: "w-20 h-20 gap-[6px]",
  }[size];

  const iconClasses = {
    sm: "w-3.5 h-3.5 text-white",
    md: "w-5 h-5 text-white",
    lg: "w-9 h-9 text-white",
  }[size];

  return (
    <div className={`grid grid-cols-2 ${containerClasses} bg-transparent shrink-0`} id="logo-grid">
      {/* Top Left: Dog */}
      <div className="bg-[#f27a20] rounded-tl-[50%] rounded-tr-[15%] rounded-bl-[15%] rounded-br-[6%] flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm">
        <Dog className={iconClasses} strokeWidth={2} />
      </div>
      
      {/* Top Right: Plus */}
      <div className="bg-[#f27a20] rounded-tr-[50%] rounded-tl-[15%] rounded-br-[15%] rounded-bl-[6%] flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm">
        <Plus className={iconClasses} strokeWidth={3.5} />
      </div>

      {/* Bottom Left: Heart */}
      <div className="bg-[#f27a20] rounded-bl-[50%] rounded-tl-[15%] rounded-br-[15%] rounded-tr-[6%] flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm">
        <Heart className={`${iconClasses} fill-white`} strokeWidth={2} />
      </div>

      {/* Bottom Right: Cat */}
      <div className="bg-[#f27a20] rounded-br-[50%] rounded-bl-[15%] rounded-tr-[15%] rounded-tl-[6%] flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm">
        <Cat className={iconClasses} strokeWidth={2} />
      </div>
    </div>
  );
}

export default function Logo({
  showText = true,
  size = "md",
  variant = "horizontal",
  lightText = false,
}: LogoProps) {
  
  if (variant === "icon") {
    return <LogoGrid size={size} />;
  }

  const textGap = {
    sm: "gap-2",
    md: "gap-2.5",
    lg: "gap-4",
  }[size];

  const brandTextSize = {
    sm: "text-xl sm:text-2xl leading-none",
    md: "text-2xl sm:text-3xl leading-none",
    lg: "text-4xl sm:text-5xl leading-none",
  }[size];

  const subtitleTextSize = {
    sm: "text-[7.5px] tracking-[0.13em] mt-1",
    md: "text-[9.5px] tracking-[0.16em] mt-1.5",
    lg: "text-[14px] tracking-[0.2em] mt-2.5",
  }[size];

  const fullLogoLayout = variant === "vertical" 
    ? "flex flex-col items-center text-center gap-3"
    : `flex items-center ${textGap}`;

  return (
    <div className={`${fullLogoLayout} font-sans`} id="myvet-main-logo">
      <LogoGrid size={size} />
      
      {showText && (
        <div className="flex flex-col justify-center select-none text-left">
          <div className={`${brandTextSize} font-extrabold tracking-tighter flex items-center`}>
            <span className="text-[#f27a20]">my</span>
            <span className="text-[#0a9296]">vet</span>
          </div>
          <div className={`${subtitleTextSize} uppercase font-bold ${lightText ? "text-slate-400" : "text-[#4a4a4a]"} font-sans whitespace-nowrap`}>
            Centro Veterinário
          </div>
        </div>
      )}
    </div>
  );
}
