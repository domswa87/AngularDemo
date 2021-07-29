import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestsComponent } from './unit-tests.component';

describe('GroupOfTest1', () => {
  let component: UnitTestsComponent;
  let fixture: ComponentFixture<UnitTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitTestsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // MY TESTS
  // RUN COMMAND: ng test 

  it("MyTestName", () => {
    expect(component.MyName).toBe("Dominik");
  })


  // SPY ON => COS JAK MOCK
  // it("SpyON", () => {

  //   spyOn(component, 'AddNumbers').withArgs(1, 1).and.returnValue(2);
  //   spyOn(component, 'AddNumbers').withArgs(2, 2).and.returnValue(4);
  //   spyOn(component, 'AddNumbers').withArgs(3, 3).and.returnValue(6);

  // })


  //  <h1 class="myClassDS">MyTextDS</h1>
  it("AddNumbers", () => {
    const textInMyClassDS = fixture.nativeElement.querySelector(".myClassDS").textContent;
    expect(textInMyClassDS).toContain("MyTextDS");
  })


  it("AddNumbersWithParams", () => {
    [
      { number1: 2, number2: 2, result: 4 },
      { number1: 3, number2: 3, result: 6 },
      { number1: 5, number2: 5, result: 11 }
    ].forEach(({ number1, number2, result }) => {
      expect(component.AddNumbers(number1, number2)).toBe(result);
    })
  });
});





// Describe - group of unit tests
describe('GroupOfTest2', () => {

  let component: UnitTestsComponent;
  let fixture: ComponentFixture<UnitTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitTestsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it("MyTestName2", () => {
    expect(component.MyName).toBe("Dominik");
  })

});




