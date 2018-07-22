import { TestBed, inject } from '@angular/core/testing';

import { ConfirmationModalService } from './confirmation-modal.service';
import { Overlay } from '@angular/cdk/overlay';

describe('ConfirmationModalService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ConfirmationModalService, Overlay],
        });
    });

    it('should be created', inject(
        [ConfirmationModalService],
        (service: ConfirmationModalService) => {
            expect(service).toBeTruthy();
        }
    ));
});
