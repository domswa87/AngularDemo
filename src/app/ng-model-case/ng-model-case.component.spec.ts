import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelCaseComponent } from './ng-model-case.component';

describe('NgModelCaseComponent', () => {
  let component: NgModelCaseComponent;
  let fixture: ComponentFixture<NgModelCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModelCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
