import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public clickedEvent: Event;
  flagPaginator: any;
  ngOnInit() {
    this.flagPaginator = true;
  }
  childEventClicked(event: Event) {
    this.clickedEvent = event;
    this.flagPaginator = true;
  }
  childChangedPage(event: Event) {
    this.clickedEvent = event;
  }
  childEventClickedSearch(event: Event) {
    this.clickedEvent = event;
    this.flagPaginator = false;
  }
}
