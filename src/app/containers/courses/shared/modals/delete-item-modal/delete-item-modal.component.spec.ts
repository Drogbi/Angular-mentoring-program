import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItemModalComponent } from './delete-item-modal.component';
import { Overlay } from '@angular/cdk/overlay';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DeleteItemModalComponent', () => {
    let component: DeleteItemModalComponent;
    let fixture: ComponentFixture<DeleteItemModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DeleteItemModalComponent],
            providers: [Overlay],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DeleteItemModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
