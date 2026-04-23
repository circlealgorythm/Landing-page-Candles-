import { ButtonLink, Container, Reveal, SectionHeading, TextArea, TextInput } from "@/components/ui";

export function QuestionsSection() {
  return (
    <section id="questions" aria-labelledby="questions-title" className="relative border-b border-white/10 py-20 lg:py-32">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(8,10,20,0.99) 0%, rgba(8,10,20,0.97) 18%, rgba(8,10,20,0.86) 34%, rgba(8,10,20,0.58) 52%, rgba(8,10,20,0.24) 70%, rgba(8,10,20,0.14) 100%), linear-gradient(180deg, rgba(7,9,18,0.34), rgba(7,9,18,0.12) 28%, rgba(7,9,18,0.36) 100%), url('/images/form.png')",
          backgroundPosition: "center, center, center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%, 100% 100%, cover",
          maskImage:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.94) 8%, rgba(0,0,0,1) 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.94) 8%, rgba(0,0,0,1) 90%, transparent 100%)"
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 68% 42%, rgba(255,149,72,0.22) 0%, rgba(255,149,72,0.11) 18%, rgba(255,149,72,0.03) 34%, transparent 54%), radial-gradient(circle at 84% 28%, rgba(255,161,89,0.12) 0%, rgba(255,161,89,0.04) 18%, transparent 40%), linear-gradient(90deg, rgba(8,10,20,0.08) 0%, rgba(8,10,20,0.18) 24%, rgba(8,10,20,0.46) 42%, rgba(8,10,20,0.78) 60%, rgba(8,10,20,0.96) 76%, rgba(8,10,20,1) 100%)"
        }}
      />
      <div aria-hidden className="absolute right-[8%] top-[18%] hidden h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(255,152,78,0.14)_0%,rgba(255,152,78,0.06)_28%,transparent_68%)] blur-[48px] md:block" />
      <div aria-hidden className="absolute bottom-[10%] right-[12%] hidden h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,166,92,0.22)_0%,rgba(255,166,92,0.08)_32%,transparent_72%)] blur-[26px] md:block" />
      <Reveal>
        <Container className="relative z-10 space-y-14">
          <SectionHeading
            id="questions-title"
            eyebrow="Связаться"
            title="Оставьте свой запрос"
            description="Если чувствуете отклик, но хотите уточнить детали, напишите. Поможем выбрать формат и понять, как курс ляжет именно в вашу практику."
          />

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="motion-card mystic-panel space-y-6 rounded-[2rem] p-6 sm:p-8">
              <div className="space-y-4">
                <h3 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[rgba(255,236,217,0.98)]">
                  Форма заявки
                </h3>
                <p className="text-sm leading-7 text-[rgba(201,206,226,0.82)] sm:text-base">
                  Заполните поля ниже. Вы можете кратко описать свой запрос, и мы свяжемся с вами, чтобы помочь с выбором.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,166,79,0.08),rgba(31,46,83,0.2))] p-5">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[rgba(255,216,184,0.94)]">Можно уточнить:</p>
                <ul className="space-y-3 text-sm leading-7 text-[rgba(201,206,226,0.82)]">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-orange-100 via-orange-300 to-sky-300" />
                    <span>какой тариф лучше подходит под ваш запрос;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-orange-100 via-orange-300 to-sky-300" />
                    <span>как устроена программа и формат обучения;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-orange-100 via-orange-300 to-sky-300" />
                    <span>подойдёт ли курс, если вы только начинаете практику.</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm leading-7 text-[rgba(201,206,226,0.82)]">
                Короткого сообщения достаточно, чтобы мы подсказали, с чего лучше начать и какой формат участия будет комфортнее.
              </p>

              <ButtonLink href="#pricing" variant="secondary" className="w-full sm:w-auto">
                Вернуться к тарифам
              </ButtonLink>
            </aside>

            <form className="motion-card mystic-panel space-y-5 rounded-[2rem] p-6 sm:p-8">
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
                className="button-glow inline-flex min-h-[3.5rem] items-center justify-center rounded-full border border-orange-200/35 bg-[linear-gradient(135deg,rgba(255,230,188,0.98),rgba(255,180,92,0.98)_45%,rgba(246,106,36,0.98))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-slate-950 shadow-[0_20px_50px_rgba(255,124,28,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(255,124,28,0.28)] active:scale-[0.98]"
              >
                <span className="relative z-10">Отправить заявку</span>
              </button>
            </form>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
