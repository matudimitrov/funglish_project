import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterDInfoComponent } from './letter-d-info.component';

describe('LetterDInfoComponent', () => {
  let component: LetterDInfoComponent;
  let fixture: ComponentFixture<LetterDInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterDInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterDInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
