import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandLoneComponent } from './stand-lone.component';

describe('StandLoneComponent', () => {
  let component: StandLoneComponent;
  let fixture: ComponentFixture<StandLoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StandLoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandLoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
