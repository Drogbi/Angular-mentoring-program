import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from '../course/course.component';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { CoursesToolboxComponent } from '../courses-toolbox/courses-toolbox.component';

import { CourseService } from '../shared/course.service';

@NgModule({
    imports: [CommonModule],
    declarations: [CourseComponent, CoursesListComponent, CoursesToolboxComponent],
    providers: [CourseService],
})
export class CoursesModule {}
