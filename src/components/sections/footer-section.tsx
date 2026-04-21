import { socialLinks } from "@/lib/course-content";

import { ButtonLink, Container, Reveal, SocialIconLink } from "@/components/ui";

export function FooterSection() {
  return (
    <footer className="pb-8 pt-10 sm:pt-14">
      <Reveal>
        <Container>
          <div className="motion-card mystic-panel rounded-[2.2rem] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-5">
                <p className="mystic-badge">
                  Онлайн-курс
                </p>
                <div className="space-y-3">
                  <p className="max-w-xl font-display text-3xl font-semibold tracking-[-0.04em] text-[rgba(255,236,217,0.98)] sm:text-4xl">
                    Программные свечи в глубокой, огненной и интуитивно ясной подаче.
                  </p>
                  <p className="max-w-2xl text-sm leading-7 text-[rgba(201,206,226,0.82)] sm:text-base">
                    Здесь всё выстроено так, чтобы атмосфера курса ощущалась сразу: огонь, намерение, тишина практики и понятный путь к действию.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:items-start lg:items-end">
                <ButtonLink href="#pricing">Выбрать тариф</ButtonLink>
                <ButtonLink href="#questions" variant="secondary">
                  Задать вопрос
                </ButtonLink>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <nav aria-label="Социальные сети" className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <SocialIconLink key={link.name} href={link.href} name={link.name} />
                ))}
              </nav>

              <p className="text-sm text-[rgba(156,196,244,0.82)]">© {new Date().getFullYear()} Онлайн-курс по программным свечам.</p>
            </div>
          </div>
        </Container>
      </Reveal>
    </footer>
  );
}
