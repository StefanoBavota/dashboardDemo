import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditPageComponent } from './components/user-edit-page/user-edit-page.component';
import { UserListPageComponent } from './components/user-list-page/user-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserListPageComponent
  },
  {
    path: 'edit/:id',
    component: UserEditPageComponent
  },
  {
    path: 'new',
    component: UserEditPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUserRoutingModule { }
