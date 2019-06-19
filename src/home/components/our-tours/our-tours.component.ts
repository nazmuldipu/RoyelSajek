import { Component, OnInit } from '@angular/core';
import { Package } from 'src/shared/models/package.model';
import { StaticDataSource } from 'src/shared/models/static.datasource';

@Component({
  selector: 'our-tours',
  templateUrl: './our-tours.component.html',
  styleUrls: ['./our-tours.component.scss']
})
export class OurToursComponent implements OnInit {
  head = 'BEST RESORT';
  title = 'Our Tours';
  background = 'Destination';

  private packages: Package[] = [];
  location;
  constructor(private dataSource: StaticDataSource) {}

  ngOnInit() {
    this.dataSource.getProducts().subscribe(data => {
      this.packages = data;
    });
  }

  async getPackageForUser(place: string = null) {
    this.location = place;
    this.dataSource.getProducts().subscribe(data => {
      if (place) {
        this.packages = data.filter(p => p.place == place);
      } else {
        this.packages = data;
      }
    });
  }
}
