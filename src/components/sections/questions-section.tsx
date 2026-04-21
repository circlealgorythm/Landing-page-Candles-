import { ButtonLink, Container, SectionHeading, TextArea, TextInput } from "@/components/ui";

export function QuestionsSection() {
  return (
    <section id="questions" aria-labelledby="questions-title" className="border-b border-border py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeading
          id="questions-title"
          title="Есть вопросы?"
          description="Оставьте заявку, если хотите уточнить программу, подобрать тариф или узнать, подойдёт ли курс под ваш запрос."
        />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-4 rounded-2xl border border-border p-6">
            <h3 className="text-2xl font-semibold">Форма заявки</h3>
            <p className="text-sm leading-7 text-muted-foreground">
              Заполните поля ниже. Вы можете кратко описать свой запрос, и мы свяжемся с вами, чтобы помочь с выбором.
            </p>
            <ButtonLink href="#pricing" variant="secondary">
              Вернуться к тарифам
            </ButtonLink>
          </aside>

          <form className="space-y-5 rounded-2xl border border-border p-6">
            <TextInput id="name" name="name" label="Ваше имя" placeholder="Введите имя" autoComplete="name" />
            <TextInput
              id="contact"
              name="contact"
              label="Телефон или email"
              type="text"
              placeholder="Введите удобный способ связи"
              autoComplete="email"
            />
            <TextArea id="question" name="question" label="Ваш вопрос" placeholder="Напишите, что хотите уточнить" />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg border border-foreground bg-foreground px-5 py-3 text-sm font-medium text-background"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
