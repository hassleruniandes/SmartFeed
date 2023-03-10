import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFavComponent } from './button-fav.component';

describe('ButtonFavComponent', () => {
  let component: ButtonFavComponent;
  let fixture: ComponentFixture<ButtonFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
