/**
 * Minimal className combiner. Filters falsy values and joins.
 * Intentionally not using clsx/tailwind-merge to keep the dependency
 * footprint small.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
