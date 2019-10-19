import { Component, OnInit, Input } from '@angular/core';
import { HotelFacilities } from 'src/shared/models/hotel.facilities.model';

@Component({
  selector: 'hotel-facilities',
  templateUrl: './hotel-facilities.component.html',
  styleUrls: ['./hotel-facilities.component.scss']
})
export class HotelFacilitiesComponent implements OnInit {
  @Input() facilities: HotelFacilities;

  public isCollapsed = false;
  constructor() { }

  ngOnInit() {
    if (window.innerWidth < 767) {
      this.isCollapsed = true;
    }
  }
}
