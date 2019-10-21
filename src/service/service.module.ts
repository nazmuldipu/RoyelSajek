import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { CategoryService } from './category.service';
import { HotelService } from './hotel.service';
import { RoomService } from './room.service';
import { UserService } from './user.service';


@NgModule({
  providers: [
    AuthService,
    CategoryService,
    HotelService,
    RoomService,
    UserService
  ]
})
export class ServiceModule { }
