import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickCounter2Component } from './click-counter2.component';

describe('ClickCounter2Component', () => {
  let component: ClickCounter2Component;
  let fixture: ComponentFixture<ClickCounter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickCounter2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickCounter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
