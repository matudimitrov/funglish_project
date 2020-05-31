import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterEComponent } from './letter-e.component';

describe('LetterEComponent', () => {
  let component: LetterEComponent;
  let fixture: ComponentFixture<LetterEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
