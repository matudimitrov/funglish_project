import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VowelsInfoComponent } from './vowels-info.component';

describe('VowelsInfoComponent', () => {
  let component: VowelsInfoComponent;
  let fixture: ComponentFixture<VowelsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VowelsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VowelsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
