import { Component, OnInit } from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  head = 'Exhibition';
  title = 'Gallery';
  background = 'Beauty';

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/gallery/g1.jpg',
        medium: 'assets/images/gallery/g1.jpg',
        big: 'assets/images/gallery/g1.jpg'
      },
      {
        small: 'assets/images/gallery/g2.jpg',
        medium: 'assets/images/gallery/g2.jpg',
        big: 'assets/images/gallery/g2.jpg'
      },
      {
        small: 'assets/images/gallery/g3.jpg',
        medium: 'assets/images/gallery/g3.jpg',
        big: 'assets/images/gallery/g3.jpg'
      }
    ];
  }
}
