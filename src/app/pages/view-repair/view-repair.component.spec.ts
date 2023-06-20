import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRepairComponent } from './view-repair.component';

describe('ViewRepairComponent', () => {
  let component: ViewRepairComponent;
  let fixture: ComponentFixture<ViewRepairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRepairComponent]
    });
    fixture = TestBed.createComponent(ViewRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
