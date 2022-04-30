import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperttableComponent } from './experttable.component';

describe('ExperttableComponent', () => {
  let component: ExperttableComponent;
  let fixture: ComponentFixture<ExperttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperttableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
