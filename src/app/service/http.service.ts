import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DogInfo } from '../interface/dogInfo';

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

  constructor(private http: HttpClient) {}

  fetchDogsFromApi(): Observable<DogInfo[]> {
    const page = (this.DOGS_FETCHED + this.DOGS_TO_FETCH) / this.DOGS_TO_FETCH - 1;

    const url = `https://api.thedogapi.com/v1/breeds?page=${page}&order=desc&limit=${this.DOGS_TO_FETCH}`;

    return this.http.get<DogInfo[]>(url, { headers: this.httpHeaders })
      .pipe((response) => {
        this.DOGS_FETCHED += this.DOGS_TO_FETCH;
        return response;
      });
  }
}
