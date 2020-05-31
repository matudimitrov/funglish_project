import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterDComponent } from './letter-d.component';

describe('LetterDComponent', () => {
  let component: LetterDComponent;
  let fixture: ComponentFixture<LetterDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
