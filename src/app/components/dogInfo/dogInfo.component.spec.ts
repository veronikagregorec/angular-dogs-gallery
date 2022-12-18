import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogInfoComponent } from './dogInfo.component';

describe('DogInfoComponent', () => {
  let component: DogInfoComponent;
  let fixture: ComponentFixture<DogInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
