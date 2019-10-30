import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { IndexComponent } from './containers/index/index.component';

export const ROUTES: Routes = [
  { path: "", component: IndexComponent },
  { path: ":id", component: IndexComponent },
 ];

@NgModule({
  declarations: [IndexComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class PackagesModule {}
