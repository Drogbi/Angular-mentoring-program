import { Component, OnInit, EventEmitter } from '@angular/core';
import { IModal } from '@components/shared/types';

@Component({
    selector: 'app-delete-item-modal',
    templateUrl: './delete-item-modal.component.html',
    styleUrls: ['./delete-item-modal.component.css'],
})
export class DeleteItemModalComponent implements IModal {
    public afterClose: EventEmitter<boolean> = new EventEmitter();
    constructor() {}

    public onSuccess() {
        this.afterClose.emit(true);
    }

    public onFail() {
        console.log('fail');
    }
}
