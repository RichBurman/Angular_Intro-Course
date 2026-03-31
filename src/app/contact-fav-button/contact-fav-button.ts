import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact-fav-button',
  imports: [],
  templateUrl: './contact-fav-button.html',
  styleUrl: './contact-fav-button.css',
})
export class ContactFavButton {

  @Input() favorite: boolean = false
  // two-way bind `favorite`
  @Output() favoriteChange = new EventEmitter<boolean>();
  

  toggle() {
    this.favorite = !this.favorite
    this.favoriteChange.emit(this.favorite);
  }
}
