import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChieldComponent } from './view-chield.component';

describe('ViewChieldComponent', () => {
  let component: ViewChieldComponent;
  let fixture: ComponentFixture<ViewChieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewChieldComponent]
    });
    fixture = TestBed.createComponent(ViewChieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
