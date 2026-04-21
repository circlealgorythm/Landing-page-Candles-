import { aboutContent } from "@/lib/course-content";

import { Container, Reveal, SectionHeading } from "@/components/ui";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative border-b border-white/10 py-20 lg:py-32">
      <Reveal>
        <Container className="space-y-14">
          <SectionHeading
            id="about-title"
            eyebrow="Кто ведёт курс"
            title="Проводник в практику"
            description="Курс ведёт практик, для которого важны не только рецепты, но и внутренний смысл каждой свечной работы."
          />

          <article className="motion-card mystic-panel rounded-[2.2rem] p-6 sm:p-8 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            <div className="space-y-5">
              <span className="mystic-badge">
                Практик и преподаватель
              </span>
              <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[rgba(255,236,217,0.98)] sm:text-4xl">
                {aboutContent.title}
              </h3>
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-[rgba(201,206,226,0.84)]">
                  {paragraph}
                </p>
              ))}
            </div>

            <aside
              aria-label="Преимущества обучения"
              className="mt-8 rounded-[1.85rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,163,76,0.08),rgba(24,38,70,0.22))] p-6 lg:mt-0"
            >
              <h4 className="font-display text-2xl font-semibold text-[rgba(255,236,217,0.96)]">Что вы получите на обучении</h4>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-[rgba(201,206,226,0.82)] sm:text-base">
                {aboutContent.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-orange-100 via-orange-300 to-sky-300 shadow-[0_0_18px_rgba(251,154,52,0.4)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 text-sm leading-7 text-[rgba(201,206,226,0.82)]">
                Подход курса строится на сочетании ясной теории, практики и материалов, к которым удобно возвращаться после обучения.
              </div>
            </aside>
          </article>
        </Container>
      </Reveal>
    </section>
  );
}
