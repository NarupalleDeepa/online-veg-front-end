import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableDetailsComponent } from './vegetable-details.component';

describe('VegetableDetailsComponent', () => {
  let component: VegetableDetailsComponent;
  let fixture: ComponentFixture<VegetableDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegetableDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
