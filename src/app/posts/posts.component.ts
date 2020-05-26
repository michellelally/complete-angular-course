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

  constructor(private ps: PostService) { }

  ngOnInit() {
    this.ps.getAll().subscribe(
      posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.posts.splice(0, 0, post);
    input.value = '';

    this.ps.create(post)
      .subscribe(
        newPost => post['id'] = newPost.json().id,
        (error: AppError) => {
          this.posts.splice(0, 1);
          if (error instanceof BadInput) {
            //this.form.setErrors(error.originalError);       
          }
          else throw error;
        })

  }

  updatePost(post) {
    this.ps.update(post)
      .subscribe(
        updatedPost => console.log(updatedPost.json())
      );
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.ps.delete(post.id)
      .subscribe(
        null,
        (error: AppError) => {
          this.posts.splice(index, 0, post);
          if (error instanceof NotFoundError)
            alert('Post has already been deleted')
          else throw error;
        })
  }

}
