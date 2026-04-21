import { socialLinks } from "@/lib/course-content";

import { Container, SocialIconLink } from "@/components/ui";

export function FooterSection() {
  return (
    <footer className="py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-base font-semibold">Онлайн-курс по программным свечам</p>
          <p className="text-sm text-muted-foreground">Все материалы, тексты и структура страницы подготовлены как базовый каркас лендинга.</p>
        </div>

        <nav aria-label="Социальные сети" className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <SocialIconLink key={link.name} href={link.href} name={link.name} />
          ))}
        </nav>
      </Container>
    </footer>
  );
}
