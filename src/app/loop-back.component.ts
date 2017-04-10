import { Component } from '@angular/core';
@Component({
  selector: 'loop-back',
  template: `
    <input #box (keydown)="0">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent { }
