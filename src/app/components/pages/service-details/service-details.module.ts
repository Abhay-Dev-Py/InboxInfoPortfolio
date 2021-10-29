import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ServiceDetailsRoutingModule } from './service-details-routing.module';
import { ServiceDetailsComponent } from './service-details.component';
import { PlansComponent } from './plans/plans.component';
import { TextblockComponent } from './textblock/textblock.component';
import { VideoblockComponent } from './videoblock/videoblock.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [ServiceDetailsComponent,  PlansComponent, TextblockComponent, VideoblockComponent],
  imports: [
    CommonModule,
    ServiceDetailsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ServiceDetailsModule { }
