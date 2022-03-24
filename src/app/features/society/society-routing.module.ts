import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocietyEditPageComponent } from './components/society-edit-page/society-edit-page.component';
import { SocietyListPageComponent } from './components/society-list-page/society-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: SocietyListPageComponent,
  },
  {
    path: ':id',
    component: SocietyEditPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietyRoutingModule {}
