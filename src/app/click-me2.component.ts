import { Component } from '@angular/core';

@Component({
  selector: 'click-me2',
  template: `
    <button (click)="onClickMe2($event)">Нет!...Нажми меня!</button>
    {{clickMessage}}`
})
export class ClickMe2Component {
  clickMessage = '';
  clicks = 1;

  onClickMe2(event: any) {
   debugger;
   if (this.clicks==5) this.clicks=1;
    let evtMsg = event ? 'Цель события ' + event.target.tagName  : '';
    this.clickMessage = (`Нажал ${this.clicks++}. ${evtMsg}`);
  }
}
