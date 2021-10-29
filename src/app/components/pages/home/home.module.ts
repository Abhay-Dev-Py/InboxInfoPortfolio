import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { WhyusComponent } from './whyus/whyus.component';
import { FaqsComponent } from './faqs/faqs.component';
import { CountdownModule } from 'ng2-countdown-timer';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';
import { CareersComponent } from '../careers/careers.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, ServicesComponent, TeamComponent,WhyusComponent, FaqsComponent, TermsConditionsComponent, CareersComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountdownModule
  ]
})
export class HomeModule { }
