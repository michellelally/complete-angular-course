import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


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
      });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.ps.createPost(post)
      .subscribe(
        response => {
        post['id'] = response.json().id;
      }, 
      (error: AppError) => {
        if (error instanceof BadInput){ 
          //this.form.setErrors(error.originalError);       
        } 
        else throw error;
      })
    this.posts.splice(0, 0, post);
  }

  updatePost(post) {
    this.ps.updatePost(post)
      .subscribe(
        response => {
        console.log(response.json());
      });
  }

  deletePost(post) {
    this.ps.deletePost('99999/99999')
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
      }, 
      (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('Post has already been deleted')
        else throw error;
      })
  }





}
