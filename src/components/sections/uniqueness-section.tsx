import { uniquenessItems } from "@/lib/course-content";

import { Container, Reveal, SectionHeading } from "@/components/ui";

export function UniquenessSection() {
  return (
    <section id="uniqueness" aria-labelledby="uniqueness-title" className="relative border-b border-white/10 py-20 lg:py-32">
      <div aria-hidden className="section-dust opacity-35" />
      <Reveal>
        <Container className="space-y-14">
          <SectionHeading
            id="uniqueness-title"
            eyebrow="Что внутри"
            title="Структура мистической практики"
            description="Курс соединяет несколько сильных направлений в одну стройную систему, чтобы работа со свечами была не хаотичной, а глубокой и осмысленной."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {uniquenessItems.map((item, index) => (
              <article
                key={item.title}
                className="group motion-card mystic-panel rounded-[1.9rem] p-6 sm:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-orange-200/12 via-white/5 to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />
                <div className="relative space-y-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-orange-200/20 bg-[linear-gradient(180deg,rgba(255,215,171,0.18),rgba(255,145,58,0.14))] text-orange-50 shadow-[0_10px_30px_rgba(251,139,36,0.14)] transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
                    <UniquenessIcon index={index} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[rgba(255,234,212,0.98)]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-[rgba(201,206,226,0.82)] sm:text-base">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Reveal>
    </section>
  );
}

type UniquenessIconProps = Readonly<{
  index: number;
}>;

function UniquenessIcon({ index }: UniquenessIconProps) {
  const commonProps = {
    "aria-hidden": true,
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.6,
    viewBox: "0 0 24 24"
  };

  if (index === 0) {
    return (
      <svg {...commonProps}>
        <path d="M12 3v18" />
        <path d="M8.5 6.5h7" />
        <path d="M7 11.5h10" />
        <path d="M8.5 16.5h7" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg {...commonProps}>
        <path d="m12 3 2.6 5.4L20 11l-4 3.9.9 5.6-4.9-2.7-4.9 2.7.9-5.6L4 11l5.4-2.6L12 3Z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M7.5 5.5h9" />
      <path d="M7.5 9.5h9" />
      <path d="M7.5 13.5h5" />
      <path d="M6 3.5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
    </svg>
  );
}
