import { cn } from "@/lib/utils";

interface DividerProps {
  /** Controls width + thickness. "sm" for inline marks, "lg" for section breaks. */
  size?: "sm" | "md" | "lg" | "full";
  className?: string;
}

const sizeMap: Record<NonNullable<DividerProps["size"]>, string> = {
  sm: "h-px w-10",
  md: "h-[2px] w-20",
  lg: "h-[2px] w-32",
  full: "h-px w-full",
};

/**
 * The signature element of the site: a tricolor rule echoing the flag.
 * Used sparingly — under wordmarks, headlines, and as section dividers.
 */
export function Divider({ size = "md", className }: DividerProps) {
  return (
    <div
      className={cn(
        "rounded-full bg-gradient-to-r from-saffron via-ivory to-flag-green",
        sizeMap[size],
        className
      )}
      aria-hidden="true"
    />
  );
}
