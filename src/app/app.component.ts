import { Component, OnInit } from '@angular/core';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.fetchDogsFromApi().subscribe()
  }
}
