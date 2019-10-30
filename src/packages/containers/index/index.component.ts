import { Component, OnInit } from "@angular/core";
import { StaticDataSource } from "src/shared/models/static.datasource";
import { Package } from "src/shared/models/package.model";
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  id;
  tab = 'INFORMATION';
  package: Package;
  packages: Package[] = [];

  constructor(
    public sanitizer: DomSanitizer,
    private dataSource: StaticDataSource,
    private activeRoute: ActivatedRoute
  ) {
    this.id = activeRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.dataSource.getProducts().subscribe(data => {
      this.packages = data;
    });
    if(this.id){
      this.onPackage(this.id);
    }
  }

  getTab(tab: string) {
    this.tab = tab;
  }

  onPackage(id){
    this.id = id;
    this.package = this.packages.find(pac => pac.id == id)
  }
}
