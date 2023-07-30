import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from '../auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FollowingComponent } from './following/following.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        canActivateChild: [authGuard],
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'following', component: FollowingComponent },
          { path: 'edit-profile', component: EditProfileComponent },
          { path: '', component: DashboardComponent },

        ]
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
