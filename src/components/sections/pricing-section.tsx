import { pricingPlans } from "@/lib/course-content";

import { ButtonLink, Container, SectionHeading } from "@/components/ui";

export function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="border-b border-border py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeading
          id="pricing-title"
          title="Тарифы"
          description="Выберите формат участия в зависимости от того, нужен ли вам только доступ к материалам или сопровождение в процессе."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article key={plan.name} className="rounded-2xl border border-border p-6">
              <header className="space-y-3">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-3xl font-semibold">{plan.price}</p>
                <p className="text-sm leading-7 text-muted-foreground">{plan.description}</p>
              </header>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature} className="list-inside list-disc">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <ButtonLink href="#questions" variant="secondary">
                  Оставить заявку
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
