import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewDetailsComponent } from './overview-details.component';

describe('VehicleDetailsComponent', () => {
  let component: OverviewDetailsComponent;
  let fixture: ComponentFixture<OverviewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
