import type Lenis from "lenis";

/** Tiny shared handle so other components can pause/resume smooth scrolling. */
let instance: Lenis | null = null;
let pendingStop = false;

export function setLenis(l: Lenis | null) {
  instance = l;
  if (l && pendingStop) l.stop();
}

export function stopScroll() {
  pendingStop = true;
  instance?.stop();
}

export function startScroll() {
  pendingStop = false;
  instance?.start();
}
