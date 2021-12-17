import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section>
      <button (click)="toggleChild()">toggle child</button>
    </section>
    <app-careless *ngIf="isChildVisible"></app-careless>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public isChildVisible = false;

  public toggleChild(): void {
    this.isChildVisible = !this.isChildVisible;
  }
}
