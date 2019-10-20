import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from 'src/shared/models/user.model';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  hotelId: number;
  baseUrl: string;
  public user: User;
  authorities = [];
  errorMessage = '';

  constructor(private http: HttpClient, private activeRoute: ActivatedRoute, 
    private router: Router, private _cookieService:CookieService) {
    this.baseUrl = `${environment.PROTOCOL}://${environment.SERVER}${environment.PORT}/`;
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
    // this.getUserCart(data.id);
    this.router.navigateByUrl(returnUrl);
  }
}
