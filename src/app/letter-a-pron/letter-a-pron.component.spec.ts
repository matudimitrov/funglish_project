import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterAPronComponent } from './letter-a-pron.component';

describe('LetterAPronComponent', () => {
  let component: LetterAPronComponent;
  let fixture: ComponentFixture<LetterAPronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterAPronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterAPronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
