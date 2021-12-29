import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbLayoutModule, NbSelectModule, NbToggleModule } from '@nebular/theme';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { FormsModule } from '@angular/forms';
import { OverviewRoutingModule } from './overview-routing.module';



@NgModule({
  declarations: [
    OverviewPageComponent
  ],
  imports: [
    CommonModule,
    NbToggleModule,
    NbLayoutModule,
    NbCardModule,
    NbSelectModule,
    NgxSliderModule,
    FormsModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule { }
