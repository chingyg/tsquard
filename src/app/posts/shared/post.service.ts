import { Injectable, EventEmitter } from '@angular/core';
import { Post } from './';

@Injectable()
export class PostService {
    //Fields
    dataEmitter = new EventEmitter<Post[]>();
    private data: Post[] = [];

    constructor() { }

    addPost(incomingPost: Post){
        this.data.push(incomingPost);
    }

    generateDummyData(){
        this.data = [
        new Post('ching','testing my POST component',0,"http://mikatan.goodsmile.info/en/wp-content/uploads/-000//1/o0515070313883853606.jpg"),
        new Post('steven','i like miku. OMG ITS MIKUU. She is my favorite idol. my Waifu', 0,"http://www.pocketonline.net/g2engine/d/61654-1/miku.png")];
        console.log("@@@ Generated dummy data @@@");

        this.emitData();
    }

    getAllPosts(){
        return this.data;
    }

    getPost(index: number){
        return this.data[index];
    }

    removePost(index: number){
        if(index > -1)
        {
            this.data.splice(index,1);
        }
    }

    emitData(){
        this.dataEmitter.emit(this.data);
    }
}
