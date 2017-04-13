import { Component } from '@angular/core';
let newHero: number=0;
@Component({
  selector: 'little-tour',
  template: `
Массив:<table style="color: green; font-size: 2em" border>
  <tr>
    <td *ngFor="let her of heroes">{{her}}</td>
  </tr>
</table><br>
    <input type="number" min="1" value="5" max="9" 
    style="color: green; font-size: 2em" 
     #newHero
     (keyup.enter)="addHero(newHero.value)"
     (keyup)="newHero.value=ChKey(newHero.value)">
    <button style="color: green; font-size: 2em" 
    (click)="addHero(newHero.value)">Добавить элемент</button><br><br>
    <button style="color: green; font-size: 2em" 
    (click)="addHeroRnd()">Случайный элемент</button>
    <br>
    <input type="number" min="1" value="5" max="9" 
    style="color: green; font-size: 2em" 
     #nX
     (keyup.enter)="findP(nX.value)"
     (keyup)="nX.value=ChKey(nX.value)">
    <button style="color: green; font-size: 2em" 
    (click)="nP=findP(nX.value)">Найти Р</button><br><hr>
    <div style="color: green; font-size: 2em">P={{nP}}</div>
`
})
export class LittleTourComponent {
  heroes = [2, 3, 4, 5, 5, 6, 5, 8, 9];

  addHero(newHero: number)
 { let Rnd = this.heroes.length;
    if (newHero >0 ) 
        this.heroes.push(newHero); }

  addHeroRnd()
 { let  Rnd=Math.round(Math.random()*8+1);
    if (Rnd >0) this.heroes.push(Rnd);}

 ChKey(newHero: number):number
 {if (newHero > 9)  newHero=9; 
  return newHero;} 

 findP(nX: number):number 
 {var nO: number=0; 
  var nI: number=0;
  for (var item=0; item <this.heroes.length; item++) 
    if (this.heroes[item]==nX) nO++; 
    for (var item=0; item <this.heroes.length; item++)
        if (nO==nI) return item;
        else 
          if (this.heroes[item]==nX) nI++;
          else nO--;
    return item;}
}
