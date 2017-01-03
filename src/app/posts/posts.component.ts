import { Component, OnInit } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { Post } from './post';

@Component({
  selector: 'ts-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newPost: Post;

  ngOnChanges()
  {
  	console.log("change detected!");
  }




}
