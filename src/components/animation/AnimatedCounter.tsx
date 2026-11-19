'use client';

import { useState, useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@/animations/config';

interface AnimatedCounterProps {
  value: number;
  duration?: number; // In milliseconds (default: 2000)
  prefix?: string;
  suffix?: string;
  formatter?: (n: number) => string;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 2000,
  prefix = '',
  suffix = '',
  formatter,
  className = '',
}: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState(() => (prefersReducedMotion() ? value : 0));
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (prefersReducedMotion()) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || prefersReducedMotion()) return;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const nextVal = Math.round(value * easeProgress);

      setCurrentValue(nextVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  const displayString = formatter
    ? formatter(currentValue)
    : currentValue.toLocaleString('en-IN');

  return (
    <span ref={elementRef} className={`tabular-nums ${className}`}>
      {prefix}
      {displayString}
      {suffix}
    </span>
  );
}

