import { NgModule } from '@angular/core';

import { CategoryService } from './category.service';
import { HotelService } from './hotel.service';
import { RoomService } from './room.service';
import { AuthService } from './auth.service';

@NgModule({
  providers: [
    AuthService,
    CategoryService,
    HotelService,
    RoomService
  ]
})
export class ServiceModule { }
