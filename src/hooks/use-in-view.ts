import { useEffect, useRef } from "react";

/**
 * All Reveal/AnimatedCounter instances that share the same threshold+rootMargin
 * are observed by ONE IntersectionObserver instead of one-per-element.
 */
const sharedObservers = new Map<
  string,
  { io: IntersectionObserver; callbacks: WeakMap<Element, () => void> }
>();

function getSharedObserver(options: IntersectionObserverInit) {
  const key = JSON.stringify(options);
  let entry = sharedObservers.get(key);
  if (!entry) {
    const callbacks = new WeakMap<Element, () => void>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) callbacks.get(entry.target)?.();
      });
    }, options);
    entry = { io, callbacks };
    sharedObservers.set(key, entry);
  }
  return entry;
}

const DEFAULT_OPTIONS: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: "0px 0px -60px 0px",
};

/** Fires `onEnter` once, the first time the returned ref's element enters the viewport. */
export function useOnEnterView<T extends Element>(
  onEnter: () => void,
  options: IntersectionObserverInit = DEFAULT_OPTIONS,
) {
  const ref = useRef<T | null>(null);
  const onEnterRef = useRef(onEnter);
  onEnterRef.current = onEnter;

  const optionsKey = JSON.stringify(options);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { io, callbacks } = getSharedObserver(options);
    callbacks.set(el, () => onEnterRef.current());
    io.observe(el);
    return () => io.unobserve(el);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionsKey]);

  return ref;
}
