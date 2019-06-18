import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [TitleComponent],
  imports: [CommonModule, NgbModule],
  exports: [CommonModule, NgbModule, TitleComponent]
})
export class SharedModule {}
