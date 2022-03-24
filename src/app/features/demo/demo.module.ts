import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, DemoRoutingModule, CoreModule],
})
export class DemoModule {}
