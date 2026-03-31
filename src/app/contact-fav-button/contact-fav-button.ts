import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-fav-button',
  imports: [],
  templateUrl: './contact-fav-button.html',
  styleUrl: './contact-fav-button.css',
})
export class ContactFavButton {

  @Input() favorite: boolean = false
  // two-way bind `favorite`

  // Host element bind `click` event

  toggle() {
    this.favorite = !this.favorite
  }
}
