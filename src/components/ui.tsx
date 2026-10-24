import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  const variantClasses = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-white hover:bg-destructive/90',
    outline:
      'border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
    link: 'text-primary underline-offset-4 hover:underline',
  }[variant];

  const sizeClasses = {
    default: 'h-9 px-4 py-2',
    sm: 'h-8 rounded-md gap-1.5 px-3',
    lg: 'h-10 rounded-md px-6',
    icon: 'size-9 rounded-md',
  }[size];

  return (
    <button
      data-slot="button"
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 cursor-pointer',
        variantClasses,
        sizeClasses,
        className
      )}
      {...props}
    />
  );
}

export function Input({
  className,
  type = 'text',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        className
      )}
      {...props}
    />
  );
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variantClasses = {
    default: 'border-transparent bg-primary text-primary-foreground',
    secondary: 'border-transparent bg-secondary text-secondary-foreground',
    destructive: 'border-transparent bg-destructive text-white',
    outline: 'text-foreground border-border',
  }[variant];

  return (
    <span
      data-slot="badge"
      className={cn(
        'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden',
        variantClasses,
        className
      )}
      {...props}
    />
  );
}

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card"
      className={cn('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border', className)}
      {...props}
    />
  );
}

export function SurfaceCard({
  children,
  className = '',
  hover = true,
  variant = 'default',
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
  variant?: 'service' | 'stat' | 'trust' | 'transparency' | 'footer' | 'default';
}) {
  const variantMap = {
    service: 'min-h-[160px] flex flex-col',
    stat: 'min-h-[160px] flex flex-col justify-center text-center',
    trust: 'min-h-[80px] flex flex-col justify-center p-3',
    transparency: 'min-h-[280px] flex flex-col',
    footer: 'min-h-0 bg-card/50 dark:bg-card/30 border-border/30',
    default: '',
  }[variant];

  return (
    <div
      className={cn(
        'bg-card dark:bg-card border border-border/50 rounded-2xl p-6 shadow-sm transition-all duration-300',
        hover && 'hover:shadow-lg hover:border-primary/20 hover:-translate-y-1',
        variantMap,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

