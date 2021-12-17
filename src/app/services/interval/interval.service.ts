import { Injectable } from '@angular/core';

import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntervalService {
  public get getInterval(): Observable<number> {
    return interval(250);
  }
}
