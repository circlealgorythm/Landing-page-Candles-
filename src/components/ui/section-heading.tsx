import { cn } from "@/lib/cn";

type SectionHeadingProps = Readonly<{
  id?: string;
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
}>;

export function SectionHeading({
  id,
  title,
  description,
  eyebrow,
  align = "left"
}: SectionHeadingProps) {
  return (
    <header className={cn("space-y-3", align === "center" && "text-center")}>
      {eyebrow ? <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">{eyebrow}</p> : null}
      <div className="space-y-2">
        <h2 id={id} className="text-3xl font-semibold tracking-tight">
          {title}
        </h2>
        {description ? <p className="max-w-3xl text-base leading-7 text-muted-foreground">{description}</p> : null}
      </div>
    </header>
  );
}
