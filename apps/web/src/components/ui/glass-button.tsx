import React from "react";
import { cn } from "@/lib/utils";

interface GlassButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

export function GlassButton({ children, className, ...props }: GlassButtonProps) {
  return (
    <a
      {...props}
      className={cn(
        // Base layout
        "relative inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl",
        // Glass background
        "bg-white/[0.06] backdrop-blur-md",
        // Border: thin top highlight + subtle overall border
        "border border-white/[0.15]",
        // Top edge highlight via pseudo box-shadow
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),0_4px_24px_rgba(0,0,0,0.25)]",
        // Text
        "text-white no-underline select-none",
        // Transition
        "transition-all duration-200 ease-out",
        // Hover: lift + brighten glass
        "hover:bg-white/[0.12] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_8px_32px_rgba(0,0,0,0.3)]",
        // Active
        "active:translate-y-0 active:bg-white/[0.08]",
        // Cursor
        "cursor-pointer",
        className
      )}
    >
      {/* Inner gradient sheen */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
        }}
      />
      {children}
    </a>
  );
}
