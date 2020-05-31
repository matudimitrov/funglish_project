import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterEPronComponent } from './letter-e-pron.component';

describe('LetterEPronComponent', () => {
  let component: LetterEPronComponent;
  let fixture: ComponentFixture<LetterEPronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterEPronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterEPronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
