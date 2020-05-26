import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';


export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
    .pipe(catchError(this.errorHandler), 
    map(response => response.json()));
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(postMessage))
      .pipe(catchError(this.errorHandler),
      map(response => response))
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    .pipe(catchError(this.errorHandler),
    map(response => response))
  }

  delete(id) {
      return this.http.delete(this.url + '/' + id)
      .pipe(catchError(this.errorHandler), 
      map(response => response))
  }

  private errorHandler(error: Response) {
    console.log("ERROR HANDLER STATUS: " + error.status)
    if (error.status === 404)
      return throwError(new NotFoundError());
    else if (error.status === 400)
      return throwError(new BadInput(error));
    return throwError(new AppError(error));
  }

}
