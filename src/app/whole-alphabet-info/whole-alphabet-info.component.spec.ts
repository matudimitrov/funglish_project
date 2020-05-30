import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeAlphabetInfoComponent } from './whole-alphabet-info.component';

describe('WholeAlphabetInfoComponent', () => {
  let component: WholeAlphabetInfoComponent;
  let fixture: ComponentFixture<WholeAlphabetInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeAlphabetInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeAlphabetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
