import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazStolovaComponent } from './prikaz-stolova.component';

describe('PrikazStolovaComponent', () => {
  let component: PrikazStolovaComponent;
  let fixture: ComponentFixture<PrikazStolovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazStolovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazStolovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
