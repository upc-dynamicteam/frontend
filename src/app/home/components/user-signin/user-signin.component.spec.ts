import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSigninComponent } from './user-signin.component';

describe('UserLoginComponent', () => {
  let component: UserSigninComponent;
  let fixture: ComponentFixture<UserSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
