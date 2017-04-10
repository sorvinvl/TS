import { Component } from '@angular/core';
let newHero: Number=0;
@Component({
  selector: 'little-tour',
  template: `
<table style="color: green; font-size: 2em" border>
  <tr>
    <td *ngFor="let her of heroes">{{her}}</td>
  </tr>
</table><br>
    <input type="number" min="10" value="10" max="99" style="color: green; font-size: 2em" #newHero
     (keyup.enter)="addHero(newHero.value)"/>
    <button style="color: green; font-size: 2em" (click)="addHero(newHero.value)">+</button>
`
})
export class LittleTourComponent {
  heroes = [10, 15, 12, 23, 32, 23, 45, 68];
  addHero(newHero: number) {
let OutString = this.heroes.length;
    if (newHero >0 ) 
    {
      this.heroes.push(newHero/1);
      //this.heroes.push(this.heroes.length);
      //console.log(this.heroes, newHero,this.heroes.length);
    }
  }
}
