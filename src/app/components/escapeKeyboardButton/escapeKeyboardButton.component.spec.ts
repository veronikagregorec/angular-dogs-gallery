import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeKeyboardButtonComponent } from './escapeKeyboardButton.component';

describe('EscapeKeyboardButtonComponent', () => {
  let component: EscapeKeyboardButtonComponent;
  let fixture: ComponentFixture<EscapeKeyboardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscapeKeyboardButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscapeKeyboardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
