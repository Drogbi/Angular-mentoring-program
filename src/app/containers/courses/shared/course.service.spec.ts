import { TestBed, inject } from '@angular/core/testing';

import { CourseService } from './course.service';

describe('CourseService', () => {
    let service: CourseService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CourseService],
        });
        service = TestBed.get(CourseService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return courses', () => {
        service.getCourses().subscribe(courses => expect(courses.length).toBeGreaterThan(0));
    });

    it('should return deleted course', () => {
        service.getCourses().subscribe(courses => {
            expect(
                service
                    .deleteCourse(courses[0].id)
                    .subscribe(deletedCourse => (deletedCourse.id = courses[0].id))
            );
        });
    });
});
