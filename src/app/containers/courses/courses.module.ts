import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesToolboxComponent } from './courses-toolbox/courses-toolbox.component';
import { CourseItemComponent } from './course-item/course-item.component';

import { CourseService } from './shared/course.service';
import { ComponentsModule } from '@components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { HighlightBorderDirective } from '@containers/courses/course-item/highlight-border.directive';

@NgModule({
    imports: [CommonModule, ComponentsModule, HttpClientModule],
    exports: [
        CoursesListComponent,
        CoursesToolboxComponent,
        CourseItemComponent,
        HighlightBorderDirective,
    ],
    declarations: [
        CoursesListComponent,
        CoursesToolboxComponent,
        CourseItemComponent,
        HighlightBorderDirective,
    ],
    providers: [CourseService],
})
export class CoursesModule {}
