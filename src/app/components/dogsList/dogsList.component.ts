import { Component, OnInit} from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dogsList',
  templateUrl: './dogsList.component.html',
  styleUrls: ['./dogsList.component.css']
})
export class DogsListComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  doggos: any = new BehaviorSubject([]);
  
  onFetchDogsFromApi(): any {
    this.httpService.fetchDogsFromApi().pipe(take(1)).subscribe()
  }

  getDogs() {
    this.onFetchDogsFromApi();
  }

  ngOnInit(): void {
    this.httpService.DOGS$.subscribe(
      (newDogs:any) => {
        this.doggos = newDogs
      }
    )
  }

  trackDog(index : number, dog: any) {
    return dog ? dog.id : undefined;
  }
}
