import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVegetableComponent } from './update-vegetable.component';

describe('UpdateVegetableComponent', () => {
  let component: UpdateVegetableComponent;
  let fixture: ComponentFixture<UpdateVegetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVegetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVegetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
