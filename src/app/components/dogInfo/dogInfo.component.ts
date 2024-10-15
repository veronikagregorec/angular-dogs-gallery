import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-dog-info',
  templateUrl: './dogInfo.component.html',
  styleUrls: ['./dogInfo.component.css']
})
export class DogInfoComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  doggyId:any;
  pes: any = {};
  dogInfoSub: any;

  ngOnInit() {
    this.dogInfoSub = this.route.paramMap.subscribe((param) => {
      this.doggyId = param.get('id');
      this.httpService.DOGS$.subscribe((newDogs:any) => {
        this.pes = newDogs.filter((dog:any)=>dog.id == this.doggyId)[0]
      })
    });
  }

  ngOnDestroy() {
    this.dogInfoSub.unsubscribe();
  }
}
