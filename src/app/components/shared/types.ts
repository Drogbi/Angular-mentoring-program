import { EventEmitter } from '@angular/core';

export interface IModal {
    close: EventEmitter<boolean>;

    onSuccess: () => void;
    onFail: () => void;
}
