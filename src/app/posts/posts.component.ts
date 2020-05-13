import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent  {

  posts: any[];

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    http.get(this.url)
    .subscribe(response => {
      this.posts = response.json();
    })
  }

  createPost(input: HTMLInputElement){
    let post:any = { title: input.value };
    input.value = '';
;
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response => {
      post.id = response.json().id;
      this.posts.splice(0, 0, post);

    })
  }

  updatePost(post){
    // put is to send the whole object to the server 
    //this.http.put(this.url, JSON.stringify(post))
    // patch is used to send a few properties of an object to server
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response.json());
      })

  }

  deletePost(post){
    // put is to send the whole object to the server 
    //this.http.put(this.url, JSON.stringify(post))
    // patch is used to send a few properties of an object to server
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })

  }


}
