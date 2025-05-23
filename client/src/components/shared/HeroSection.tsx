import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  children?: ReactNode;
  height?: "small" | "medium" | "large";
  breadcrumbs?: { label: string; link?: string }[];
  alignment?: "left" | "center" | "right";
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  children,
  height = "medium",
  breadcrumbs,
  alignment = "center",
}: HeroSectionProps) {
  const heightClass = {
    small: "h-64",
    medium: "h-96",
    large: "h-[500px]",
  }[height];

  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[alignment];

  return (
    <div className="relative">
      <div
        className={cn("bg-cover bg-center relative", heightClass)}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-dark/50"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className={cn("max-w-3xl", alignmentClass)}>
            <h1 className="text-white font-bold text-3xl md:text-5xl mb-4">{title}</h1>
            {subtitle && <p className="text-white/80 text-lg mb-8">{subtitle}</p>}
            
            {breadcrumbs && (
              <div className="flex items-center text-white/80 text-sm">
                {breadcrumbs.map((item, index) => (
                  <div key={index} className="flex items-center">
                    {index > 0 && <span className="mx-2">•</span>}
                    {item.link ? (
                      <a href={item.link} className="hover:text-white">
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-white">{item.label}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {children && (
            <div className={cn("mt-8 w-full max-w-4xl", alignment === "center" ? "mx-auto" : "")}>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
