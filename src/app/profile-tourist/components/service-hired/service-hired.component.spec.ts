import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHiredComponent } from './service-hired.component';

describe('ServiceHiredComponent', () => {
  let component: ServiceHiredComponent;
  let fixture: ComponentFixture<ServiceHiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceHiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
