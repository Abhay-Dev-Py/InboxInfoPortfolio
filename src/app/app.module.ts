import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PreloaderComponent } from './preloader/preloader.component';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BreadcrumbModule } from 'angular-crumbs';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { CountdownModule } from "ng2-countdown-timer";


@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BreadcrumbModule,
    SlickCarouselModule,
    NgxPaginationModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
