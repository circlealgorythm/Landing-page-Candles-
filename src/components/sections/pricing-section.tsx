import { pricingPlans } from "@/lib/course-content";

import { ButtonLink, Container, Reveal, SectionHeading } from "@/components/ui";

export function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative border-b border-white/10 py-20 lg:py-32">
      <Reveal>
        <Container className="space-y-14">
          <SectionHeading
            id="pricing-title"
            eyebrow="Форматы участия"
            title="Выберите глубину погружения"
            description="Можно начать с самостоятельного ритма, взять сопровождение или пойти в более глубокую личную работу с разбором ваших свечных схем."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => {
              const isFeatured = index === 1;

              return (
                <article
                  key={plan.name}
                  className={[
                    "motion-card relative flex h-full flex-col overflow-hidden rounded-[2rem] p-6 backdrop-blur-xl sm:p-8",
                    isFeatured
                      ? "mystic-panel border-orange-200/25 bg-[linear-gradient(180deg,rgba(255,186,125,0.15),rgba(255,255,255,0.05)_55%,rgba(124,176,238,0.06))] shadow-[0_28px_80px_rgba(251,139,36,0.14)]"
                      : "mystic-panel hover:border-white/20"
                  ].join(" ")}
                >
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                  <header className="relative space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[rgba(255,236,217,0.98)]">
                        {plan.name}
                      </h3>
                      <span
                        className={[
                          "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]",
                          isFeatured
                            ? "border border-orange-200/25 bg-orange-100/10 text-orange-50"
                            : "border border-white/10 bg-white/[0.05] text-[rgba(202,221,245,0.82)]"
                        ].join(" ")}
                      >
                        {isFeatured ? "Популярный" : "Формат"}
                      </span>
                    </div>
                    <p className="font-display text-5xl font-semibold tracking-[-0.05em] text-[rgba(255,232,205,0.98)]">{plan.price}</p>
                    <p className="text-sm leading-7 text-[rgba(201,206,226,0.82)] sm:text-base">{plan.description}</p>
                  </header>

                  <ul className="mt-8 flex-1 space-y-4 text-sm leading-7 text-[rgba(201,206,226,0.82)] sm:text-base">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-orange-100 via-orange-300 to-sky-300 shadow-[0_0_18px_rgba(251,154,52,0.4)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <ButtonLink href="#questions" variant={isFeatured ? "primary" : "secondary"} className="w-full">
                      Оставить заявку
                    </ButtonLink>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
