import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableListComponent } from './vegetable-list.component';

describe('VegetableListComponent', () => {
  let component: VegetableListComponent;
  let fixture: ComponentFixture<VegetableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegetableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
