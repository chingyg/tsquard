export class Post {

	constructor(private author:string,private content: string, private likes: number, private image:string){
		
	}

	getContent()
	{
		return this.content;
	}
}
