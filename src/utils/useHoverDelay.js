"use client";

import { useRef } from "react";

export const useHoverDelay = (openFn, closeFn, delay = 120) => {
  const timer = useRef(null);

  const onEnter = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(openFn, delay);
  };

  const onLeave = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(closeFn, delay);
  };

  return { onEnter, onLeave };
};