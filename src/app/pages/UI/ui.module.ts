import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIRoutingModule } from './ui-routing.module';
import { ButtonsComponent } from '../UI/buttons/buttons.component';
import { GeneralComponent } from '../UI/general/general.component';
import { IconsComponent } from '../UI/icons/icons.component';
import { ModalsComponent } from '../UI/modals/modals.component';
import { SlidersComponent } from '../UI/sliders/sliders.component';
import { TimelineComponent } from '../UI/timeline/timeline.component';

@NgModule({
  imports: [
    CommonModule,
    UIRoutingModule
  ],
  declarations: [ButtonsComponent, GeneralComponent, IconsComponent, ModalsComponent, SlidersComponent, TimelineComponent]
})
export class UIModule { }
