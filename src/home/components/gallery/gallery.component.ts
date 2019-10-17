import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
  NgxGalleryComponent
} from 'ngx-gallery';
import { Example } from 'src/shared/models/example.model';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  head = 'Exhibition';
  title = 'Gallery';
  background = 'Beauty';

  galleryImages: NgxGalleryImage[];
  onlyPreviewExample: Example;
  @ViewChild('onlyPreviewGallery', { static: false })
  onlyPreviewGallery: NgxGalleryComponent;

  ngOnInit(): void {
    let images = new Array<NgxGalleryImage>();
    images.push({ big: 'assets/images/rooms/room-1.jpg' });
    images.push({ big: 'assets/images/rooms/room-2.jpg' });
    images.push({ big: 'assets/images/rooms/room-3.jpg' });
    images.push({ big: 'assets/images/rooms/room-4.jpg' });
    images.push({ big: 'assets/images/rooms/room-5.jpg' });
    images.push({ big: 'assets/images/rooms/room-6.jpg' });
    this.galleryImages = images;
    this.onlyPreviewExample = new Example('Only preview', this.galleryImages, [
      {
        image: false,
        thumbnails: false,
        width: '0px',
        height: '0px'
      }
    ]);
  }

  openPreview(i: number): void {
    this.onlyPreviewGallery.openPreview(i);
  }
}
