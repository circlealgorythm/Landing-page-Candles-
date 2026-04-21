import { testimonials } from "@/lib/course-content";

import { Container, SectionHeading } from "@/components/ui";

export function TestimonialsSection() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="border-b border-border py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeading
          id="reviews-title"
          title="Отзывы"
          description="Несколько коротких впечатлений от учениц, которые уже прошли программу и применяют знания в практике."
        />

        <ul className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.author}>
              <article className="h-full rounded-2xl border border-border p-6">
                <blockquote className="space-y-4">
                  <p className="text-base leading-7 text-muted-foreground">“{testimonial.quote}”</p>
                  <footer className="text-sm">
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </footer>
                </blockquote>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
