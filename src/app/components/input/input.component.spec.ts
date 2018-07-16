import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from '@components/input/input.component';
import { FormsModule } from '@angular/forms';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('InputComponent', () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;
    let inputDe: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [InputComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        inputDe = fixture.debugElement.query(By.css('.input'));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have placeholder', () => {
        component.placeholder = 'placeholder';
        fixture.detectChanges();
        expect(inputDe.nativeElement.attributes.placeholder.value).toContain('placeholder');
    });
});
