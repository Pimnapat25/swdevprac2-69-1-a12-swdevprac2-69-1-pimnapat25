"use client";

import { useEffect } from "react";

export default function useWindowListener(
  eventType: string,
  listener: EventListener,
) {
  useEffect(() => {
    window.addEventListener(eventType, listener);

    return () => window.removeEventListener(eventType, listener);
    // The assignment requires registration on first render only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
