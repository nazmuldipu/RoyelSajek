import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <navbar [transparent]="transparent"></navbar>
    <router-outlet></router-outlet>
  `
})
export class HomeComponent {
  transparent = true;

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll > 10) {
      this.transparent = false;
    } else {
      this.transparent = true;
    }
  }
}
