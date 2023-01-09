import { Component, OnInit} from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-dogsList',
  templateUrl: './dogsList.component.html',
  styleUrls: ['./dogsList.component.css']
})
export class DogsListComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  doggos: any = [];
  
  onFetchDogsFromApi(): any {
    this.httpService.fetchDogsFromApi().subscribe(
      (response:any) => {
        this.doggos = response
      }
    );
  }

  getDogs() {
    this.onFetchDogsFromApi();
  }

  ngOnInit(): void {
    this.onFetchDogsFromApi();
    this.doggos.next();
  }
}
