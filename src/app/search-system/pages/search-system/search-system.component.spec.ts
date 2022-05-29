import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSystemComponent } from './search-system.component';

describe('SearchSystemComponent', () => {
  let component: SearchSystemComponent;
  let fixture: ComponentFixture<SearchSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
