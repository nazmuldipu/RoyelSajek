import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { NgxGalleryModule } from 'ngx-gallery';

import { IndexComponent } from './containers/index/index.component';
import { HomeComponent } from './home.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { OurToursComponent } from './components/our-tours/our-tours.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactsComponent } from './containers/contacts/contacts.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { CartComponent } from './containers/cart/cart.component';

export const ROUTES: Routes = [
  {path:'cart', component: CartComponent},
  {path:'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'contact',
        component: ContactsComponent
      },
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
    RoomsComponent,
    OurToursComponent,
    FooterComponent,
    GalleryComponent,
    CarouselComponent,
    ContactsComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent
  ],
  imports: [SharedModule, NgxGalleryModule, RouterModule.forChild(ROUTES)]
})
export class HomeModule { }
