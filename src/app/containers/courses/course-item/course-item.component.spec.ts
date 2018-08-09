import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from '@containers/courses/course-item/course-item.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Course } from '@containers/courses/shared/course.model';
import { HighlightBorderDirective } from '@containers/courses/courses-list/highlight-border.directive';
import { DatePipe } from '@angular/common';
import { click } from '../../../testing';
import { FormatMinutesPipe } from '@containers/courses/shared/format-minutes.pipe';
import { Overlay } from '@angular/cdk/overlay';

describe('CourseItemComponent', () => {
    let component: CourseItemComponent;
    let fixture: ComponentFixture<CourseItemComponent>;
    let courseItemDe: DebugElement;
    let testCourse: Course;
    let formatMinutesPipe: FormatMinutesPipe;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CourseItemComponent, HighlightBorderDirective, FormatMinutesPipe],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [Overlay],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseItemComponent);
        formatMinutesPipe = new FormatMinutesPipe();
        testCourse = {
            id: 12,
            date: new Date(),
            description: 'Text',
            durationMin: 60,
            name: 'Awesome course',
            isTopRated: true,
        };
        testCourse.name = testCourse.name.toUpperCase();
        component = fixture.componentInstance;
        fixture.detectChanges();
        courseItemDe = fixture.debugElement.query(By.css('.course__info'));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display course title', () => {
        component.course = testCourse;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.course__title').textContent).toContain(
            testCourse.name
        );
    });

    it('should display course duration', () => {
        component.course = testCourse;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.course__duration').textContent).toContain(
            formatMinutesPipe.transform(testCourse.durationMin)
        );
    });

    it('should display course creation date', () => {
        const datePipe = new DatePipe('en');
        component.course = testCourse;
        fixture.detectChanges();
        const courseDurationEl = fixture.debugElement.nativeElement.querySelector(
            '.course__creation-date'
        );
        expect(courseDurationEl.textContent).toContain(datePipe.transform(testCourse.date));
    });

    it('should create top rated icon if course is top rated', () => {
        component.course = testCourse;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.course__top-rated-icon')).not.toBeNull();
    });
});
