import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenttableComponent } from './agenttable.component';

describe('AgenttableComponent', () => {
  let component: AgenttableComponent;
  let fixture: ComponentFixture<AgenttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenttableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
