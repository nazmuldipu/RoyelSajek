import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  animate,
  style,
  group
} from '@angular/animations';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  // animations: [slideAnimation]
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ]),

    trigger('slideAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))])
    ]),

    trigger('MySlideInOut', [
      state('in', style({ height: '*', opacity: 0 })),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),

        group([
          animate(300, style({ height: 0 })),
          animate('200ms ease-in-out', style({ opacity: '0' }))
        ])
      ]),
      transition(':enter', [
        style({ height: '0', opacity: 0 }),

        group([
          animate(300, style({ height: '*' })),
          animate('400ms ease-in-out', style({ opacity: '1' }))
        ])
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  constructor() {
    this.preloadImages();
  }

  currentIndex = 0;
  slides = [
    { image: 'assets/images/gallery/g1.jpg', description: 'Image 00' },
    { image: 'assets/images/gallery/g2.jpg', description: 'Image 01' },
    { image: 'assets/images/gallery/g3.jpg', description: 'Image 02' },
    { image: 'assets/images/gallery/g4.jpg', description: 'Image 03' },
    { image: 'assets/images/gallery/g5.jpg', description: 'Image 04' }
  ];
  preloadImages() {
    this.slides.forEach(slide => {
      new Image().src = slide.image;
    });
  }

  setCurrentSlideIndex(index) {
    this.currentIndex = index;
  }

  isCurrentSlideIndex(index) {
    return this.currentIndex === index;
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1 ? ++this.currentIndex : 0;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? --this.currentIndex : this.slides.length - 1;
  }
  //

  current = 0;
  img_list = [
    'https://picsum.photos/600/400/?image=0',
    'https://picsum.photos/600/400/?image=1',
    'https://picsum.photos/600/400/?image=2',
    'https://picsum.photos/600/400/?image=3'
  ];

  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 2000);
  }
}
