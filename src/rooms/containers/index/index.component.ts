import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/service/category.service';
import { HotelService } from 'src/service/hotel.service';
import { RoomService } from 'src/service/room.service';
import { Hotel } from 'src/shared/models/hotel.model';
import { RoomCategory } from 'src/shared/models/room.category';
import { Room } from 'src/shared/models/room.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  hotel: Hotel;
  categoryList: RoomCategory[];
  roomList: Room[];
  roomFilterList: Room[];

  categoryId;
  public options: any;
  totalRoomNumber = 0;
  totalAcRoom = 0;
  totalNonAcRoom = 0;

  constructor(private router: Router, private hotelService: HotelService, private roomService: RoomService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.getHotelInfo();
    this.setDateRanges();
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
    this.getAvailableRoom();
  }

  public selectedDate(value: any, datepicker?: any) {
    this.hotelService.dateRange.checkInDate = value.start._d;
    this.hotelService.dateRange.checkOutDate = value.end._d;
    this.hotelService._dateRangeSource.next(this.hotelService.dateRange);
    this.getAvailableRoom(this.categoryId);
  }

  onRoomDetails(id: number) {
    this.router.navigate(['/rooms/', id]);
  }

  async getHotelInfo() {
    await this.hotelService.getHotel().subscribe(data => {
      this.hotel = data;
      this.getHotelImages();
    })
  }

  async getHotelImages() {
    await this.hotelService.getHotelImageUrls().subscribe(data => {
      let hotelImages = [];
      data.forEach(element => {
        if (element) {
          let url = this.hotelService.imageUrl + element;
          hotelImages.push(url);
        }
      });
      this.hotel.imagePaths = hotelImages;
    });
  }


  async getAvailableRoom(categoryId = null) {
    const cin = this.hotelService.dateRange.checkInDate as Date;
    const cout = this.hotelService.dateRange.checkOutDate as Date;

    const checkinDate = cin.getFullYear() + '-' + (cin.getMonth() + 1) + '-' + cin.getDate();
    const checkoutDate = cout.getFullYear() + '-' + (cout.getMonth() + 1) + '-' + cout.getDate();

    await this.roomService.getAvailableRoomListByHotelId(checkinDate, checkoutDate, categoryId).subscribe(data => {
      this.roomList = data;
      this.totalAcRoom = 0;
      this.totalNonAcRoom = 0;
      this.roomList.forEach(room => {
        this.loadRoomImages(room.id);
        if (room.facilities.airConditioned) {
          this.totalAcRoom++;
        } else {
          this.totalNonAcRoom++;
        }
      });
      this.totalRoomNumber = this.roomList.length;
    });
  }

  async loadRoomImages(roomId) {
    await this.roomService.getRoomImageUrls(roomId).subscribe(data => {
      if (data.length) {
        const roomImagesUrl = [];
        data.forEach(element => {
          let url = this.roomService.imageUrl + element;
          roomImagesUrl.push(url);
        });
        this.roomList.find(r => r.id === roomId).imagePaths = roomImagesUrl;
      } else {
        const room = this.roomList.find(r => r.id === roomId);
        this.loadRoomCategoryImages(room.category.id, room.id);
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
          this.roomList.find(r => r.id === roomId).imagePaths = roomImagesUrl;
        }
      });
  }

}
