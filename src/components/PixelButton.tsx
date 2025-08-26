import Link from 'next/link';
import { cn } from '@/lib/utils';

type PixelButtonProps = { 
  children: React.ReactNode;
  as?: React.ElementType;
  href?: string;
  className?: string;
  [key: string]: any;
}

export default function PixelButton({ children, as = "button", href, className = "", ...props }: PixelButtonProps) {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  const Cmp: any = isInternalLink ? Link : (href ? "a" : as);
  
  return (
    <Cmp
      href={href}
      className={cn(
        `inline-block px-4 py-3 bg-magenta text-cabinet font-arcade text-xs pixel-border focus-ring transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none`, 
        className
      )}
      {...props}
    >
      {children}
    </Cmp>
  );
}
