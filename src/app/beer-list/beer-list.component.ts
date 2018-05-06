import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  @Input() event: Event;
  constructor(private router: Router, public dataService: DataService) {
  }

  ngOnInit() {
  }

  goToDetailPage(beer, id) {
    this.router.navigate(['detail', id]);
    this.dataService.serviceData = beer;

  }

   truncateLabel(string, n) {
    return (string.length > n) ? `${string.substr(0, n - 1)}${'...'}` : string;
  }

}
