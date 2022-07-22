import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVegetableComponent } from './create-vegetable.component';

describe('CreateVegetableComponent', () => {
  let component: CreateVegetableComponent;
  let fixture: ComponentFixture<CreateVegetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVegetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVegetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
