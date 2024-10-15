import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top-button',
  templateUrl: './scrollToTopButton.component.html',
  styleUrls: ['./scrollToTopButton.component.css']
})
export class ScrollToTopButtonComponent{

  isShow: boolean = false;
  topPosToStartShowing = 150;

  @HostListener("window:scroll")
  onScrollToTop() {

  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
  if (scrollPosition >= this.topPosToStartShowing) {
    this.isShow = true;
    } else {
    this.isShow = false;
    }
  }

  scrollToTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
