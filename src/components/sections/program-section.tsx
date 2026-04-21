import { courseModules } from "@/lib/course-content";

import { Container, Reveal, SectionHeading } from "@/components/ui";

export function ProgramSection() {
  return (
    <section id="program" aria-labelledby="program-title" className="relative border-b border-white/10 py-20 lg:py-32">
      <div aria-hidden className="section-orbit left-[-5rem] top-16 h-40 w-40 opacity-25" />
      <Reveal>
        <Container className="space-y-14">
          <SectionHeading
            id="program-title"
            eyebrow="Пошаговая программа"
            title="Путь через четыре круга практики"
            description="Каждый модуль раскрывает новый слой работы: от безопасной базы до уверенного создания собственных свечей под конкретные намерения."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {courseModules.map((module, index) => (
              <article
                key={module.title}
                className="group motion-card mystic-panel rounded-[1.9rem] p-6 sm:p-8"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(202,221,245,0.82)]">
                      Модуль {index + 1}
                    </span>
                    <span className="font-display text-xl text-[rgba(255,202,155,0.8)]">0{index + 1}</span>
                  </div>
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[rgba(255,236,217,0.98)]">
                    {module.title}
                  </h3>
                </div>

                <ul className="mt-6 space-y-4 text-sm leading-7 text-[rgba(201,206,226,0.82)] sm:text-base">
                  {module.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-orange-100 via-orange-300 to-sky-300 shadow-[0_0_18px_rgba(251,154,52,0.4)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
