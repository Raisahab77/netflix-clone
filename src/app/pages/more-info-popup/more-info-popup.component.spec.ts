import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoPopupComponent } from './more-info-popup.component';

describe('MoreInfoPopupComponent', () => {
  let component: MoreInfoPopupComponent;
  let fixture: ComponentFixture<MoreInfoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreInfoPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreInfoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
