import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterEInfoComponent } from './letter-e-info.component';

describe('LetterEInfoComponent', () => {
  let component: LetterEInfoComponent;
  let fixture: ComponentFixture<LetterEInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterEInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterEInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
