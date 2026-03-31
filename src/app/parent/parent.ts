import { Component } from '@angular/core';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-parent',
  imports: [Counter],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  countValue: number = 0;

  onCountIncremented(newCount: number) {
    this.countValue = newCount;
  }
}