import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarexpertComponent } from './sidebarexpert.component';

describe('SidebarexpertComponent', () => {
  let component: SidebarexpertComponent;
  let fixture: ComponentFixture<SidebarexpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarexpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
