import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CoursesToolboxComponent } from '@containers/courses/courses-toolbox/courses-toolbox.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { newEvent } from '../../../testing';
import { InputComponent } from '@components/input/input.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@components/button/button.component';

describe('CoursesToolboxComponent', () => {
    let component: CoursesToolboxComponent;
    let fixture: ComponentFixture<CoursesToolboxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InputComponent, ButtonComponent, CoursesToolboxComponent],
            imports: [FormsModule],
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

    it('should change search value when typing in search input ', () => {
        const inputElContainer = fixture.debugElement.query(
            By.css('.courses-toolbox__search-input')
        );
        const inputEl = inputElContainer.nativeElement.querySelector('input');
        inputEl.value = 'search val';
        inputEl.dispatchEvent(newEvent('input'));
        expect(component.searchValue).toEqual('search val');
    });
});
