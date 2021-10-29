import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BlogsidebarComponent } from './blogsidebar/blogsidebar.component';




@NgModule({
  declarations: [HeaderComponent,FooterComponent,BreadcrumbComponent,BlogsidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule,
    SlickCarouselModule
  ],
  exports: [HeaderComponent,FooterComponent,BreadcrumbComponent,BlogsidebarComponent]
})
export class SharedModule { }
