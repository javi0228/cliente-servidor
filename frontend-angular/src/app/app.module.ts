import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FollowingComponent } from './home/following/following.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FollowingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
