import { Component, Input } from '@angular/core';
import { Contact } from '../phone-book/phone-book';
import { ContactFavButton } from '../contact-fav-button/contact-fav-button';


@Component({
  selector: 'app-phone-book-contact',
  imports: [ContactFavButton],
  templateUrl: './phone-book-contact.html',
  styleUrl: './phone-book-contact.css',
})
export class PhoneBookContact {
  @Input() favoriteShade: string = ''
  @Input() contact!: Contact
}
