'use client';

import { useScrollReveal } from '@/animations/hooks/useScrollReveal';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
  delay?: number;
  stagger?: number;
  threshold?: string;
  distance?: number;
}

export function Reveal({
  children,
  className = '',
  direction = 'up',
  duration = 0.8,
  delay = 0,
  stagger = 0.08,
  threshold = 'top 85%',
  distance = 32,
}: RevealProps) {
  const ref = useScrollReveal<HTMLDivElement>({
    direction,
    duration,
    delay,
    stagger,
    triggerThreshold: threshold,
    distance,
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

