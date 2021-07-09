import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickCounter1Component } from './click-counter1.component';

describe('ClickCounter1Component', () => {
  let component: ClickCounter1Component;
  let fixture: ComponentFixture<ClickCounter1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickCounter1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickCounter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
