import { Observable } from "rxjs";

export function createResizeObservable(el: HTMLElement): Observable<ResizeObserverEntry> {
  return new Observable((obs) => {
    const observer = new ResizeObserver(xs => xs.forEach(x => obs.next(x)));
    observer.observe(el);
    return () => { observer.unobserve(el); };
  });
}

export function createMutationObservable(el: HTMLElement, options?: MutationObserverInit): Observable<MutationRecord> {
  return new Observable((obs) => {
    const observer = new MutationObserver(xs => xs.forEach(x => obs.next(x)));
    observer.observe(el, options);
    return () => { observer.disconnect(); };
  });
}

export function createIntersectionObservable(els: HTMLElement|HTMLElement[], options?: IntersectionObserverInit): Observable<IntersectionObserverEntry[]> {
  return new Observable((obs) => {
    const observer = new IntersectionObserver(xs => obs.next(xs), options);

    if (Array.isArray(els)) els.forEach(el => observer.observe(el));
    else observer.observe(els);

    return () => {
      if (Array.isArray(els)) els.forEach(el => observer.unobserve(el));
      else observer.unobserve(els);
    };
  });
}