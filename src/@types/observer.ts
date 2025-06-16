export type ObserverCallback = (entry: IntersectionObserverEntry) => void;

export interface ObserverConfig {
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