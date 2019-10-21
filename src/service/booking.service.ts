import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CookieService } from 'ngx-cookie';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Booking } from 'src/shared/models/booking.model';

@Injectable({
  providedIn: "root"
})
export class BookingService {
  hotelId: number;
  serviceUrl = 'api/v1/bookings';
  baseUrl: string;

  _cartSource = new BehaviorSubject<Booking>(new Booking());
  cart$ = this._cartSource.asObservable();
  cart: Booking;

  constructor(private http: HttpClient, private _cookieService:CookieService) {
    this.hotelId = environment.hotelsWaveId;
    this.baseUrl = `${environment.PROTOCOL}://${environment.SERVER}${environment.PORT}/`;
  }

  // Whenever user click to book a room, this room will be added to own cart.
  addToCart( userId: number, roomId: number, checkinDate, checkoutDate ): Observable<Booking> {
    const access_token = this._cookieService.get('access_token')
    const param = `roomId=${roomId}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&access_token=${access_token}`;
    const url = `${this.baseUrl}${this.serviceUrl}/cart/add/${userId}?${param}`;
    return this.http.post<Booking>(url, { responseType: 'json' });
  }

  // Get my booking cart. this method should call just after user login
  getMyCart(userId: number): Observable<Booking> {
    const access_token = this._cookieService.get('access_token')
    const param = `?access_token=${access_token}`;
    const url = `${this.baseUrl}${this.serviceUrl}/myCart/${userId}${param}`;
    return this.http.get<Booking>(url, { responseType: 'json' });
  }
}
