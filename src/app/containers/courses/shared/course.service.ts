import { Injectable } from '@angular/core';
import { Course } from '@containers/courses/shared/course.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { v4 as uuid } from 'uuid';
import { delay } from 'rxjs/operators';

const baseUrl = 'http://localhost:3004/courses';

@Injectable({
    providedIn: 'root',
})
export class CourseService {
    constructor(private http: HttpClient) {}

    getCourses(start: string): Observable<Course[]> {
        return this.http.get<Course[]>(`${baseUrl}`, { params: { start } }).pipe(delay(1500));
    }

    deleteCourse(id: string): Observable<Object> {
        return this.http.delete(`${baseUrl}/${id}`).pipe(delay(1500));
    }

    createCourse(course: Course): Observable<any> {
        return this.http.post<Course>(`${baseUrl}`, { ...course, id: uuid() }).pipe(delay(1500));
    }

    updateCourse(id: string, newCourse: Course): Observable<any> {
        return this.http.put<Course>(`${baseUrl}/${id}`, { ...newCourse }).pipe(delay(1500));
    }

    getCourseById(id: string): Observable<Course> {
        return this.http.get<Course>(`${baseUrl}/${id}`).pipe(delay(1500));
    }

    searchCourses(textFragment: string): Observable<any> {
        return this.http
            .get<Course[]>(`${baseUrl}`, { params: { textFragment } })
            .pipe(delay(1500));
    }
}
