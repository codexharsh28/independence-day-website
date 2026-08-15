"use client";

import { useEffect, useState } from "react";

/**
 * True for viewports at or below the `md` breakpoint. Used to reduce
 * particle count and animation complexity on phones/small tablets.
 */
export function useIsMobile(breakpointPx = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${breakpointPx}px)`);
    setIsMobile(query.matches);

    const listener = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, [breakpointPx]);

  return isMobile;
}
