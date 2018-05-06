import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output() eventClicked: EventEmitter<any> = new EventEmitter<Event>();
  @Output() eventSearch: EventEmitter<any> = new EventEmitter<Event>();
  name = '';
  filtered: any;
  allBeers: any;
  isDetail: any;
  constructor (private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {

    const id = route.snapshot.paramMap.get('id');
    if (!id) {
      this.getBeers(event);
    }
    this.isDetail = id;
  }

  ngOnInit() {
  }

  onkeyupEV(event: any) {
    this.name = event.target.value;
  }

  getBeers(event: Event): void {
    this.httpClient.get('https://api.punkapi.com/v2/beers?page=1&per_page=25')
      .subscribe(
        (data: any[]) => {
          if (data.length > 0) {
            this.allBeers = data;
            this.eventClicked.emit(data);
          }
        }
      );
  }

  displayBeers(event: Event): void {
    this.httpClient.get(`https://api.punkapi.com/v2/beers?beer_name=${this.name}`)
      .subscribe(
        (data: any[]) => {
          if (data.length > 0) {
            this.eventSearch.emit(data);
          }
        }
      );
  }
  clearSearch() {
    this.filtered = this.allBeers;
    this.eventClicked.emit(this.allBeers);
  }

  backToHome() {
    this.router.navigate(['']);
  }
}
