import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsonantsInfoComponent } from './consonants-info.component';

describe('ConsonantsInfoComponent', () => {
  let component: ConsonantsInfoComponent;
  let fixture: ComponentFixture<ConsonantsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsonantsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsonantsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
