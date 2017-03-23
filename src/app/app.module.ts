import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { routing } from './app.routing';
import { JulietsaintclairPdfComponent } from './julietsaintclair-pdf/julietsaintclair-pdf.component';
import { HartaComponent } from './harta/harta.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostFormComponent,
    PostListComponent,
    JulietsaintclairPdfComponent,
    HartaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
