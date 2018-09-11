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
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DateAdapter,
    MAT_DATE_FORMATS,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    COURSES_DATE_FORMATS,
    CoursesDateAdapter,
} from '@containers/courses/adapters/CoursesDateAdapter';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ComponentsModule,
        HttpClientModule,
        OverlayModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
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
        AddCourseComponent,
        EditCourseComponent,
    ],
    providers: [
        CourseService,
        FilterCourseItemsPipe,
        Overlay,
        ConfirmationModalService,
        {
            provide: DateAdapter,
            useClass: CoursesDateAdapter,
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: COURSES_DATE_FORMATS,
        },
    ],
    entryComponents: [DeleteItemModalComponent],
})
export class CoursesModule {}
