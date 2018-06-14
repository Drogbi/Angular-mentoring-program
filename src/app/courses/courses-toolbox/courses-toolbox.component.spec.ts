import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesToolboxComponent } from './courses-toolbox.component';

describe('CoursesToolboxComponent', () => {
  let component: CoursesToolboxComponent;
  let fixture: ComponentFixture<CoursesToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
