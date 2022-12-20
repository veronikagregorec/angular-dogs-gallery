import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '../interface/dog';
import { DogInfo } from '../interface/dogInfo';


let DOGS_FETCHED = 0;
const DOGS_TO_FETCH = 15

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // url: string = "assets/dogs.json";

  httpHeaders = new HttpHeaders({
    Authorization: "live_yOnbrVsZCcsffeeisScz8EByvFsHEtIubmS7wtwC8jyfu0KNQzBDjA8ZhpBikYw9"
  })

  numberOfDogs:number = 15;
  page = (DOGS_FETCHED + this.numberOfDogs) / this.numberOfDogs - 1;

  url: string =  `https://api.thedogapi.com/v1/breeds?page=${this.page}&order=desc&limit=${this.numberOfDogs}`;

  constructor(private http: HttpClient) { }

  fetchDogsFromApi(): Observable<Dog[]> {
    return this.http.get<DogInfo[]>(this.url, {headers: this.httpHeaders});
  }

  fetchDogInfoFromApi(): Observable<DogInfo[]> {
    return this.http.get<DogInfo[]>(this.url, {headers: this.httpHeaders});
  }

  // mapToDogs(): Observable<Dog[]> {
  // return this.http.get<Dog[]>(this.url, {headers: this.httpHeaders}).pipe(
  //     map((dog: Dog[]) => dog.map(pes => pes.url))
  //   );
  // }
}
