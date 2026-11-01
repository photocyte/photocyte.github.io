import { Observable, animationFrames } from "rxjs";
import { map, takeWhile, endWith } from "rxjs/operators";

export function fetchRx(input: RequestInfo, init?: RequestInit): Observable<Response> {
  return new Observable(observer => {
    const controller = new AbortController();
    const { signal } = controller;

    let response: Response | null = null;
    fetch(input, { ...init, signal })
      .then(r => {
        response = r;
        observer.next(r);
        observer.complete();
      })
      .catch(x => observer.error(x));

    return () => { if (!response) controller.abort(); };
  });
}

export function fromMediaQuery(mql: MediaQueryList): Observable<MediaQueryListEvent> {
  return new Observable(o => {
    const l = o.next.bind(o);
    if (mql.onchange) mql.addEventListener('change', l); else mql.addListener(l);
    return () => {
      if (mql.onchange) mql.removeEventListener('change', l); else mql.removeListener(l);
    }
  });
}

export function tween(easingFn: (t: number, b: number, c: number, d: number, s?: number) => number, b: number, c: number, d: number, s?: number): Observable<number> {
  return animationFrames().pipe(
    map(({ elapsed }) => elapsed),
    takeWhile(t => t < d),
    endWith(d),
    map(t => easingFn(t, b, c, d, s)),
  )
}
