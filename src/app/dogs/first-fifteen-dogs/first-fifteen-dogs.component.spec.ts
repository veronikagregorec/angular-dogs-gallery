import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFifteenDogsComponent } from './first-fifteen-dogs.component';

describe('FirstFifteenDogsComponent', () => {
  let component: FirstFifteenDogsComponent;
  let fixture: ComponentFixture<FirstFifteenDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstFifteenDogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstFifteenDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
