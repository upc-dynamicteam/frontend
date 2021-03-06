import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CoverPageComponent } from './cover-page.component';

describe('coverPageComponent', () => {
  let component : CoverPageComponent;
  let fixture : ComponentFixture<CoverPageComponent>;

  beforeEach(async ()=>{
    await TestBed.configureTestingModule({
      declarations: [CoverPageComponent]
    })
      .compileComponents();
  });

  beforeEach(()=>{
    fixture=TestBed.createComponent(CoverPageComponent);
    component=fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
