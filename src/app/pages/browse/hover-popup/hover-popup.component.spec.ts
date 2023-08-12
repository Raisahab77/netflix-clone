import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverPopupComponent } from './hover-popup.component';

describe('HoverPopupComponent', () => {
  let component: HoverPopupComponent;
  let fixture: ComponentFixture<HoverPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
