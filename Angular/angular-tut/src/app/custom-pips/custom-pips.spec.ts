import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPips } from './custom-pips';

describe('CustomPips', () => {
  let component: CustomPips;
  let fixture: ComponentFixture<CustomPips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPips],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomPips);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
