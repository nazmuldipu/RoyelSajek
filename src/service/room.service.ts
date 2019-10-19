import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/shared/models/room.model';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  hotelId: number;
  serviceUrl = 'api/v1/rooms';
  baseUrl: string;
  imageUrl;

  constructor(private http: HttpClient) {
    this.hotelId = environment.hotelsWaveId;
    this.baseUrl = `${environment.PROTOCOL}://${environment.SERVER}${environment.PORT}/`;
    this.imageUrl = this.baseUrl + this.serviceUrl;
  }

  getAvailableRoomListByHotelId(checkinDate, checkoutDate, categoryId: number = null): Observable<Room[]> {
    const param =
      (categoryId === null ? '' : `categoryId=${categoryId}&`) +
      `checkinDate=${checkinDate}&checkoutDate=${checkoutDate}`;

    const url = `${this.baseUrl}${this.serviceUrl}/available/${this.hotelId}?${param}`;
    console.log(url);
    return this.http.get<Room[]>(url, { responseType: 'json' });
  }

  getRoomImageUrls(roomId: number): Observable<any> {
    const url = `${this.baseUrl}${this.serviceUrl}/${roomId}/images/urls`;
    return this.http.get(url, { responseType: 'json' });
  }
}
