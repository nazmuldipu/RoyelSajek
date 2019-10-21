import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CookieService } from 'ngx-cookie';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Booking } from 'src/shared/models/booking.model';
import { User } from 'src/shared/models/user.model';
import { BookingService } from './booking.service';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  hotelId: number;
  baseUrl: string;
  
  public user: User;
  authorities = [];
  errorMessage = '';
  urlFlag = true;

  constructor(private http: HttpClient, private activeRoute: ActivatedRoute, 
    private router: Router, private _cookieService:CookieService,
    private bookingService: BookingService) {
    this.baseUrl = `${environment.PROTOCOL}://${environment.SERVER}${environment.PORT}/`;

    if (this.isAuthenticated()) {
      this.user = JSON.parse(_cookieService.get('user'));
      this.authorities = JSON.parse(_cookieService.get('authorities'));
    }
  }

  getUserId(): number {
    return this.user.id;
  }

  isAuthenticated(): boolean {
    const access_token = this._cookieService.get('access_token');
    const refresh_token = this._cookieService.get('refresh_token');
    if (!access_token && !!refresh_token && this.urlFlag) {
      this.obtainAccessTokenByRefreshToken();
      return false;
    }
    return !!access_token;
  }

  authenticate(username: string, password: string): Observable<any> {
    let returnUrl =
      this.activeRoute.snapshot.queryParamMap.get("returnUrl") || "/";
    localStorage.setItem("returnUrl", returnUrl);
    
    const params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('client_id', environment.client_id);
    params.append('client_secret', environment.client_secret);
    params.append('username', username);
    params.append('password', password);

    const url = this.baseUrl + 'oauth/token?' + params.toString();
    
    return this.http.post(url, { responseType: 'json' });
  }

  async obtainAccessTokenByRefreshToken() {
    /*
     * Using urlFlag as a semaphorse for exclusive execution.
     * whenever access token expires all method who are using access_token will
     * hit this method. but this will execute only once;
     */
    if (this.urlFlag) {
      this.urlFlag = false;
      // console.log('obtaining access token by refresh token');
      const params = new URLSearchParams();
      params.append('grant_type', 'refresh_token');
      params.append('refresh_token', this._cookieService.get('refresh_token'));
      params.append('client_id', environment.client_id);
      params.append('client_secret', environment.client_secret);

      const url = this.baseUrl + 'oauth/token?' + params.toString();
      await this.http
        .get(url, { responseType: 'json' })
        .subscribe(
          data => {
            this.saveToken(data, '');

            window.location.reload();
            // console.lo
            this.urlFlag = true;
          },
          error => {
            this._cookieService.removeAll();
            this.router.navigateByUrl('/login');
            console.log('obst error', error);
          }
        );
    }
  }

  saveToken(data, url) {
    const value = {
      name: data.name,
      username: data.username,
      id: data.id,
      phoneNumber: data.phone
    } as User;

    // Save username and roles
    this.user = value;

    this.authorities = [];
    for (let i = 0; i < data.authorities.length; i++) {
      this.authorities.push(data.authorities[i].authority);
    }

    const exDate = new Date();
    exDate.setTime(exDate.getTime() + data.expires_in * 1000);
    this._cookieService.put('access_token', data.access_token, { expires: exDate });
    exDate.setTime(exDate.getTime() + 14 * 24 * 60 * 60 * 1000); // set refresh token for one day
    this._cookieService.put('refresh_token', data.refresh_token, { expires: exDate });
    this._cookieService.putObject('user', this.user, { expires: exDate });
    this._cookieService.putObject('authorities', this.authorities, { expires: exDate });
    let returnUrl = localStorage.getItem('returnUrl');
    this.getUserCart(data.id);
    this.router.navigateByUrl(returnUrl);
  }

  async getUserCart(userId: number) {
    await this.bookingService.getMyCart(userId).subscribe(data => {
      this.bookingService.cart = data as Booking;
      this.bookingService._cartSource.next(data);
    });
  }

  clear() {
    this._cookieService.removeAll();
    localStorage.clear();
    this.user = null;
    this.authorities = [];
    this.router.navigateByUrl('/login');
  }
}
