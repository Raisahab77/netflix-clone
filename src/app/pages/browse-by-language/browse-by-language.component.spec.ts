import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseByLanguageComponent } from './browse-by-language.component';

describe('BrowseByLanguageComponent', () => {
  let component: BrowseByLanguageComponent;
  let fixture: ComponentFixture<BrowseByLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseByLanguageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseByLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
