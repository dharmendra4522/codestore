import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardInputComponent } from './user-card-input.component';

describe('UserCardInputComponent', () => {
  let component: UserCardInputComponent;
  let fixture: ComponentFixture<UserCardInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCardInputComponent]
    });
    fixture = TestBed.createComponent(UserCardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
