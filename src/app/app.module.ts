import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ServiceModule } from 'src/service/service.module';
import { StaticDataSource } from 'src/shared/models/static.datasource';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';

// routes
export const ROUTES: Routes = [
  {
    path: 'rooms',
    loadChildren: '../rooms/rooms.module#RoomsModule'
  },
  {
    path: '',
    loadChildren: '../home/home.module#HomeModule'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceModule,
    BrowserAnimationsModule,
    CookieModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [StaticDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
