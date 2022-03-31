import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeaturesComponent } from './features.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
})
export class FeatureModule {}
