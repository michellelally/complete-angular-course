import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends DataService{

  constructor(http: Http) { 
    super('https://api.github.com/users/michellelally/followers', http);
  }
}
