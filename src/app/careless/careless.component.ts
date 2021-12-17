import { Component, OnInit } from '@angular/core';

import { IntervalService } from '../services/interval/interval.service';

@Component({
  selector: 'app-careless',
  template: `
    <p>ಠ_ಠ</p>
  `,
})
export class CarelessComponent implements OnInit {
  public constructor(private intervalService: IntervalService) {}

  public ngOnInit(): void {
    this.intervalService.getInterval.subscribe(async (i) => {
      console.log(i);
      console.log(findPermutations('abcdefg'));
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
