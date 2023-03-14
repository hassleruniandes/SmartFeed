import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPetPageComponent } from './register-pet-page.component';

describe('RegisterPetPageComponent', () => {
  let component: RegisterPetPageComponent;
  let fixture: ComponentFixture<RegisterPetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPetPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
