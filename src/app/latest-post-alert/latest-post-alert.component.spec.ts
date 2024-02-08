import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostAlertComponent } from './latest-post-alert.component';

describe('LatestPostAlertComponent', () => {
  let component: LatestPostAlertComponent;
  let fixture: ComponentFixture<LatestPostAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestPostAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestPostAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
