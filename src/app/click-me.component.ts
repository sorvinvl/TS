/* FOR DOCS ... MUST MATCH ClickMeComponent template
  <button (click)="onClickMe()">Click me!</button>
*/

import { Component } from '@angular/core';

@Component({
  selector: 'click-me',
  template: `
    <button (click)="onClickMe()">Нажми меня!</button>
    {{clickMessage}}`
})
export class ClickMeComponent {
  clickMessage = '';
  click = false;

  onClickMe() {
 //   if this.click = false
    this.clickMessage = 'Ты мой герой';
  }
}
