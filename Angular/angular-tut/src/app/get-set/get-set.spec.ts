import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSet } from './get-set';

describe('GetSet', () => {
  let component: GetSet;
  let fixture: ComponentFixture<GetSet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSet],
    }).compileComponents();

    fixture = TestBed.createComponent(GetSet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
