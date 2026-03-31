import { Pipe, PipeTransform } from "@angular/core";
import { Contact } from "./phone-book/phone-book";
@Pipe({
  name: "favoriteCount",
  pure: false
})
export class FavoriteCountPipe implements PipeTransform{
  transform(value: Contact[]) {
    return value.reduce((total, current) => total + (current.favorite? 1: 0),0)
  }
}