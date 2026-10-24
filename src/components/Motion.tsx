import React, { useEffect, useRef, useState } from 'react';

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialY?: number;
  initialX?: number;
  initialScale?: number;
  once?: boolean;
  hoverY?: number;
  hoverScale?: number;
  tapScale?: number;
  as?: 'div' | 'p' | 'h3' | 'span';
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  initialY = 24,
  initialX = 0,
  initialScale = 1,
  once = true,
  hoverY = 0,
  hoverScale = 1,
  tapScale = 1,
  as: Component = 'div',
  className = '',
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-40px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const tx = inView ? 0 : initialX;
  const ty = inView ? (hovered ? hoverY : 0) : initialY;
  const scale = inView
    ? tapped
      ? tapScale
      : hovered
        ? hoverScale
        : 1
    : initialScale;

  const computedStyle: React.CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`,
    transitionProperty: 'opacity, transform, box-shadow, background-color, border-color',
    transitionDuration: hovered || tapped ? '220ms' : `${duration * 1000}ms`,
    transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
    transitionDelay: hovered || tapped ? '0ms' : `${delay * 1000}ms`,
    ...style,
  };

  const Comp = Component as any;

  return (
    <Comp
      ref={ref}
      className={className}
      style={computedStyle}
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
        if (hoverY !== 0 || hoverScale !== 1) setHovered(true);
        rest.onMouseEnter?.(e);
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        setHovered(false);
        setTapped(false);
        rest.onMouseLeave?.(e);
      }}
      onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
        if (tapScale !== 1) setTapped(true);
        rest.onMouseDown?.(e);
      }}
      onMouseUp={(e: React.MouseEvent<HTMLDivElement>) => {
        setTapped(false);
        rest.onMouseUp?.(e);
      }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function CountUp({
  end,
  duration = 2000,
  suffix = '',
  decimals = 0,
}: {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = progress * end;
      setValue(decimals > 0 ? Number(current.toFixed(decimals)) : Math.floor(current));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [inView, end, duration, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? value.toFixed(decimals) : value.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
}

