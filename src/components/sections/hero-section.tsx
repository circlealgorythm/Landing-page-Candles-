import { heroContent } from "@/lib/course-content";

import { ButtonLink, Container } from "@/components/ui";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-border py-20 sm:py-24">
      <Container>
        <header className="max-w-3xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">{heroContent.eyebrow}</p>
          <div className="space-y-4">
            <h1 id="hero-title" className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {heroContent.title}
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">{heroContent.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={heroContent.primaryAction.href}>{heroContent.primaryAction.label}</ButtonLink>
            <ButtonLink href={heroContent.secondaryAction.href} variant="secondary">
              {heroContent.secondaryAction.label}
            </ButtonLink>
          </div>
        </header>
      </Container>
    </section>
  );
}
