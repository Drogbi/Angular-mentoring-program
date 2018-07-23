import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseComponent } from './add-course.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

describe('AddCourseComponent', () => {
    let component: AddCourseComponent;
    let fixture: ComponentFixture<AddCourseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddCourseComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddCourseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
