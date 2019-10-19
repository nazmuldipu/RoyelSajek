import { NgModule } from '@angular/core';

import { CategoryService } from './category.service';
import { HotelService } from './hotel.service';
import { RoomService } from './room.service';

@NgModule({
  providers: [
    CategoryService,
    HotelService,
    RoomService
  ]
})
export class ServiceModule { }
