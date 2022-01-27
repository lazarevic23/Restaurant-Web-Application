import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtkazivanjeRezervacijeComponent } from './otkazivanje-rezervacije.component';

describe('OtkazivanjeRezervacijeComponent', () => {
  let component: OtkazivanjeRezervacijeComponent;
  let fixture: ComponentFixture<OtkazivanjeRezervacijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtkazivanjeRezervacijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtkazivanjeRezervacijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
