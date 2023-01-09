import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-dog-info',
  templateUrl: './dogInfo.component.html',
  styleUrls: ['./dogInfo.component.css']
})
export class DogInfoComponent implements OnInit{

  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  doggies: any = [];
  doggyId:any;
  pes: any = {};

  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      this.doggyId = param.get('id');
      this.pes = this.httpService.returnDogs().filter((x:any)=>x.id == this.doggyId)[0]
    });
  }
}
