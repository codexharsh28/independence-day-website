import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron disabled:opacity-40 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-saffron to-flag-green text-void hover:brightness-110",
  ghost:
    "border border-ivory/20 text-ivory hover:border-ivory/50 hover:bg-ivory/5",
};

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: undefined;
}

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

/**
 * Renders an <a> when `href` is provided, otherwise a <button>.
 * Keeps a single visual API for both navigation and actions.
 */
export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href) {
    return <a className={classes} {...(props as ButtonAsAnchorProps)} />;
  }

  return <button className={classes} {...(props as ButtonAsButtonProps)} />;
}
