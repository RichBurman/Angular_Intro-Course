import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantMenuComponent } from "./restaurant-menu/restaurant-menu";
import { PhoneBook } from './phone-book/phone-book';
import { Parent } from './parent/parent';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RestaurantMenuComponent, PhoneBook, Parent, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Gourmet Bistro';
}
