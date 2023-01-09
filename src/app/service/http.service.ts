import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DogInfo } from '../interface/dogInfo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // url: string = "assets/dogs.json";

  httpHeaders = new HttpHeaders({
    Authorization: 'live_yOnbrVsZCcsffeeisScz8EByvFsHEtIubmS7wtwC8jyfu0KNQzBDjA8ZhpBikYw9',
  });

  DOGS_FETCHED = 0;
  DOGS_TO_FETCH = 15;
  DOGS:DogInfo[] | any = [];

  constructor(private http: HttpClient) {}

  fetchDogsFromApi(): any {
    const page = (this.DOGS_FETCHED + this.DOGS_TO_FETCH) / this.DOGS_TO_FETCH - 1;

    const url = `https://api.thedogapi.com/v1/breeds?page=${page}&order=desc&limit=${this.DOGS_TO_FETCH}`;

    return this.http.get<any>(url, { headers: this.httpHeaders })
      .pipe(map((response: any) => {
        this.DOGS_FETCHED += this.DOGS_TO_FETCH;
        this.DOGS = [...this.DOGS, ...response];
        return this.DOGS;
      }));
  }

  returnDogs(): DogInfo[] {
    return this.DOGS;
  }
}
