import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LabeledInputComponent } from './labeled-input.component';

describe('LabeledInputComponent', () => {
    let component: LabeledInputComponent;
    let fixture: ComponentFixture<LabeledInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LabeledInputComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LabeledInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
