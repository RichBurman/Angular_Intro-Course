import { Component, Input } from '@angular/core';
import { Contact } from '../phone-book/phone-book';
import { ContactFavButton } from '../contact-fav-button/contact-fav-button';
import { NgStyle, TitleCasePipe } from "@angular/common";
import { AppCopyDirective } from '../app-copy.directive';


@Component({
  selector: 'app-phone-book-contact',
  imports: [ContactFavButton, NgStyle, AppCopyDirective, TitleCasePipe],
  templateUrl: './phone-book-contact.html',
  styleUrl: './phone-book-contact.css',
})
export class PhoneBookContact {
  @Input() favoriteShade: string = ''
  @Input() contact!: Contact
}
