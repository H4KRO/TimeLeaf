import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsSearchResultList } from './missions-search-result-list';

describe('MissionsSearchResultList', () => {
  let component: MissionsSearchResultList;
  let fixture: ComponentFixture<MissionsSearchResultList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionsSearchResultList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionsSearchResultList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
