export default function woof(element: Element | null) {
  function debounce<T extends (...args: never[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void {
    let timeoutId: number | undefined;
    return function (this: never, ...args: Parameters<T>) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }

  const playWoofSound = debounce(() => {
    new Audio('/assets/audio/woof.mp3').play();
  }, 500); // 500ms de debounce

  element?.addEventListener('mouseenter', playWoofSound);
}
