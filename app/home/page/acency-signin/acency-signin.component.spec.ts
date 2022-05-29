import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcencySigninComponent } from './acency-signin.component';

describe('AcencyLoginComponent', () => {
  let component: AcencySigninComponent;
  let fixture: ComponentFixture<AcencySigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcencySigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcencySigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
