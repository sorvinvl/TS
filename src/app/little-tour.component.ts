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
    <input type="number" min="1" value="5" max="9" style="color: green; font-size: 2em" #newHero
     (keyup.enter)="addHero(newHero.value)"/>
    <button style="color: green; font-size: 2em" (click)="addHeroRnd()">+??</button>
`
})
export class LittleTourComponent {
  heroes = [1, 5, 2, 3, 2, 8, 4, 6, 9];
  addHero(newHero: number)
 { let Rnd = this.heroes.length;
    if (newHero >0 ) 
    {
      this.heroes.push(newHero);
      Rnd=Math.round(Math.random()*8+1);
      //this.heroes.push(this.heroes.length);
      console.log(newHero,this.heroes[this.heroes.length-1]);
    }
  }
  addHeroRnd()
 { let  Rnd=Math.round(Math.random()*8+1);
    if (Rnd >0) this.heroes.push(Rnd);
    console.log(Rnd, Rnd.toFixed(1),this.heroes[this.heroes.length-1]);
  }
  
}
