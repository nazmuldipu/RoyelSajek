import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hotel } from 'src/shared/models/hotel.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotelId: number;
  serviceUrl = 'api/v1/hotels';
  baseUrl: string;
  imageUrl;

  _dateRangeSource = new Subject<DateRanges>();
  dateRange$ = this._dateRangeSource.asObservable();
  dateRange: DateRanges;

  constructor(private http: HttpClient) {
    this.hotelId = environment.hotelsWaveId;
    this.baseUrl = `${environment.PROTOCOL}://${environment.SERVER}${environment.PORT}/`;
    this.imageUrl = this.baseUrl + this.serviceUrl;
    this.setDateRanges();
  }

  setDateRanges() {
    const cin = new Date();
    const cout = new Date();
    cout.setDate(cout.getDate() + 4);
    const max = new Date();
    max.setDate(max.getDate() + 60);
    const value: DateRanges = {
      checkInDate: cin,
      checkOutDate: cout,
      maxDate: max
    };

    this.dateRange = value;
    this._dateRangeSource.next(this.dateRange);
  }

  getHotel(): Observable<Hotel> {
    const url = `${this.baseUrl}${this.serviceUrl}/${this.hotelId}`;
    console.log(url);
    return this.http.get<Hotel>(url, { responseType: 'json' });
  }

  getHotelImageUrls(): Observable<any> {
    const url = `${this.baseUrl}${this.serviceUrl}/${this.hotelId}/images/urls`;
    return this.http.get(url, { responseType: 'json' });
  }


}
export interface DateRanges {
  checkInDate: Date;
  checkOutDate: Date;
  maxDate: Date;
}