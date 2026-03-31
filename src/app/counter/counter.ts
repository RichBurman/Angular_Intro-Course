import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  @Input() count: number = 0;
  @Output() countIncremented = new EventEmitter<number>;

  increment() {
    this.count++
    this.countIncremented.emit(this.count)
  }
}
