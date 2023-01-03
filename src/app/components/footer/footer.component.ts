import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  theDogsGallery: string = "The Dogs Gallery.";
  allRightsReserved: string = "All rights reserved.";
}