import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { JulietsaintclairPdfComponent } from './julietsaintclair-pdf/julietsaintclair-pdf.component';

const APP_ROUTES: Routes = [
{ path: 'user/ching', component: PostsComponent },
{ path: 'user/saw', component: JulietsaintclairPdfComponent }];

export const routing = RouterModule.forRoot(APP_ROUTES);