import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/service/room.service';
import { HotelService } from 'src/service/hotel.service';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/shared/models/room.model';
import { CategoryService } from 'src/service/category.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id;
  room: Room;

  public options: any;
  showCheckAvailability = true;
  showBookNow = false;
  showUnavailable = false;
  priceMap: Map<Date, number>;
  totalPrice: number;
  discount = 0;

  constructor(private roomService: RoomService, private hotelService: HotelService,
    private categoryService: CategoryService, private activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    if (this.id) {
      this.getRoom(this.id);
      this.setDateRanges();
    }
  }
  setDateRanges() {
    this.options = {
      autoApply: true,
      locale: { format: 'DD MMM,YY' },
      minDate: this.hotelService.dateRange.checkInDate,
      maxDate: this.hotelService.dateRange.maxDate,
      startDate: this.hotelService.dateRange.checkInDate,
      endDate: this.hotelService.dateRange.checkOutDate,
      alwaysShowCalendars: false
    };
    this.getMaximumDiscount(this.id);
  }

  public selectedDate(value: any) {
    this.showCheckAvailability = true;
    this.showBookNow = false;
    this.showUnavailable = false;
    this.priceMap = null;
    this.hotelService.dateRange.checkInDate = value.start._d;
    this.hotelService.dateRange.checkOutDate = value.end._d;
    this.hotelService._dateRangeSource.next(this.hotelService.dateRange);
  }

  async getRoom(roomId: number) {
    await this.roomService.getRoom(roomId).subscribe(data => {
      this.room = data as Room;
      this.room.hotel = this.room.category.hotel;
      this.loadRoomImages(roomId);
    });
  }

  async loadRoomImages(roomId: number) {
    await this.roomService.getRoomImageUrls(roomId).subscribe(
      data => {
        if (data.length) {
          let roomImagesUrl = [];
          data.forEach(element => {
            let url = this.roomService.imageUrl + element;
            roomImagesUrl.push(url);
          });
          this.room.imagePaths = roomImagesUrl;
        } else {
          this.loadRoomCategoryImages(this.room.category.id, roomId);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  async loadRoomCategoryImages(categoryId: number, roomId: number) {
    await this.categoryService
      .getCategoryImageUrls(categoryId)
      .subscribe(data => {
        if (data) {
          const roomImagesUrl = [];
          data.forEach(element => {
            let url = this.categoryService.imageUrl + element;
            roomImagesUrl.push(url);
          });
          this.room.imagePaths = roomImagesUrl;
        }
      });
  }

  async getRoomPriceMap(roomId: number, checkinDate, checkoutDate) {
    await this.roomService
      .getRoomPriceMap(roomId, checkinDate, checkoutDate)
      .subscribe(data => {
        this.priceMap = data;
        this.totalPrice = 0;
        for (const i of Object.keys(data)) {
          this.totalPrice += data[i];
        }
      });
  }

  async getMaximumDiscount(roomId: number) {
    await this.roomService.getMaximumDiscount(roomId, this.getCheckinDate(), this.getCheckoutDate()).subscribe(data => {
      this.discount = data;
    })
  }

  async checkRoomAvailability(roomId: number) {
    await this.roomService
      .checkRoomAvailability(roomId, this.getCheckinDate(), this.getCheckoutDate())
      .subscribe((data: Room) => {
        this.showCheckAvailability = false;
        if (data.available) {
          this.showBookNow = true;
          this.getRoomPriceMap(roomId, this.getCheckinDate(), this.getCheckoutDate());
        } else {
          this.showUnavailable = true;
        }
      });
  }
  onRoomBooking(roomId: number) {
    console.log(this.getCheckinDate(), this.getCheckoutDate(), roomId);
  }

  getCheckinDate(): string {
    const cin = this.hotelService.dateRange.checkInDate as Date;
    return cin.getFullYear() + '-' + (cin.getMonth() + 1) + '-' + cin.getDate();
  }

  getCheckoutDate(): string {
    const cout = this.hotelService.dateRange.checkOutDate as Date;
    return cout.getFullYear() + '-' + (cout.getMonth() + 1) + '-' + cout.getDate();
  }

}
