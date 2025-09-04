import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsSearchFilters } from './missions-search-filters';

describe('MissionsSearchFilters', () => {
  let component: MissionsSearchFilters;
  let fixture: ComponentFixture<MissionsSearchFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionsSearchFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionsSearchFilters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
