import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ServiceDetailsComponent } from './serviceDetails.component';

describe('serviceDetailsComponent', () => {
  let component : ServiceDetailsComponent;
  let fixture : ComponentFixture<ServiceDetailsComponent>;

  beforeEach(async ()=>{
    await TestBed.configureTestingModule({
      declarations: [ServiceDetailsComponent]
    })
      .compileComponents();
  });

  beforeEach(()=>{
    fixture=TestBed.createComponent(ServiceDetailsComponent);
    component=fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});