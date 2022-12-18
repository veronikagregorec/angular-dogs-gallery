import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scrollToTop',
  templateUrl: './scrollToTop.component.html',
  styleUrls: ['./scrollToTop.component.css']
})
export class ScrollToTopComponent{

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
