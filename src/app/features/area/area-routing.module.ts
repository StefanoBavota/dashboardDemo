import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaEditPageComponent } from './components/area-edit-page/area-edit-page.component';
import { AreaListPageComponent } from './components/area-list-page/area-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: AreaListPageComponent
  },
  {
    path: 'edit/:id',
    component: AreaEditPageComponent
  },
  {
    path: 'new',
    component: AreaEditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }
