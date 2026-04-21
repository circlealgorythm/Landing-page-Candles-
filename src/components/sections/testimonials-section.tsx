import { testimonials } from "@/lib/course-content";

import { Container, Reveal, SectionHeading } from "@/components/ui";

export function TestimonialsSection() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="relative border-b border-white/10 py-20 lg:py-32">
      <Reveal>
        <Container className="space-y-14">
          <SectionHeading
            id="reviews-title"
            eyebrow="Отзывы учениц"
            title="Голоса после практики"
            description="Впечатления учениц, у которых работа со свечами стала увереннее, глубже и намного более осмысленной."
          />

          <ul className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <li key={testimonial.author}>
                <article className="motion-card mystic-panel h-full rounded-[1.9rem] p-6 sm:p-8">
                  <blockquote className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[1.15rem] border border-orange-200/20 bg-[linear-gradient(180deg,rgba(255,215,171,0.18),rgba(255,145,58,0.14))] text-2xl text-orange-50 transition-transform duration-300 hover:scale-105">
                      “
                    </div>
                    <p className="text-base leading-8 text-[rgba(201,206,226,0.84)]">“{testimonial.quote}”</p>
                    <footer className="border-t border-white/10 pt-4 text-sm">
                      <p className="font-display text-2xl font-semibold text-[rgba(255,236,217,0.96)]">{testimonial.author}</p>
                      <p className="text-[rgba(156,196,244,0.82)]">{testimonial.role}</p>
                    </footer>
                  </blockquote>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </Reveal>
    </section>
  );
}
