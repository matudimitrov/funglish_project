import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterETestComponent } from './letter-e-test.component';

describe('LetterETestComponent', () => {
  let component: LetterETestComponent;
  let fixture: ComponentFixture<LetterETestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterETestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterETestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
