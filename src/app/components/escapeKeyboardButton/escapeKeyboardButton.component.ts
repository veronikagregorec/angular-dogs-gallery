import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escape-keyboard-button',
  templateUrl: './escapeKeyboardButton.component.html',
  styleUrls: ['./escapeKeyboardButton.component.css']
})
export class EscapeKeyboardButtonComponent {

  constructor(private router: Router){}
  
  @HostListener('document:keydown', ['$event'])
  onEscapeKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "Escape") {
      // return DogsListComponent
      this.router.navigate(['/home'])
    }
  }
}
