import { aboutContent } from "@/lib/course-content";

import { Container, SectionHeading } from "@/components/ui";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-b border-border py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeading id="about-title" title="Обо мне" />

        <article className="grid gap-8 rounded-2xl border border-border p-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">{aboutContent.title}</h3>
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <aside aria-label="Преимущества обучения" className="rounded-2xl border border-border p-5">
            <h4 className="text-lg font-semibold">Что вы получите на обучении</h4>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              {aboutContent.points.map((point) => (
                <li key={point} className="list-inside list-disc">
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        </article>
      </Container>
    </section>
  );
}
