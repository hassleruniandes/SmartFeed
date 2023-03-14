import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFeederComponent } from './register-feeder.component';

describe('RegisterFeederComponent', () => {
  let component: RegisterFeederComponent;
  let fixture: ComponentFixture<RegisterFeederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFeederComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFeederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
