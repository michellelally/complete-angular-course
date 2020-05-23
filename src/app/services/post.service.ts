import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post){
    return this.http.post(this.url, JSON.stringify(post))

  }

  updatePost(post){
    // put is to send the whole object to the server 
    //this.http.put(this.url, JSON.stringify(post))
    // patch is used to send a few properties of an object to server
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))

  }

  deletePost(id){
    return this.http.delete(this.url + '/' + id)


  }
}
