import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximaComidaPageComponent } from './proxima-comida-page.component';

describe('ProximaComidaPageComponent', () => {
  let component: ProximaComidaPageComponent;
  let fixture: ComponentFixture<ProximaComidaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximaComidaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximaComidaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
