import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurToursComponent } from './our-tours.component';

describe('OurToursComponent', () => {
  let component: OurToursComponent;
  let fixture: ComponentFixture<OurToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
