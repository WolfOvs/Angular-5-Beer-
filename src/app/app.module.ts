import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { PaginatorComponent } from './paginator/paginator.component';
import { DataService } from './data.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BeerListComponent,
    routingComponents,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
