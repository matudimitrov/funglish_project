import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterATestComponent } from './letter-a-test.component';

describe('LetterATestComponent', () => {
  let component: LetterATestComponent;
  let fixture: ComponentFixture<LetterATestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterATestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterATestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
