import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/shared/models/booking.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { BookingService } from 'src/service/booking.service';
import { SubBooking } from 'src/shared/models/sub-booking.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Booking;
  totalDiscount: number = 0;
  paymentUrl;
  loading = false;
  showOfflineMessage = false;
  
  constructor(private bookingService: BookingService, private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    console.log('Getting');
    this.getMyCart();
  }

  async getMyCart() {
    await this.bookingService
      .getMyCart(this.authService.getUserId())
      .subscribe(data => {
        this.cart = data;
        if (data && data.subBookingList) {
          this.cart.subBookingList.forEach(sub => {
            //TODO:I
            // this.totalDiscount += sub.totalDiscount;
          });
        }
      });
  }

  removeRoom(index: number) {
    const sub = this.cart.subBookingList[index] as SubBooking;
    const date = new Date(sub.date);
    const d = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.bookingService
      .removeFromCart(this.authService.getUserId(), sub.room.id, d)
      .subscribe(data => {
        this.cart = data;
      });
  }

  onConfirmBooking() {
    this.loading = true;

    this.bookingService
      .confirmUserBooking(this.authService.getUserId())
      .subscribe(data => {
        if (this.validateURL(data.response)) {
          this.paymentUrl = data.response;
        } else {
          this.showOfflineMessage = true;
        }
        this.loading = false;
      });
  }

  validateURL(str) {
    var pattern = new RegExp(
      '^((https?:)?\\/\\/)?' + // protocol
      '(?:\\S+(?::\\S*)?@)?' + // authentication
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locater

    if (!pattern.test(str)) {
      return false;
    } else {
      return true;
    }
  }

}
