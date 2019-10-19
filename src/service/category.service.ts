import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RoomCategory } from 'src/shared/models/room.category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  hotelId: number;
  serviceUrl = 'api/v1/category';
  baseUrl: string;
  imageUrl;

  constructor(private http: HttpClient) {
    this.hotelId = environment.hotelsWaveId;
    this.baseUrl = `${environment.PROTOCOL}://${environment.SERVER}${environment.PORT}/`;
    this.imageUrl = this.baseUrl + this.serviceUrl;
  }

  getCategoryImageUrls(categoryId: number): Observable<any> {
    const url = `${this.baseUrl}${this.serviceUrl}/${categoryId}/images/urls`;
    return this.http.get(url, { responseType: 'json' });
  }

  getCategoryList(): Observable<RoomCategory[]> {
    const url = `${this.baseUrl}${this.serviceUrl}/all/${this.hotelId}`;
    return this.http.get<RoomCategory[]>(url, { responseType: 'json' });
  }
}
