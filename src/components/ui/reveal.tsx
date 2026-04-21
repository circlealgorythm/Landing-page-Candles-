"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

type RevealProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}>;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isInitiallyVisible = element.getBoundingClientRect().top <= window.innerHeight * 0.9;

    if (mediaQuery.matches || isInitiallyVisible) {
      setIsVisible(true);
    }

    const frame = window.requestAnimationFrame(() => {
      setIsReady(true);
    });

    if (mediaQuery.matches || isInitiallyVisible) {
      return () => {
        window.cancelAnimationFrame(frame);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    observer.observe(element);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("motion-reveal", className)}
      data-ready={isReady ? "true" : "false"}
      data-visible={isVisible ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
