import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserplaylistComponent } from './userplaylist/userplaylist.component';
import { YoutubeapiComponent } from './youtubeapi/youtubeapi.component';

import { PostsService } from './posts.service';
import { PostsComponent } from './posts/posts.component';

const appRoutes: Routes = [
  // {
  //   path: 'home',
  //   component: HomepageComponent,
  // },
  {
    path: 'playlist',
    component: UserplaylistComponent,
  },
  {
    path: 'youtubeapi',
    component: YoutubeapiComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserplaylistComponent,
    YoutubeapiComponent,
    PostsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) // Add routes to the app

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
