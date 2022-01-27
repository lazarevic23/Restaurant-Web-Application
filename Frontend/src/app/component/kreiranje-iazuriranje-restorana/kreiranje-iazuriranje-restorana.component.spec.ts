import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KreiranjeIazuriranjeRestoranaComponent } from './kreiranje-iazuriranje-restorana.component';

describe('KreiranjeIazuriranjeRestoranaComponent', () => {
  let component: KreiranjeIazuriranjeRestoranaComponent;
  let fixture: ComponentFixture<KreiranjeIazuriranjeRestoranaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KreiranjeIazuriranjeRestoranaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KreiranjeIazuriranjeRestoranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
