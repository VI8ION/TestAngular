import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { DataService } from './services/data.service';
import { AppErrorHandler } from './common/app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: PostsComponent },
    ])
  ],
  providers: [ DataService,
               PostService,
             { provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
