import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsListComponent } from './dogsList.component';

describe('DogsListComponent', () => {
  let component: DogsListComponent;
  let fixture: ComponentFixture<DogsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
