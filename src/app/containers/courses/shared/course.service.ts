import { Injectable } from '@angular/core';
import { Course } from '@containers/courses/shared/course.model';
import { Observable, from, of } from 'rxjs';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';

let courses = [
    {
        id: 0,
        title: 'JavaScript Functions Decorators Generators',
        creationDate: new Date(2018, 6, 5),
        description:
            'Secure shy favour length all twenty ' +
            'denote. Small for ask shade water manor think men begin. Able rent long in do we. An concluded sportsman offending so ' +
            'provision mr education. Dissimilar admiration so terminated no in contrasted it. He in sportsman household otherwise it ' +
            'perceived instantly. Advantages entreaties mr he apartments',
        durationMin: 30,
        topRated: true,
    },
    {
        id: 1,
        title: 'C# Essential',
        creationDate: new Date(2019, 1, 5),
        description:
            'Secure shy favour length all twenty ' +
            'denote. Small for ask shade water manor think men begin. Able rent long in do we. An concluded sportsman offending so ' +
            'provision mr education. Dissimilar admiration so terminated no in contrasted it. He in sportsman household otherwise it ' +
            'perceived instantly. Advantages entreaties mr he apartments. Small for ask shade water manor think men begin.' +
            'Secure shy favour length all twenty' +
            'denote. Small for ask shade water manor think men begin. Able rent long in do we. An concluded sportsman offending so' +
            'provision mr education. Dissimilar admiration so terminated no in contrasted it. He in sportsman household otherwise it' +
            'perceived instantly. Advantages entreaties mr he apartments. Small for ask shade water manor think men begin.',
        durationMin: 33,
        topRated: false,
    },
    {
        id: 2,
        title: 'Python Beginner',
        creationDate: new Date(2019, 2, 14),
        description:
            'Secure shy favour length all twenty ' +
            'denote. Small for ask shade water manor think men begin. Able rent long in do we. An concluded sportsman offending so ' +
            'provision mr education. Dissimilar admiration so terminated no in contrasted it. He in sportsman household otherwise it ' +
            'perceived instantly. Advantages entreaties mr he apartments',
        durationMin: 60,
        topRated: false,
    },
    {
        id: 3,
        title: 'JavaScript. ES6 Modules',
        creationDate: new Date(2018, 11, 23),
        description:
            'Secure shy favour length all twenty ' +
            'denote. Small for ask shade water manor think men begin. Able rent long in do we. An concluded sportsman offending so ' +
            'provision mr education. Dissimilar admiration so terminated no in contrasted it. He in sportsman household otherwise it ' +
            'perceived instantly. Advantages entreaties mr he apartments. Small for ask shade water manor think men begin.',
        durationMin: 132,
        topRated: true,
    },
];

@Injectable({
    providedIn: 'root',
})
export class CourseService {
    constructor() {}

    getCourses(): Observable<Course[]> {
        return of<Course[]>(courses);
    }

    deleteCourse(id: number): Observable<Course> {
        return of<Course>(courses.splice(courses.findIndex(item => item.id === id), 1).pop());
    }

    createCourse(course: Course): Observable<boolean> {
        courses = courses.concat(course);
        if (courses.find(value => value.id === course.id)) {
            return of<boolean>(true);
        } else {
            return of<boolean>(false);
        }
    }

    updateCourse(courseId: number, newCourse: Course): Observable<boolean> {
        const course = courses.find(value => value.id === courseId);
        courses.splice(courses.findIndex(item => item.id === course.id), 1, newCourse);
        if (courses.find(value => value.id === newCourse.id)) {
            return of<boolean>(true);
        } else {
            return of<boolean>(false);
        }
    }

    getCourseById(id: number) {
        return of<Course>(courses.find(value => value.id === id));
    }
}
