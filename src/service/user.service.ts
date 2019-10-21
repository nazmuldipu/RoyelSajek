import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/shared/models/user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string;
  serviceUrl = 'api/v1/users';

  constructor(private http: HttpClient,private router: Router) {
    this.baseUrl = `${environment.PROTOCOL}://${environment.SERVER}${environment.PORT}/`;
   }

  userRegistration(user: User){
    console.log(user);
    // const em = user.email ? '&email=' + user.email : '';
    const param = `?name=${user.name}&email=${user.email}&phoneNumber=${user.phoneNumber}&password=${user.password}`;
    const url = this.baseUrl + 'register' + param;
    this.http.post<User>(url, { responseType: 'json' })
      .subscribe(
        data => {
          console.log('registration success');
          this.router.navigateByUrl('/login');
        },
        error => {
          console.log('Registration Failed' + error.status);
        }
      );
  }
}
