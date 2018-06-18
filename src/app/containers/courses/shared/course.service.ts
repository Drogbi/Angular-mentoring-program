import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of} from 'rxjs';


const courses = [
    { id: 0, title: 'JavaScript Functions Decorators Generators', creationDate: new Date(2019, 10, 10), description: 'Secure shy favour length all twenty ' +
        'denote. Small for ask shade water manor think men begin. Able rent long in do we. An concluded sportsman offending so ' +
        'provision mr education. Dissimilar admiration so terminated no in contrasted it. He in sportsman household otherwise it ' +
        'perceived instantly. Advantages entreaties mr he apartments', durationMin: 30 },
    { id: 1, title: '#C Essential', creationDate: new Date(2019, 1, 5), description: 'Secure shy favour length all twenty ' +
        'denote. Small for ask shade water manor think men begin. Able rent long in do we. An concluded sportsman offending so ' +
        'provision mr education. Dissimilar admiration so terminated no in contrasted it. He in sportsman household otherwise it ' +
        'perceived instantly. Advantages entreaties mr he apartments. Small for ask shade water manor think men begin.' +
        'Secure shy favour length all twenty' +
        'denote. Small for ask shade water manor think men begin. Able rent long in do we. An concluded sportsman offending so' +
        'provision mr education. Dissimilar admiration so terminated no in contrasted it. He in sportsman household otherwise it' +
        'perceived instantly. Advantages entreaties mr he apartments. Small for ask shade water manor think men begin.', durationMin: 33 },
    { id: 2, title: 'Python Beginner', creationDate: new Date(2019, 2, 14), description: 'Secure shy favour length all twenty ' +
        'denote. Small for ask shade water manor think men begin. Able rent long in do we. An concluded sportsman offending so ' +
        'provision mr education. Dissimilar admiration so terminated no in contrasted it. He in sportsman household otherwise it ' +
        'perceived instantly. Advantages entreaties mr he apartments', durationMin: 60 },
    { id: 3, title: 'JavaScript. ES6 Modules', creationDate: new Date(2018, 11, 23), description: 'Secure shy favour length all twenty ' +
        'denote. Small for ask shade water manor think men begin. Able rent long in do we. An concluded sportsman offending so ' +
        'provision mr education. Dissimilar admiration so terminated no in contrasted it. He in sportsman household otherwise it ' +
        'perceived instantly. Advantages entreaties mr he apartments. Small for ask shade water manor think men begin.', durationMin: 132 },
];

@Injectable({
    providedIn: 'root',
})
export class CourseService {
    constructor(private http: HttpClient) {}

    getCourses(): Observable<Course[]> {
        return of<Course[]>(courses);
    }

    deleteCourse(id: number): Observable<Course> {
        return of<Course>(courses.splice(courses.findIndex(item => item.id === id), 1).pop());
    }
}
