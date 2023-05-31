import { Component } from '@angular/core';

@Component({
  selector: 'app-counter', // balise html pour select ce comp
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counter: number = 0;

  add():void {
    this.counter++;
  }

  minus():void {
    this.counter--;
  }

  clear():void {
    this.counter = 0;
  }
}
