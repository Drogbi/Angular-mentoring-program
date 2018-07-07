import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Course } from '@containers/courses/shared/course.model';

describe('CourseItemComponent', () => {
    let component: CourseItemComponent;
    let fixture: ComponentFixture<CourseItemComponent>;
    let courseItemDe: DebugElement;
    const testCourse: Course = {
        id: 0,
        title: 'JavaScript Functions Decorators Generators',
        creationDate: new Date(2019, 10, 10),
        description: 'text',
        durationMin: 30,
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CourseItemComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        courseItemDe = fixture.debugElement.query(By.css('.course'));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
