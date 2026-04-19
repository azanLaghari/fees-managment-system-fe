import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFeesComponent } from './list-fees.component';

describe('ListFeesComponent', () => {
  let component: ListFeesComponent;
  let fixture: ComponentFixture<ListFeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFeesComponent]
    });
    fixture = TestBed.createComponent(ListFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
