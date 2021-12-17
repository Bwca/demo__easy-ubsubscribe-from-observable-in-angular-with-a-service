import { Component, OnInit } from '@angular/core';

import { IntervalService } from '../services/interval/interval.service';
import { UnsubscribeService } from '../services/unsubscribe/unsubscribe.service';

@Component({
  selector: 'app-careless',
  template: `
    <p>ಠ_ಠ</p>
    `,
    providers: [UnsubscribeService],
})
export class CarelessComponent implements OnInit {
  private permutations: (string | string[])[] = [];
  public constructor(private intervalService: IntervalService, private unsubscribeService: UnsubscribeService) {}

  public ngOnInit(): void {
    this.intervalService.getInterval.pipe(this.unsubscribeService.untilDestroyed).subscribe(async () => {
      this.permutations.push(findPermutations('abcdefg'));
    });
  }
}

function findPermutations(str: string): string[] | string {
  if (str.length < 2) {
    return str;
  }

  const permutations: string[] = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    const remainingChars = str.slice(0, i) + str.slice(i + 1, str.length);

    for (const permutation of findPermutations(remainingChars)) {
      permutations.push(char + permutation);
    }
  }
  return permutations;
}
