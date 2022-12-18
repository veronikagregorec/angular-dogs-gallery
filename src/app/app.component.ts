import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  moreDogs($event:any):any {}
  dogs: any = [];
  pes: any = [];

}
