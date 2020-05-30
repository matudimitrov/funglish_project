import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterAInfoComponent } from './letter-a-info.component';

describe('LetterAInfoComponent', () => {
  let component: LetterAInfoComponent;
  let fixture: ComponentFixture<LetterAInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterAInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterAInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
