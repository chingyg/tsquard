import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'ts-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() newPost: Post;

  postList: Post[] = [
  {
  	author:'chingyg',
  	content: 'weee',
  	likes: 0
  },
  {
	author:'saw',
  	content: 'woololo',
  	likes: 1
  }];



  
  ngOnChanges()
  {
  	console.log("Change detected, this is post-list");
  	this.postList.push(this.newPost);
  	// this.newPost = new Post('','',0);
  	this.newPost = null;
  }

  addPost(event: any)
  {
  	console.log(event);
  }

}