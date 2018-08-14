import { TestBed, inject } from '@angular/core/testing';

import { BlockerService } from './blocker.service';

describe('BlockerService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BlockerService],
        });
    });

    it('should be created', inject([BlockerService], (service: BlockerService) => {
        expect(service).toBeTruthy();
    }));
});
