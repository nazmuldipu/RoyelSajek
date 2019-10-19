import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Daterangepicker } from 'ng2-daterangepicker';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [TitleComponent, NavbarComponent,
  ],
  imports: [CommonModule, Daterangepicker, FormsModule, ReactiveFormsModule, RouterModule, NgbModule, NgbModule.forRoot()],
  exports: [CommonModule, Daterangepicker, NgbModule, FormsModule, ReactiveFormsModule, NavbarComponent, TitleComponent, NgbModule]
})
export class SharedModule { }
