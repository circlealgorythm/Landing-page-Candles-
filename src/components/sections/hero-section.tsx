import { courseModules, heroContent, pricingPlans, uniquenessItems } from "@/lib/course-content";

import { ButtonLink, Container, Reveal } from "@/components/ui";

export function HeroSection() {
  const heroStats = [
    {
      value: `${courseModules.length}`,
      label: "модуля с логичной пошаговой подачей"
    },
    {
      value: `${uniquenessItems.length}`,
      label: "ключевых направления в одной системе"
    },
    {
      value: `${pricingPlans.length}`,
      label: "формата участия под ваш темп"
    }
  ];

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-white/10 py-20 sm:py-24 lg:py-32">
      <div aria-hidden className="section-dust opacity-40" />
      <div aria-hidden className="section-orbit -left-16 top-12 h-40 w-40 opacity-35" />
      <div aria-hidden className="section-orbit right-[-3rem] top-28 h-56 w-56 opacity-25" />
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="space-y-10">
          <header className="max-w-3xl space-y-8">
            <p className="mystic-badge">
              {heroContent.eyebrow}
            </p>
            <div className="space-y-5">
              <h1
                id="hero-title"
                className="max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[rgba(255,241,225,0.98)] sm:text-6xl lg:text-7xl"
              >
                {heroContent.title}
              </h1>
              <div className="ember-line max-w-36" />
              <p className="max-w-2xl text-base leading-8 text-[rgba(205,210,229,0.86)] sm:text-lg">
                {heroContent.description}
              </p>
            </div>
          </header>

          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={heroContent.primaryAction.href} className="w-full sm:w-auto">
              {heroContent.primaryAction.label}
            </ButtonLink>
            <ButtonLink href={heroContent.secondaryAction.href} variant="secondary" className="w-full sm:w-auto">
              {heroContent.secondaryAction.label}
            </ButtonLink>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="motion-card mystic-panel rounded-[1.7rem] p-5"
              >
                <p className="font-display text-4xl font-semibold tracking-[-0.05em] text-[rgba(255,232,205,0.98)]">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-[rgba(201,206,226,0.82)]">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative" delay={120}>
          <div className="absolute inset-0 translate-y-6 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,167,92,0.2),transparent_58%)] blur-3xl" />
          <article className="motion-card mystic-panel relative rounded-[2.2rem] p-6 sm:p-8">
            <div aria-hidden className="ritual-ring right-8 top-8 h-24 w-24 opacity-50" />
            <div aria-hidden className="ritual-ring bottom-8 left-6 h-20 w-20 opacity-30" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="relative space-y-4">
              <span className="mystic-badge">Фокус программы</span>
              <p className="max-w-md font-display text-3xl font-semibold tracking-[-0.04em] text-[rgba(255,238,217,0.98)] sm:text-4xl">
                От ритуальной базы к собственным свечам силы, очищения и намерения.
              </p>
              <p className="text-sm leading-7 text-[rgba(201,206,226,0.82)] sm:text-base">
                Всё выстроено так, чтобы знания ощущались как цельная практика: с логикой, символизмом и ясным ходом работы.
              </p>
            </div>

            <div className="relative mt-8 grid gap-3">
              {uniquenessItems.map((item, index) => (
                <div
                  key={item.title}
                  className="group motion-card flex items-center justify-between gap-4 rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-4 py-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-200/20 bg-[radial-gradient(circle,rgba(255,212,165,0.2),rgba(255,136,53,0.18))] text-sm font-semibold text-orange-50 transition-transform duration-300 group-hover:scale-105">
                      0{index + 1}
                    </div>
                    <p className="font-medium text-foreground">{item.title}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[rgba(156,196,244,0.82)]">Практика</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="motion-card rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,176,107,0.08),rgba(255,255,255,0.03))] p-5">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[rgba(255,215,183,0.92)]">Для кого курс</p>
                <p className="mt-2 text-sm leading-7 text-[rgba(201,206,226,0.82)]">
                  Для новичков и практиков, которым нужна ясная структура, уверенность и рабочая логика.
                </p>
              </div>
              <div className="motion-card rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(108,164,231,0.08),rgba(255,255,255,0.03))] p-5">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[rgba(196,225,255,0.9)]">Результат</p>
                <p className="mt-2 text-sm leading-7 text-[rgba(201,206,226,0.82)]">
                  Собственная база рецептов, понимание сочетаний и аккуратная практика без перегруза.
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
