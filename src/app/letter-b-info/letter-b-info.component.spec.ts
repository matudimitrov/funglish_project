import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterBInfoComponent } from './letter-b-info.component';

describe('LetterBInfoComponent', () => {
  let component: LetterBInfoComponent;
  let fixture: ComponentFixture<LetterBInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterBInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterBInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
