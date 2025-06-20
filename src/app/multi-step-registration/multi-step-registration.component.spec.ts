import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStepRegistrationComponent } from './multi-step-registration.component';

describe('MultiStepRegistrationComponent', () => {
  let component: MultiStepRegistrationComponent;
  let fixture: ComponentFixture<MultiStepRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiStepRegistrationComponent]
    });
    fixture = TestBed.createComponent(MultiStepRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
