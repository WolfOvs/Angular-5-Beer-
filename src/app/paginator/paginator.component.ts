import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Output() clickChangePage: EventEmitter<any> = new EventEmitter<Event>();
  pageCurrent: any;
  pages = [1, 2, 3, 4];
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.pageCurrent = 1;
  }

  changePage(page) {
    console.log(page);
    this.pageCurrent = page;
    this.httpClient.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=25`)
      .subscribe(
        (data: any[]) => {
          if (data.length > 0) {
            console.log('data', data);
            this.clickChangePage.emit(data);
            window.scrollTo(0, 0);
          }
        }
      );
  }
}
