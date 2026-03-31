import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "phonenumber",
})
export class PhoneNumberPipe implements PipeTransform {
  transform(value: string) {
    const numbers = value.split("");
    const areaCode = numbers.slice(0, 3).join("");
    const prefix = numbers.slice(3, 6).join("");
    const line = numbers.slice(6).join("");

    return `(${areaCode}) ${prefix}-${line}`;
  }
}
