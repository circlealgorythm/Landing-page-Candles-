import Image from "next/image";

import { aboutContent } from "@/lib/course-content";

import { Container, Reveal } from "@/components/ui";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative border-b border-white/10 py-20 lg:py-32">
      <Reveal>
        <Container>
          <article className="relative overflow-hidden rounded-[2rem] border border-[rgba(245,197,146,0.14)] bg-[linear-gradient(180deg,rgba(29,27,39,0.98),rgba(21,22,35,0.98))] px-5 py-5 shadow-[0_30px_100px_rgba(4,8,20,0.34)] sm:px-8 sm:py-8 lg:px-14 lg:py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_34%,rgba(253,172,94,0.1),transparent_18%),radial-gradient(circle_at_78%_22%,rgba(108,161,226,0.06),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_32%)]" />
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/5" />

            <div className="relative grid gap-8 lg:grid-cols-[1.42fr_0.58fr] lg:gap-x-2 lg:gap-y-8 lg:items-stretch">
              <div className="relative z-20 flex min-h-full flex-col lg:pr-2">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(245,197,146,0.16)] bg-[rgba(255,245,235,0.04)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[rgba(245,228,210,0.82)]">
                  <span className="h-2 w-2 rounded-full bg-[radial-gradient(circle,rgba(255,213,166,1),rgba(255,137,54,0.92))] shadow-[0_0_14px_rgba(255,155,73,0.48)]" />
                  Практик и преподаватель
                </span>

                <div className="mt-7 max-w-[42rem] space-y-6 lg:mr-[-2rem] lg:max-w-[64rem]">
                  <h2
                    id="about-title"
                    className="font-display text-[2.35rem] font-semibold leading-[0.98] tracking-[-0.058em] text-[rgba(255,236,216,0.98)] sm:text-[3.35rem] lg:max-w-[22ch] lg:text-[4.6rem]"
                  >
                    {aboutContent.title}
                  </h2>

                  <div className="space-y-6 pt-2 lg:max-w-[52rem]">
                    {aboutContent.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="max-w-[35rem] text-[1rem] leading-8 text-[rgba(199,199,214,0.82)] sm:text-[1.08rem] lg:max-w-[52rem]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative min-h-[20rem] bg-transparent sm:min-h-[26rem] lg:min-h-[44rem]">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute right-[8%] top-[14%] h-[56%] w-[56%] rounded-full bg-[radial-gradient(circle,rgba(255,151,73,0.22)_0%,rgba(255,151,73,0.1)_32%,rgba(255,151,73,0.03)_58%,transparent_74%)] blur-[14px]" />
                  <div className="absolute bottom-[-2%] right-[-2%] h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,152,77,0.42)_0%,rgba(255,152,77,0.16)_34%,transparent_72%)] blur-[20px]" />
                  <div className="absolute inset-y-[8%] right-[0%] w-[92%] opacity-80">
                    <AboutConstellation />
                  </div>
                </div>

                <div className="absolute inset-x-[-6%] bottom-[-3%] top-[4%] sm:inset-x-[-2%] lg:inset-x-[-8%] lg:bottom-[-4%]">
                  <Image
                    src="/images/author3-about.png"
                    alt="Анна, практик и преподаватель по работе с программными свечами"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-contain object-center lg:object-[72%_center] brightness-[0.97] contrast-[1.01] saturate-[0.9] [filter:drop-shadow(0_18px_54px_rgba(10,18,34,0.18))_drop-shadow(0_0_34px_rgba(255,147,68,0.18))]"
                    priority={false}
                  />
                </div>
              </div>

              <div className="relative z-20 -mt-6 pt-6 sm:-mt-4 sm:pt-4 lg:col-start-1 lg:mt-0 lg:max-w-[48rem] lg:pt-0">
                <div className="hidden h-px w-full max-w-[46rem] bg-gradient-to-r from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.06)] to-transparent lg:block" />

                <ul className="mt-8 grid gap-7 sm:grid-cols-3 sm:gap-8">
                  {aboutContent.points.map((point, index) => (
                    <li key={point} className="max-sm:w-full sm:grid sm:min-h-full sm:grid-rows-[auto_minmax(0,1fr)_auto] sm:gap-4">
                      <div className="flex h-11 w-11 items-center justify-center text-[rgba(241,215,187,0.95)]">
                        <AboutPointIcon index={index} />
                      </div>
                      <p className="w-full max-w-none text-[1rem] leading-[1.45] text-[rgba(242,226,205,0.94)] sm:max-w-[12rem]">
                        {point}
                      </p>
                      <span className="block h-2.5 w-2.5 rounded-full bg-[radial-gradient(circle,rgba(255,220,176,1),rgba(255,163,73,0.92))] shadow-[0_0_18px_rgba(255,153,68,0.44)]" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Container>
      </Reveal>
    </section>
  );
}

function AboutConstellation() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 700 760"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="about-constellation-line" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,170,101,0.04)" />
          <stop offset="40%" stopColor="rgba(255,160,91,0.22)" />
          <stop offset="100%" stopColor="rgba(255,179,112,0.06)" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#about-constellation-line)" strokeWidth="1.15">
        <path d="M80 466c42-150 158-260 330-316" />
        <path d="M118 560c148-48 248-126 342-246" />
        <path d="M210 616c124-22 222-74 316-176" />
        <path d="M432 126c136 38 206 128 214 278" />
        <path d="M490 332c76-28 130-68 168-120" />
        <path d="M546 418c58 46 96 102 118 176" />
      </g>
      <g fill="rgba(255,171,96,0.72)">
        <circle cx="82" cy="468" r="4.5" />
        <circle cx="120" cy="560" r="4.5" />
        <circle cx="212" cy="616" r="4.5" />
        <circle cx="460" cy="324" r="5" />
        <circle cx="582" cy="418" r="4.5" />
        <circle cx="646" cy="572" r="5" />
        <circle cx="612" cy="184" r="4.5" />
      </g>
      <g fill="rgba(255,170,95,0.18)">
        <circle cx="82" cy="468" r="28" />
        <circle cx="460" cy="324" r="34" />
        <circle cx="646" cy="572" r="30" />
      </g>
      <g fill="rgba(255,160,90,0.36)">
        <circle cx="348" cy="474" r="1.4" />
        <circle cx="360" cy="478" r="1.2" />
        <circle cx="374" cy="482" r="1.3" />
        <circle cx="392" cy="490" r="1.2" />
        <circle cx="408" cy="500" r="1.1" />
        <circle cx="598" cy="294" r="1.4" />
        <circle cx="612" cy="300" r="1.2" />
        <circle cx="624" cy="308" r="1.3" />
        <circle cx="640" cy="318" r="1.1" />
      </g>
    </svg>
  );
}

type AboutPointIconProps = Readonly<{
  index: number;
}>;

function AboutPointIcon({ index }: AboutPointIconProps) {
  const commonProps = {
    "aria-hidden": true,
    className: "h-10 w-10",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.35,
    viewBox: "0 0 24 24"
  };

  if (index === 0) {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="12" cy="12" r="8.2" opacity="0.42" />
        <path d="M12 1.9v3.4" />
        <path d="M12 18.7v3.4" />
        <path d="M1.9 12h3.4" />
        <path d="M18.7 12h3.4" />
        <path d="m5 5 2.4 2.4" opacity="0.72" />
        <path d="m16.6 16.6 2.4 2.4" opacity="0.72" />
        <path d="m19 5-2.4 2.4" opacity="0.72" />
        <path d="m7.4 16.6-2.4 2.4" opacity="0.72" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg {...commonProps}>
        <path d="M12 2.8c3.3 3.6 5.3 6.5 5.3 9.5a5.3 5.3 0 1 1-10.6 0c0-3 2-5.9 5.3-9.5Z" />
        <path d="M12 6.9c2.1 2.4 3.3 4.2 3.3 6.1a3.3 3.3 0 0 1-6.6 0c0-1.9 1.2-3.7 3.3-6.1Z" opacity="0.82" />
        <path d="M10 15.6c.6.6 1.3.9 2 .9 1 0 1.9-.4 2.5-1.1" opacity="0.72" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="m12 2.8 7.2 4.2v10L12 21 4.8 17V7L12 2.8Z" />
      <path d="M12 2.8v18.1" opacity="0.74" />
      <path d="m19.2 7-7.2 4.2L4.8 7" opacity="0.74" />
      <path d="m8.7 5.3 7.2 4.1" opacity="0.5" />
      <path d="m15.9 5.3-7.2 4.1" opacity="0.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" opacity="0.9" />
    </svg>
  );
}
