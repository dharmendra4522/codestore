import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontantComponent } from './ngcontant.component';

describe('NgcontantComponent', () => {
  let component: NgcontantComponent;
  let fixture: ComponentFixture<NgcontantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgcontantComponent]
    });
    fixture = TestBed.createComponent(NgcontantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
