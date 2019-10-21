import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  show = false;

  constructor(public auth: AuthService) {}

  toggleCollapse() {
    this.show = !this.show;
  }

  logout() {
    this.auth.clear();
  }
}
