import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { BookingService } from 'src/service/booking.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {
  @Input() fixed: boolean;
  @Input() transparent: boolean;

  show = false;
  smallCart = true;

  constructor(public auth: AuthService, private bookingService: BookingService) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.auth.getUserCart(this.auth.getUserId());
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.transparent) {
      console.log("Changed " + this.transparent);
    }
  }

  toggleCollapse() {
    this.show = !this.show;
  }

  logout() {
    this.auth.clear();
  }

  onCartClick() {
    this.bookingService.cart$.subscribe(data => {
      console.log(data);
      if (data.total > 0) {
        this.smallCart = false;
      }
    });
  }

  getMyStyles() {
    if (!this.fixed) {
      let myStyles = {
        top: 85 + 'px'
      };
      return myStyles;
    }
  }
}
