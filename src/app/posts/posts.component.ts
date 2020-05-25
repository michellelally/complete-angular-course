import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private ps: PostService) {

  }

  ngOnInit() {
    this.ps.getPosts().subscribe(
      response => {
        this.posts = response.json();
      }, error => {
        alert('An unexpected error occured');
        console.log(error);
      }
    )
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.ps.createPost(post)
      .subscribe(
        response => {
        post.id = response.json().id;
      }, 
      error => {
        alert('An unexpected error occured');
        console.log(error);
      })
    this.posts.splice(0, 0, post);
  }

  updatePost(post) {
    this.ps.updatePost(post)
      .subscribe(
        response => {
        console.log(response.json());
      }, 
      error => {
        alert('An unexpected error occured');
        console.log(error);
      })
  }

  deletePost(post) {
    this.ps.deletePost(post.id)
      .subscribe(
        response => {
        console.log(response.json());
      }, 
      error => {
        alert('An unexpected error occured');
        console.log(error);
      })
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
  }





}