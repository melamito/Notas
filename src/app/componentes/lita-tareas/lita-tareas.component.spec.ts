import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitaTareasComponent } from './lita-tareas.component';

describe('LitaTareasComponent', () => {
  let component: LitaTareasComponent;
  let fixture: ComponentFixture<LitaTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitaTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitaTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
