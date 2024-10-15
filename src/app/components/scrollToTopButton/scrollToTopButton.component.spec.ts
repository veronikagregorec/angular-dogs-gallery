import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToTopButtonComponent } from './scrollToTopButton.component';

describe('ScrollToTopButtonComponent', () => {
  let component: ScrollToTopButtonComponent;
  let fixture: ComponentFixture<ScrollToTopButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollToTopButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollToTopButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
