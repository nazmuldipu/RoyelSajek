import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() head: string;
  @Input() title: string;
  @Input() background: string;
}
