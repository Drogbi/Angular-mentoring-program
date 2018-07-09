import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CoursesToolboxComponent } from './courses-toolbox.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CoursesToolboxComponent', () => {
    let component: CoursesToolboxComponent;
    let fixture: ComponentFixture<CoursesToolboxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CoursesToolboxComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesToolboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
