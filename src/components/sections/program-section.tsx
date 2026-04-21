import { courseModules } from "@/lib/course-content";

import { Container, SectionHeading } from "@/components/ui";

export function ProgramSection() {
  return (
    <section id="program" aria-labelledby="program-title" className="border-b border-border py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeading
          id="program-title"
          title="Программа курса"
          description="Курс разбит на модули, чтобы вы шаг за шагом прошли путь от базы к самостоятельному созданию рецептов."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {courseModules.map((module) => (
            <article key={module.title} className="rounded-2xl border border-border p-6">
              <h3 className="text-xl font-semibold">{module.title}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                {module.items.map((item) => (
                  <li key={item} className="list-inside list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
