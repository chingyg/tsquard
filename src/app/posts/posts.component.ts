import { Component, OnInit } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostService } from './shared';

@Component({
  selector: 'ts-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[PostService]
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) {    
  }

  ngOnInit() {
  }



  ngOnChanges()
  {
  	console.log("change detected!");
  }




}
