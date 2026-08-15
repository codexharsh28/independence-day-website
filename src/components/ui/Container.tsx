import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Shared horizontal rhythm for every section. All page content should
 * be wrapped in this rather than defining max-width/padding ad hoc.
 */
export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-8xl px-6 sm:px-8 lg:px-12", className)}
      {...props}
    >
      {children}
    </div>
  );
}
