import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFeederEditComponent } from './register-feeder-edit.component';

describe('RegisterFeederEditComponent', () => {
  let component: RegisterFeederEditComponent;
  let fixture: ComponentFixture<RegisterFeederEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFeederEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFeederEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
