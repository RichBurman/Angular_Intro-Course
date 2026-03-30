import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantMenuComponent } from "./restaurant-menu/restaurant-menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RestaurantMenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Gourmet Bistro';
}
