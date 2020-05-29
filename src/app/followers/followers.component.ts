import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  users: any[];

  constructor(private service: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])

    this.service.getAll().subscribe(
      users => this.users = users);

    this.route.paramMap
      .subscribe(params => {

      });

    this.route.queryParamMap
      .subscribe(params => {

      });
  }




}
