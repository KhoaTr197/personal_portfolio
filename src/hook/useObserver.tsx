import { useEffect, useRef } from "react";
import { ElementRef, ObserverCallback, ObserverConfig } from "@/types/observer";

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
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callbackFn(entry);
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
      observer.disconnect();
    };
  }, [config, callbackFn]);

  return ref;
}