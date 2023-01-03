import { AfterViewInit, Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-dogsList',
  templateUrl: './dogsList.component.html',
  styleUrls: ['./dogsList.component.css']
})
export class DogsListComponent implements AfterViewInit {

  constructor(private httpService: HttpService) {}

  doggos: any = [];
  
  onFetchDogsFromApi(): any {
    this.httpService.fetchDogsFromApi().subscribe(
      (response) => this.doggos = [...this.doggos, ...response]
    );
  }

  getDogs() {
    this.onFetchDogsFromApi();
  }

  ngAfterViewInit(): void {
    this.onFetchDogsFromApi();
  }
}
