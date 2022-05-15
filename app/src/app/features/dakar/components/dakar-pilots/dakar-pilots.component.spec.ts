import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DakarPilotsComponent } from './dakar-pilots.component';

describe('DakarPilotsComponent', () => {
  let component: DakarPilotsComponent;
  let fixture: ComponentFixture<DakarPilotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DakarPilotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DakarPilotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
