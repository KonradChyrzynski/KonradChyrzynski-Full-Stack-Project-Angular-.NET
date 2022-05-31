import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdmissionComponent } from './user-admission.component';

describe('UserAdmissionComponent', () => {
  let component: UserAdmissionComponent;
  let fixture: ComponentFixture<UserAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
