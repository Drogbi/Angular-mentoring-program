import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '@containers/courses/shared/course.model';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ButtonComponent } from '@components/button/button.component';
import { ConfirmationModalService } from '@components/shared/confirmation-modal.service';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.css'],
})
export class CourseItemComponent implements OnInit {
    @Input() course: Course;
    @Output() deleted = new EventEmitter<Course>();

    constructor(private confirmationModalService: ConfirmationModalService) {
        this.course = {} as Course;
    }

    ngOnInit() {}

    public deleteCourse(): void {
        this.deleted.emit(this.course);
    }
}
