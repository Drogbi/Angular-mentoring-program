import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from '@containers/courses/courses-list/courses-list.component';
import { CoursesToolboxComponent } from '@containers/courses/courses-toolbox/courses-toolbox.component';
import { CourseItemComponent } from '@containers/courses/course-item/course-item.component';

import { CourseService } from '@containers/courses/shared/course.service';
import { ComponentsModule } from '@components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { HighlightBorderDirective } from '@containers/courses/courses-list/highlight-border.directive';
import { FormatMinutesPipe } from '@containers/courses/shared/format-minutes.pipe';
import { FilterCourseItemsPipe } from '@containers/courses/courses-list/filter-course-items.pipe';
import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { DeleteItemModalComponent } from './shared/modals/delete-item-modal/delete-item-modal.component';
import { ConfirmationModalService } from '@components/shared/confirmation-modal.service';

@NgModule({
    imports: [CommonModule, ComponentsModule, HttpClientModule, OverlayModule],
    exports: [
        CoursesListComponent,
        CoursesToolboxComponent,
        CourseItemComponent,
        DeleteItemModalComponent,
    ],
    declarations: [
        CoursesListComponent,
        CoursesToolboxComponent,
        CourseItemComponent,
        HighlightBorderDirective,
        FormatMinutesPipe,
        FilterCourseItemsPipe,
        DeleteItemModalComponent,
    ],
    providers: [CourseService, FilterCourseItemsPipe, Overlay, ConfirmationModalService],
    entryComponents: [DeleteItemModalComponent],
})
export class CoursesModule {}
