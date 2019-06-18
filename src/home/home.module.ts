import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './containers/index/index.component';
import { HomeComponent } from './home.component';

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
  declarations: [HomeComponent, IndexComponent, NavbarComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class HomeModule {}
