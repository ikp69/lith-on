'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { prefersReducedMotion } from '@/animations/config';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number; // Distance multiplier (default: 0.3)
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
}

export function MagneticButton({
  children,
  className = '',
  onClick,
  strength = 0.25,
  type = 'button',
  disabled = false,
  href,
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  if (href) {
    return (
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          x: springX,
          y: springY,
        }}
        className={`inline-block ${className}`}
      >
        <Link href={href} className="inline-flex items-center justify-center w-full h-full">
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className={`inline-block ${className}`}
    >
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`relative inline-flex items-center justify-center transition-shadow w-full h-full ${
          isHovered ? 'shadow-md' : ''
        }`}
      >
        {children}
      </button>
    </motion.div>
  );
}
