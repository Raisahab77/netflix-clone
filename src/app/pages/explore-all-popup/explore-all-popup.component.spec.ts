import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreAllPopupComponent } from './explore-all-popup.component';

describe('ExploreAllPopupComponent', () => {
  let component: ExploreAllPopupComponent;
  let fixture: ComponentFixture<ExploreAllPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreAllPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreAllPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
