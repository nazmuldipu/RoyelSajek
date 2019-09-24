import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { NgxGalleryModule } from 'ngx-gallery';

import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './containers/index/index.component';
import { HomeComponent } from './home.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { OurToursComponent } from './components/our-tours/our-tours.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CarouselComponent } from './components/carousel/carousel.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent,
    NavbarComponent,
    RoomsComponent,
    OurToursComponent,
    FooterComponent,
    GalleryComponent,
    CarouselComponent
  ],
  imports: [SharedModule, NgxGalleryModule, RouterModule.forChild(ROUTES)]
})
export class HomeModule {}
