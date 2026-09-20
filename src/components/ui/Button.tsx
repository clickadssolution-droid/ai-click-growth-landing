import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary-dark" | "secondary-light" | "ghost-dark" | "ghost-light";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] font-display font-semibold text-[15px] transition-[background-color,color,box-shadow,transform] duration-200 ease-[var(--ease-out-standard)] focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60";

const VARIANTS: Record<Variant, string> = {
  // V1.3 punto 6: efecto flotante premium — lift sutil + glow naranja controlado en hover.
  primary:
    "bg-orange-500 text-navy-900 px-7 py-3.5 shadow-[0_8px_24px_-8px_rgba(255,176,33,0.55)] hover:bg-orange-600 hover:-translate-y-[3px] hover:shadow-[0_14px_32px_-10px_rgba(255,176,33,0.65)] active:translate-y-0 active:scale-[0.98]",
  "secondary-dark":
    "border border-white/35 text-white px-7 py-3.5 hover:bg-white/10 active:scale-[0.98]",
  "secondary-light":
    "border border-navy-900 text-navy-900 px-7 py-3.5 hover:bg-ivory-50 active:scale-[0.98]",
  "ghost-dark": "text-white px-2 py-1 underline-offset-4 hover:underline",
  "ghost-light": "text-navy-900 px-2 py-1 underline-offset-4 hover:underline",
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ children, variant = "primary", className = "", ...rest }: ButtonProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
