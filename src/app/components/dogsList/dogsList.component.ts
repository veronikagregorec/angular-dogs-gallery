import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dogsList',
  templateUrl: './dogsList.component.html',
  styleUrls: ['./dogsList.component.css']
})
export class DogsListComponent implements AfterViewInit{

  constructor(private httpService: HttpService, private router: Router) { }

  @Output() sendEvent = new EventEmitter<any>();

  @Input() doggos: any;

  onFetchDogsFromApi(): any {
    this.httpService.fetchDogsFromApi().subscribe(
      (response) => this.doggos = response
    );
  }

  getDogs(): any{
    // this.httpService.mapToDogs().subscribe(
    //   (response) => this.doggos = response
    //   //this.onFetchDogsFromApi();
    // );
  }

  onSelect(item: any)  {
    this.router.navigate(['/home', item.id])
  }

  sendFetchMoreDogs() {
    this.sendEvent.emit(this.getDogs());
  }

  ngAfterViewInit(): void {
    this.onFetchDogsFromApi();
    this.getDogs();
  }
}
