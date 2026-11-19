'use client';

import { useTextReveal } from '@/animations/hooks/useTextReveal';

interface TextRevealProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: string;
}

export function TextReveal({
  children,
  as: Component = 'h2',
  className = '',
  delay = 0,
  duration = 0.9,
  threshold = 'top 85%',
}: TextRevealProps) {
  const ref = useTextReveal<HTMLHeadingElement>({
    delay,
    duration,
    triggerThreshold: threshold,
  });

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}

