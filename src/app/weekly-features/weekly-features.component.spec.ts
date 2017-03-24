import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyFeaturesComponent } from './weekly-features.component';

describe('WeeklyFeaturesComponent', () => {
  let component: WeeklyFeaturesComponent;
  let fixture: ComponentFixture<WeeklyFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
