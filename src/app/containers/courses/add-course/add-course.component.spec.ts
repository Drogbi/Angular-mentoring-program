import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseComponent } from './add-course.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormatMinutesPipe } from '@containers/courses/shared/format-minutes.pipe';
import { Router } from '@angular/router';

describe('AddCourseComponent', () => {
    let component: AddCourseComponent;
    let fixture: ComponentFixture<AddCourseComponent>;

    beforeEach(async(() => {
        const routerSpy = jasmine.createSpyObj('Router', ['navite']);

        TestBed.configureTestingModule({
            declarations: [AddCourseComponent, FormatMinutesPipe],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [{ provide: Router, useValue: routerSpy }],
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
