import { Component, OnInit, Input } from '@angular/core';
import { Post, PostService } from '../shared';

@Component({
    selector: 'ts-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    private postList: Post[];

    constructor(private postService: PostService) {
         
    }

    ngOnInit() {
        this.postService.dataEmitter.subscribe(
            data => this.postList = data);
        this.postService.generateDummyData();
        
    }
    @Input() newPost: Post;

 

    test(testData: Post[])
    {
        console.log(testData[0].getContent());
    }


    ngOnChanges()
    {
        // console.log("Change detected, this is post-list");
        // this.postList.push(this.newPost);
        // // this.newPost = new Post('','',0);
        // this.newPost = null;
    }

    // addPost(event: any)
    // {
    //     console.log(event);
    // }

}
