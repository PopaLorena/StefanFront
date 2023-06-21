import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateformEmployeeComponent } from './createform-employee.component';

describe('CreateformEmployeeComponent', () => {
  let component: CreateformEmployeeComponent;
  let fixture: ComponentFixture<CreateformEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateformEmployeeComponent]
    });
    fixture = TestBed.createComponent(CreateformEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
