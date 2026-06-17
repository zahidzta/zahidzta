import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'solid' | 'outline';

interface CommonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsAnchor = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({ variant = 'solid', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50";
  
  const variants = {
    solid: "bg-primary text-white shadow-[0_0_15px_rgba(0,122,255,0.3)] hover:shadow-[0_0_25px_rgba(0,122,255,0.5)] hover:-translate-y-1",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(0,122,255,0.4)] hover:-translate-y-1"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (props.href) {
    return (
      <a {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} className={classes}>
      {children}
    </button>
  );
}
