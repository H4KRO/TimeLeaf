import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsSearchBar } from './missions-search-bar';

describe('MissionsSearchBar', () => {
  let component: MissionsSearchBar;
  let fixture: ComponentFixture<MissionsSearchBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionsSearchBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionsSearchBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
