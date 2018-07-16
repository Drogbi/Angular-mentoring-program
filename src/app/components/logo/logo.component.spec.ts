import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from '@components/logo/logo.component';

describe('LogoComponent', () => {
    let component: LogoComponent;
    let fixture: ComponentFixture<LogoComponent>;
    let logoNameEl: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LogoComponent],
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
