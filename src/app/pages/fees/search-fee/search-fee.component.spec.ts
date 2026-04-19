import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFeeComponent } from './search-fee.component';

describe('SearchFeeComponent', () => {
  let component: SearchFeeComponent;
  let fixture: ComponentFixture<SearchFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFeeComponent]
    });
    fixture = TestBed.createComponent(SearchFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
