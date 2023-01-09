import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DogInfo } from './interface/dogInfo';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private httpService: HttpService) { }
  
  items: any = new BehaviorSubject<DogInfo[]>([{id: 264, url: 'https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg'}]);

  ngOnInit() {
    this.items.subscribe((item: any) => item = this.httpService.fetchDogsFromApi());
  }
}
