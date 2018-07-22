import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from '@components/header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [{ provide: Router, useValue: routerSpy }],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
