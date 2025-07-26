import { useEffect, useRef, useState } from 'react';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 'medium',
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;

    // Calculate parallax offset based on scroll position
    const scrollProgress = (scrollY - elementTop + windowHeight) / (windowHeight + elementHeight);
    
    let multiplier = 0;
    switch (speed) {
      case 'slow':
        multiplier = -0.3;
        break;
      case 'medium':
        multiplier = -0.5;
        break;
      case 'fast':
        multiplier = -0.8;
        break;
    }

    const offset = scrollProgress * 100 * multiplier;
    element.style.transform = `translateY(${offset}px)`;
  }, [scrollY, speed]);

  return (
    <div
      ref={elementRef}
      className={`parallax-${speed} ${className}`}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;