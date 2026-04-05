import { Component } from '@angular/core';

@Component({
  selector: 'students',
  template: `
    <h1>{{ getPageHeading() }}</h1>
  `,
  styles: [],
})
export class StudentsComponent {
  title = 'Students';

  getTitle(): string {
    return this.title;
  }

  getCurrentDate(): string {
    return new Date().toLocaleString();
  }

  /** Combines title and date using ES2015 template literal syntax */
  getPageHeading(): string {
    return `${this.getTitle()} — ${this.getCurrentDate()}`;
  }
}
