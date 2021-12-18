import { Injectable, OnDestroy } from '@angular/core';

import { Observable, Subject, takeUntil } from 'rxjs';

@Injectable()
export class UnsubscribeService implements OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  public get untilDestroyed(): <T>(source$: Observable<T>)=> Observable<T> {
    return <T>(source$: Observable<T>) => source$.pipe(takeUntil(this.destroy$));
  };

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
