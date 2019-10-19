import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { DetailsComponent } from './containers/details/details.component';
import { IndexComponent } from './containers/index/index.component';
import { RoomsComponent } from './rooms.component';
import { HotelFacilitiesComponent } from './components/hotel-facilities/hotel-facilities.component';
import { RoomCardComponent } from './components/room-card/room-card.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: RoomsComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: ':id',
        component: DetailsComponent
      }
    ]
  }
];


@NgModule({
  declarations: [IndexComponent, DetailsComponent, RoomsComponent, HotelFacilitiesComponent, RoomCardComponent],
  imports: [
    SharedModule, RouterModule.forChild(ROUTES)
  ]
})
export class RoomsModule { }
