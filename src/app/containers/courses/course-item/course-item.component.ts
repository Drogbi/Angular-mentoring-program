import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ChangeDetectionStrategy,
} from '@angular/core';
import { ConfirmationModalService } from '@components/shared/confirmation-modal.service';
import { Course } from '@containers/courses/shared/course.model';
import { DeleteItemModalComponent } from '@containers/courses/shared/modals/delete-item-modal/delete-item-modal.component';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit {
    @Input() course: Course;
    @Output() deleted = new EventEmitter<Course>();

    constructor(private confirmationModalService: ConfirmationModalService) {
        this.course = {} as Course;
    }

    ngOnInit() {}

    public deleteCourse(): void {
        this.confirmationModalService.open(DeleteItemModalComponent).subscribe(response => {
            if (response) {
                this.deleted.emit(this.course);
            }
            this.confirmationModalService.close();
        });
    }
}
