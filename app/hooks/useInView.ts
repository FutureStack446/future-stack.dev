"use client";

import { useState, useEffect, RefObject, useRef } from "react";

interface UseInViewOptions {
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export function useInView(
  ref: RefObject<HTMLElement>,
  options: UseInViewOptions = { threshold: 0.1, triggerOnce: true }
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Destructure to avoid object reference issues in dependencies
    const { threshold, triggerOnce } = options;
    // Memoize the threshold if it's an array to prevent infinite loops
    const thresholdJSON = JSON.stringify(threshold);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce !== false) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold: JSON.parse(thresholdJSON) }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options.threshold, options.triggerOnce]); // Primitives or ref stability

  return isInView;
}