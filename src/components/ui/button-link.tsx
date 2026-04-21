import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonLinkProps = Readonly<{
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}>;

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "button-glow inline-flex min-h-[3.5rem] items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary" &&
          "border-orange-200/35 bg-[linear-gradient(135deg,rgba(255,230,188,0.98),rgba(255,180,92,0.98)_45%,rgba(246,106,36,0.98))] text-slate-950 shadow-[0_20px_50px_rgba(255,124,28,0.2)] hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(255,124,28,0.28)]",
        variant === "secondary" &&
          "border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] text-foreground backdrop-blur-xl hover:-translate-y-0.5 hover:border-sky-200/20 hover:bg-[linear-gradient(180deg,rgba(122,177,241,0.12),rgba(255,255,255,0.05))]",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
