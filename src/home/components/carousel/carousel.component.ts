import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  animate,
  style,
  group
} from '@angular/animations';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  // animations: [slideAnimation]
})
export class CarouselComponent {
  images = [1, 2, 3].map(
    i => `assets/images/front-${i}.jpg`
  );
  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
}
