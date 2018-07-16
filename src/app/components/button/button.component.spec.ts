import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { ButtonComponent } from '@components/button/button.component';
import { click } from '../../testing';

describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;
    let buttonDe: DebugElement;
    let expectedIsDeleted: Boolean;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;

        buttonDe = fixture.debugElement.query(By.css('.button'));

        expectedIsDeleted = true;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain spacer when icon and label provided', () => {
        component.icon = 'face';
        component.label = 'Press to face';
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.button__spacer')).not.toBe(null);
    });

    it('should contain provided label', () => {
        component.label = 'Press to this button';
        fixture.detectChanges();
        expect(fixture.nativeElement.textContent).toContain('Press to this button');
    });

    it('should contain provided icon', () => {
        component.icon = 'face';
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.button__icon')).not.toBe(null);
    });
});

describe('ButtonComponent when inside a test host', () => {
    let testHost: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let buttonEl: HTMLElement;
    const expectedIsDeleted: Boolean = true;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonComponent, TestHostComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        testHost = fixture.componentInstance;
        buttonEl = fixture.nativeElement.querySelector('.button');

        fixture.detectChanges();
    });

    it('should invoke provided callback when clicked', () => {
        click(buttonEl);
        expect(testHost.isDeleted).toBe(expectedIsDeleted);
    });
});

////// Test Host Component //////
import { Component, DebugElement } from '@angular/core';

@Component({
    template: `<app-button (click)="onDeleted()"></app-button>`,
})
class TestHostComponent {
    public isDeleted: Boolean = false;
    public onDeleted() {
        this.isDeleted = true;
    }
}
