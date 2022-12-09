import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '../interface/dog';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = "assets/dogs.json";

  constructor(private http: HttpClient) { }

  getFirstFifteenDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.url);
    }
  }