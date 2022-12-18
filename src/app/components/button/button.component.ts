import { AfterViewInit, Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{

  // @ViewChild(dogsListComponent) dogsComponent: any;

  sendEvent: any;

  moreDogs($event: any) {
    this.sendEvent = $event;
  }

  // ngAfterViewInit() {
  //   this.sendEvent = this.dogsComponent.sendEvent;
  // }
}
