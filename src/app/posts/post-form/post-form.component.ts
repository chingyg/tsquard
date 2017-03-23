import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post, PostService } from '../shared';

@Component({
  selector: 'ts-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
@Input() inputAuthor: string;
  constructor(postService: PostService) { }

  ngOnInit() {
  }

  clearInputs()
  {

  }

  submitPost()
  {

  }

  // @Input() post = new Post('','',0);
  // @Input() wee: string;

  // postName: string;
  // postContent: string;

  //@Output() newPost = new EventEmitter<Post>();

 // onPost(author:HTMLInputElement, content: HTMLInputElement)
  //{
  //	console.log(author);
  //	console.log(content);
  	// this.post.author = author.value;
  	// this.post.content = content.value;
  	// this.post.likes=0;
  	//console.log(this.post);

  	//Reset input fields
  	// author.value=null;
  	// content.value=null;

  	//Send event outside
  	// this.newPost.emit(this.post);
 // }
  	
  
}
