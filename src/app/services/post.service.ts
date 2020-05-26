import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(catchError(this.errorHandler))
  }

  updatePost(post) {
    // put is to send the whole object to the server 
    //this.http.put(this.url, JSON.stringify(post))
    // patch is used to send a few properties of an object to server
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
    .pipe(catchError(this.errorHandler))
  }

  deletePost(id) {
      console.log(id);
      return this.http.delete(this.url + '/' + id)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    console.log("ERROR HANDLER STATUS: " + error.status)
    if (error.status === 404)
      return throwError(new NotFoundError());
    else if (error.status === 400)
      return throwError(new BadInput(error));
    return throwError(new AppError(error));
  }



}
