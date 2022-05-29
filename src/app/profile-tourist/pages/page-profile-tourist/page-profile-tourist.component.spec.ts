import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfileTouristComponent } from './page-profile-tourist.component';

describe('PageProfileTouristComponent', () => {
  let component: PageProfileTouristComponent;
  let fixture: ComponentFixture<PageProfileTouristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProfileTouristComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfileTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
