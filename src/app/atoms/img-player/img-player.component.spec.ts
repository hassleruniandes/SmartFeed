import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPlayerComponent } from './img-player.component';

describe('ImgPlayerComponent', () => {
  let component: ImgPlayerComponent;
  let fixture: ComponentFixture<ImgPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
