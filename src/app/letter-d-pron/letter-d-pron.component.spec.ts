import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterDPronComponent } from './letter-d-pron.component';

describe('LetterDPronComponent', () => {
  let component: LetterDPronComponent;
  let fixture: ComponentFixture<LetterDPronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterDPronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterDPronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
