import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonLinkProps = Readonly<{
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}>;

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg border px-5 py-3 text-sm font-medium transition-colors",
        variant === "primary" && "border-foreground bg-foreground text-background",
        variant === "secondary" && "border-border bg-transparent text-foreground"
      )}
    >
      {children}
    </Link>
  );
}
