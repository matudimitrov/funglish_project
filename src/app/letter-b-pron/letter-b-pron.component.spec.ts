import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterBPronComponent } from './letter-b-pron.component';

describe('LetterBPronComponent', () => {
  let component: LetterBPronComponent;
  let fixture: ComponentFixture<LetterBPronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterBPronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterBPronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
