import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterDTestComponent } from './letter-d-test.component';

describe('LetterDTestComponent', () => {
  let component: LetterDTestComponent;
  let fixture: ComponentFixture<LetterDTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterDTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterDTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
