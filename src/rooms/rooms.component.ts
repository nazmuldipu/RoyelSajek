import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `
  // templateUrl: './rooms.component.html',
  // styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
