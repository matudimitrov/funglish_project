import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeAlphabetComponent } from './whole-alphabet.component';

describe('WholeAlphabetComponent', () => {
  let component: WholeAlphabetComponent;
  let fixture: ComponentFixture<WholeAlphabetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeAlphabetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeAlphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
