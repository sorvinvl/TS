/* tslint:disable:class-name component-class-suffix */
import { Component } from '@angular/core';
import { LittleTourComponent } from './little-tour.component'
@Component({
  selector: 'NumX',
  template: `
     <input type="number" min="1" value="5" max="9" 
    style="color: green; font-size: 2em" 
     #nX
     (keyup.enter)="findP(nX.value)"
     (keyup)="nX.value=ChKey(nX.value)">
    <button style="color: green; font-size: 2em" 
    (click)="findP(nX.value)">Найти Р</button><br><hr>
  `
})
export class KeyUpComponent_v1 {
  values = '';
ChKey(newHero: number):number
 {
  if (newHero > 9)  newHero=9; 
  return newHero;
 } 
 findP(nX: number)
   {
   console.log(LittleTourComponent.call);
  }
}
//////////////////////////////////////////

@Component({
  selector: 'key-up2',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v2 {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
}

//////////////////////////////////////////

@Component({
  selector: 'key-up3',
  template: `
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `
})
export class KeyUpComponent_v3 {
  value = '';
  onEnter(value: string) { this.value = value; }
}

//////////////////////////////////////////

@Component({
  selector: 'key-up4',
  template: `
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">

    <p>{{value}}</p>
  `
})
export class KeyUpComponent_v4 {
  value = '';
  update(value: string) { this.value = value; }
}
