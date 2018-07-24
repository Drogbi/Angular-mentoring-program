import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from '@components/logo/logo.component';
import { Router } from '@angular/router';

describe('LogoComponent', () => {
    let component: LogoComponent;
    let fixture: ComponentFixture<LogoComponent>;
    let logoNameEl: HTMLElement;

    beforeEach(async(() => {
        const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

        TestBed.configureTestingModule({
            declarations: [LogoComponent],
            providers: [{ provide: Router, useValue: routerSpy }],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LogoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        logoNameEl = fixture.nativeElement.querySelector('.logo__name');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display original logo name', () => {
        expect(logoNameEl.textContent).toContain(component.logoName);
    });

    it('should display different logo name', () => {
        component.logoName = 'Other couser app logo name';
        fixture.detectChanges();
        expect(logoNameEl.textContent).toContain(component.logoName);
    });
});
