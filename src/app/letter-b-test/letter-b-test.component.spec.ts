import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterBTestComponent } from './letter-b-test.component';

describe('LetterBTestComponent', () => {
  let component: LetterBTestComponent;
  let fixture: ComponentFixture<LetterBTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterBTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterBTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
