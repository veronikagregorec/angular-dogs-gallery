import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DogInfo } from '../interface/dogInfo';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  httpHeaders = new HttpHeaders({
    Authorization: 'live_yOnbrVsZCcsffeeisScz8EByvFsHEtIubmS7wtwC8jyfu0KNQzBDjA8ZhpBikYw9',
  });

  DOGS_FETCHED = 0;
  DOGS_TO_FETCH = 15;
  DOGS$: any = new BehaviorSubject<DogInfo[]>([]);

  constructor(private http: HttpClient) {}

  fetchDogsFromApi(): any {
    const page = (this.DOGS_FETCHED + this.DOGS_TO_FETCH) / this.DOGS_TO_FETCH - 1;

    const url = `https://api.thedogapi.com/v1/breeds?page=${page}&order=desc&limit=${this.DOGS_TO_FETCH}`;

    return this.http.get<any>(url, { headers: this.httpHeaders })
      .pipe(tap((response: any) => {
        this.DOGS_FETCHED += this.DOGS_TO_FETCH;
        const newDogs = [...this.DOGS$.getValue(), ...response]
        this.DOGS$.next(newDogs);
      }));
  }
}
