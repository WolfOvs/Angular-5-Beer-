import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  detailBeer: any;
  beer: any;
  constructor(private route: ActivatedRoute, private httpClient: HttpClient, public dataService: DataService) {
    const id = route.snapshot.paramMap.get('id');

    this.detailBeer = this.dataService.serviceData;
    if (!this.detailBeer) {
      this.getBeerDetail(id);
    }
  }

  ngOnInit() {
  }

  getBeerDetail(id) {
    this.httpClient.get(`https://api.punkapi.com/v2/beers/${id}`)
      .subscribe(
        (data: any[]) => {
          if (data.length > 0) {
            this.detailBeer = data[0];
          }
        }
      );
  }
}
