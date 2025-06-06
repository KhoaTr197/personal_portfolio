import { useEffect, useRef } from "react";

type ObserverCallback = (entry: IntersectionObserverEntry) => void;

interface ObserverConfig {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export type ElementRef<T extends Element = Element> =
  | T
  | T[]
  | Record<string, T | null>
  | null
  | undefined;

export const useObserver = (
  initialRef: ElementRef,
  callbackFn: ObserverCallback,
  config: ObserverConfig = {
    root: document.getElementById("app"),
    rootMargin: "-50%",
    threshold: 0,
  }
) => {
  const ref = useRef<ElementRef>(initialRef);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callbackFn(entry);
        }
      });
    }, config);

    const elementsToObserve = Array.isArray(ref.current)
      ? ref.current
      : ref.current instanceof Element
      ? [ref.current]
      : ref.current
      ? Object.values(ref.current).filter((el) => el instanceof Element)
      : [];

    elementsToObserve.forEach((sectionRef) => {
      if (sectionRef instanceof Element)
        observer.observe(sectionRef);
    });

    return () => {
      elementsToObserve.forEach((sectionRef) => {
        if (sectionRef instanceof Element)
          observer.unobserve(sectionRef);
      });
    };
  }, [ref, config]);

  return ref;
}