import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonGroupModule, NbCardModule, NbIconModule, NbLayoutModule, NbSelectModule, NbTabsetModule, NbToggleModule } from '@nebular/theme';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { FormsModule } from '@angular/forms';
import { OverviewRoutingModule } from './overview-routing.module';
import { ColorChromeModule   } from 'ngx-color/chrome';
import { NbEvaIconsModule } from '@nebular/eva-icons';



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
    NbTabsetModule,
    NbButtonGroupModule,
    NbIconModule,
    NbEvaIconsModule,
    NgxSliderModule,
    FormsModule,
    OverviewRoutingModule,
    ColorChromeModule 
  ]
})
export class OverviewModule { }
