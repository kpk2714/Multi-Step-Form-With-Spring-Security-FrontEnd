import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofOfAgeComponent } from './proof-of-age.component';

describe('ProofOfAgeComponent', () => {
  let component: ProofOfAgeComponent;
  let fixture: ComponentFixture<ProofOfAgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProofOfAgeComponent]
    });
    fixture = TestBed.createComponent(ProofOfAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
