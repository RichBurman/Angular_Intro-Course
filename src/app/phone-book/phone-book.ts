import { Component } from '@angular/core';
import { PhoneBookContact } from '../phone-book-contact/phone-book-contact';
import { FavoriteCountPipe } from '../favorite-count.pipe';
import { DatePipe } from '@angular/common';
export interface Contact {
  id: string,
  name: string,
  phoneNumber: string
  favorite: boolean
}

@Component({
  selector: 'app-phone-book',
  imports: [PhoneBookContact, FavoriteCountPipe, DatePipe],
  templateUrl: './phone-book.html',
  styleUrl: './phone-book.css',
})
export class PhoneBook {
  contacts: Contact[] = [
    {
      id: "1",
      name: "jack Blackthorne",
      phoneNumber: "1234567890",
      favorite: false

    },
    {
      id: "2",
      name: "cody john",
      phoneNumber: "4320984726",
      favorite: false
    },
    {
      id: "3",
      name: "Jerry Spring",
      phoneNumber: "6846541234",
      favorite: true
    },
    {
      id: "4",
      name: "Jack Rooney",
      phoneNumber: "8796548511",
      favorite: false
    },
    {
      id: "5",
      name: "WIll Down",
      phoneNumber: "9871115566",
      favorite: true
    }
  ]
  date = new Date()
  favoriteShade = "#D1FFFB"

  onFavoriteShadeChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    this.favoriteShade = target.value;
  }
}
