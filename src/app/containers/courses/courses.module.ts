import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesToolboxComponent } from './courses-toolbox/courses-toolbox.component';
import { CourseItemComponent } from './course-item/course-item.component';

import { CourseService } from './shared/course.service';
import { ComponentsModule } from '@components/components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [CommonModule, ComponentsModule, HttpClientModule],
    exports: [CoursesListComponent, CoursesToolboxComponent, CourseItemComponent],
    declarations: [CoursesListComponent, CoursesToolboxComponent, CourseItemComponent],
    providers: [CourseService],
})
export class CoursesModule {}