import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCurseComponent } from './view-curse.component';

describe('ViewCurseComponent', () => {
  let component: ViewCurseComponent;
  let fixture: ComponentFixture<ViewCurseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCurseComponent]
    });
    fixture = TestBed.createComponent(ViewCurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
