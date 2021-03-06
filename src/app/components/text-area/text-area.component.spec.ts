import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaComponent } from './text-area.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';

describe('TextAreaComponent', () => {
    let component: TextAreaComponent;
    let fixture: ComponentFixture<TextAreaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [TextAreaComponent],
            imports: [FormsModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TextAreaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
