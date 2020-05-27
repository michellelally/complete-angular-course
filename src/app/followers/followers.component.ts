import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  users: any[];

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      users => this.users = users);
  }




}
