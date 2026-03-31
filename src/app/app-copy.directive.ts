import { Directive, Input, ElementRef } from "@angular/core";

@Directive({
  selector: "[appCopy]",
})
export class AppCopyDirective {
  @Input() appCopy = "";
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.textDecoration = "underline";
    this.element.nativeElement.style.cursor = "pointer";
  }
}
