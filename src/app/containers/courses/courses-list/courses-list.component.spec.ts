import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesListComponent } from '@containers/courses/courses-list/courses-list.component';
import { Course } from '@containers/courses/shared/course.model';
import { FilterCourseItemsPipe } from '@containers/courses/courses-list/filter-course-items.pipe';

describe('CoursesListComponent', () => {
    let component: CoursesListComponent;
    let fixture: ComponentFixture<CoursesListComponent>;
    let testCourses: Course[];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CoursesListComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [FilterCourseItemsPipe],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        testCourses = [
            {
                id: 11,
                creationDate: new Date(),
                description: 'Text',
                durationMin: 60,
                title: 'Awesome C# course',
                topRated: false,
            },
            {
                id: 12,
                creationDate: new Date(),
                description: 'Text',
                durationMin: 60,
                title: 'Awesome course',
                topRated: true,
            },
        ];
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create list of courses', () => {
        component.courses = testCourses;
        fixture.detectChanges();
        expect(
            Array.from(fixture.nativeElement.querySelectorAll('.courses-list__course-item')).length
        ).toBeGreaterThan(0);
    });

    it('should display load more button if courses lenght greater than 0', () => {
        component.courses = testCourses;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.courses-list__load-more')).not.toBeNull();
    });

    it('should display no courses placeholder if courses length equal 0', () => {
        component.courses = [];
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.courses-list__no-courses')).not.toBeNull();
    });
});
