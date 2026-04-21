import { uniquenessItems } from "@/lib/course-content";

import { Container, SectionHeading } from "@/components/ui";

export function UniquenessSection() {
  return (
    <section id="uniqueness" aria-labelledby="uniqueness-title" className="border-b border-border py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeading
          id="uniqueness-title"
          title="Уникальность курса"
          description="Курс собран вокруг практических направлений, которые редко встречаются вместе в одной понятной системе."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {uniquenessItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
