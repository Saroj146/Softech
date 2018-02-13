import { UserCreateComponent } from './User/user-create/user-create.component';
import { UserViewComponent } from './User/user-view/user-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UserViewComponent
  },
  {
    path: 'users/create',
    component: UserCreateComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class SoftechRoutingModule {}
