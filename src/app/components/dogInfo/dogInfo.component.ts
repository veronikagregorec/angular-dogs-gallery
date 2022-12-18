import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-dog-info',
  templateUrl: './dogInfo.component.html',
  styleUrls: ['./dogInfo.component.css']
})
export class DogInfoComponent implements AfterViewInit, OnInit {

  pes: any
  dogInfoId: any;

  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  @Input() doggy: any;

  onfetchDogInfoFromApi(): any {
    this.httpService.fetchDogInfoFromApi().subscribe(
      (response) => this.doggy = response
    );
  }

  ngOnInit() {
    //this.dogInfoId = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe((param) => {
      this.dogInfoId = param.get('id');
      // this.pes = this.httpService.fetchDogInfoFromApi
    })
  }

  ngAfterViewInit() {
    this.onfetchDogInfoFromApi();
  }
}
