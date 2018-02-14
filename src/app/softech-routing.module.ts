import { UserCreateComponent } from './User/user-create/user-create.component';
import { UserViewComponent } from './User/user-view/user-view.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboard/users',
    component: UserListComponent
  },
  {
    path: 'dashboard/users/create',
    component: UserCreateComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class SoftechRoutingModule {}
