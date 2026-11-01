import { Observable, NEVER, OperatorFunction } from "rxjs";
import { filter, map, switchMap, withLatestFrom, tap, debounceTime } from "rxjs/operators";

export function subscribeWhen<T>(p$: Observable<boolean>) {
  return (source: Observable<T>) => {
    return p$.pipe(switchMap(p => (p ? source : NEVER)));
  };
}

export function unsubscribeWhen<T>(p$: Observable<boolean>) {
  return (source: Observable<T>) => {
    return p$.pipe(switchMap(p => (p ? NEVER : source)));
  };
}

// export function filterWhen<T>(p$: Observable<boolean>) {
//   return (source: Observable<T>) => {
//     return source.pipe(
//       withLatestFrom(p$),
//       filter(([, p]) => p),
//       map(([x]) => x)
//     );
//   };
// };

export function filterWhen<T>(p$: Observable<boolean>, ...others: Observable<boolean>[]) {
  return (source: Observable<T>) => {
    if (others.length === 0) {
      return source.pipe(
        withLatestFrom(p$),
        filter(([, p]) => p),
        map(([x]) => x)
      );
    }

    return source.pipe(
      withLatestFrom(p$, ...others),
      filter(([, ...ps]) => ps.every(p => p)),
      map(([x]) => x as T)
    );
  };
};

export function bufferDebounceTime<T>(time: number = 0): OperatorFunction<T, T[]> {
  return (source: Observable<T>) => {
    let bufferedValues: T[] = [];

    return source.pipe(
      tap(value => bufferedValues.push(value)),
      debounceTime(time),
      map(() => bufferedValues),
      tap(() => bufferedValues = []),
    );
  };
}
