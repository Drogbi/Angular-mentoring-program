import { EventEmitter } from '@angular/core';

export interface IModal {
    afterClose: EventEmitter<boolean>;

    onSuccess: () => void;
    onFail: () => void;
}
