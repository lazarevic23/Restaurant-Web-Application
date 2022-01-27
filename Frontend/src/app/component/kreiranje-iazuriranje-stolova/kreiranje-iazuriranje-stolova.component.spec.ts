import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KreiranjeIazuriranjeStolovaComponent } from './kreiranje-iazuriranje-stolova.component';

describe('KreiranjeIazuriranjeStolovaComponent', () => {
  let component: KreiranjeIazuriranjeStolovaComponent;
  let fixture: ComponentFixture<KreiranjeIazuriranjeStolovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KreiranjeIazuriranjeStolovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KreiranjeIazuriranjeStolovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
