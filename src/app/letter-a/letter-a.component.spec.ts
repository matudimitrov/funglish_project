import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterAComponent } from './letter-a.component';

describe('LetterAComponent', () => {
  let component: LetterAComponent;
  let fixture: ComponentFixture<LetterAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
