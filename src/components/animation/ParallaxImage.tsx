'use client';

import Image from 'next/image';
import { useParallax } from '@/animations/hooks/useParallax';

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number; // e.g. 0.15
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.15,
  className = '',
  imageClassName = '',
  priority = false,
  sizes = '100vw',
}: ParallaxImageProps) {
  const parallaxRef = useParallax<HTMLDivElement>({ speed });

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        ref={parallaxRef}
        className="absolute -inset-y-12 inset-x-0 w-full h-[calc(100%+6rem)] will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover object-center ${imageClassName}`}
        />
      </div>
    </div>
  );
}

