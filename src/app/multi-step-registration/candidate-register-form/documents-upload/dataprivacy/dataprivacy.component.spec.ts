import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataprivacyComponent } from './dataprivacy.component';

describe('DataprivacyComponent', () => {
  let component: DataprivacyComponent;
  let fixture: ComponentFixture<DataprivacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataprivacyComponent]
    });
    fixture = TestBed.createComponent(DataprivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
