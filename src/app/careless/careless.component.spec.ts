import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarelessComponent } from './careless.component';

describe('CarelessComponent', () => {
  let component: CarelessComponent;
  let fixture: ComponentFixture<CarelessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarelessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarelessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
