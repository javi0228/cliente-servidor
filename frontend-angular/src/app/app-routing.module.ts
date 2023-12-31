import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  // {
  //   path: '**',
  //   component:PageNotFoundComponent
  // },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
