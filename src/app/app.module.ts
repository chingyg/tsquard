import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent,NavigationBarComponent,BannerComponent } from './header';
import { JulietsaintclairPdfComponent } from './julietsaintclair-pdf/julietsaintclair-pdf.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostFormComponent } from './posts/post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    BannerComponent,
    HeaderComponent,
    NavigationBarComponent,
    JulietsaintclairPdfComponent,
    PostListComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
