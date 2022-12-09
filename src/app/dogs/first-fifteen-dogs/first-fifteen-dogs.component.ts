import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-first-fifteen-dogs',
  templateUrl: './first-fifteen-dogs.component.html',
  styleUrls: ['./first-fifteen-dogs.component.css']
})
export class FirstFifteenDogsComponent implements OnInit{

  title: string = "The Dogs Gallery"

  constructor(private httpService: HttpService) { 
  }

  dogs: any = [];
  
  onGetFirstFifteenDogs(): any {
    this.httpService.getFirstFifteenDogs().subscribe(
      (response) => this.dogs = response
    );
  }

  ngOnInit(): void {
    this.onGetFirstFifteenDogs();
  }
}
