import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServiceUpdateComponent } from './form-service-update.component';

describe('FormServiceUpdateComponent', () => {
  let component: FormServiceUpdateComponent;
  let fixture: ComponentFixture<FormServiceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormServiceUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormServiceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
