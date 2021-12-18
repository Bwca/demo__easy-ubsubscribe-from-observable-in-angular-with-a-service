import { Component, OnInit } from '@angular/core';

import { IntervalService } from '../services/interval/interval.service';
import { UnsubscribeService } from '../services/unsubscribe/unsubscribe.service';

@Component({
  selector: 'app-careless',
  template: `<p>ಠ_ಠ</p>`,
  providers: [UnsubscribeService],
})
export class CarelessComponent implements OnInit {
  private garbage: string[][] = [];
  public constructor(private intervalService: IntervalService, private unsubscribeService: UnsubscribeService) {}

  public ngOnInit(): void {
    this.intervalService.getInterval.pipe(this.unsubscribeService.untilDestroyed).subscribe(async () => {
      this.garbage.push(Array(5000).fill("some trash"));
    });
  }
}
