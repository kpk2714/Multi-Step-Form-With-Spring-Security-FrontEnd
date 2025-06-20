import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateRegisterFormComponent } from './candidate-register-form.component';

describe('CandidateRegisterFormComponent', () => {
  let component: CandidateRegisterFormComponent;
  let fixture: ComponentFixture<CandidateRegisterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateRegisterFormComponent]
    });
    fixture = TestBed.createComponent(CandidateRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
