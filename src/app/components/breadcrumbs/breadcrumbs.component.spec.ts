import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsComponent } from '@components/breadcrumbs/breadcrumbs.component';
import { Router } from '@angular/router';

describe('BreadcrumbsComponent', () => {
    let component: BreadcrumbsComponent;
    let fixture: ComponentFixture<BreadcrumbsComponent>;

    beforeEach(async(() => {
        const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

        TestBed.configureTestingModule({
            declarations: [BreadcrumbsComponent],
            providers: [{ provide: Router, useValue: routerSpy }],
        }).compileComponents();
    }));

    beforeEach(() => {
        const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

        fixture = TestBed.createComponent(BreadcrumbsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain real path', () => {
        expect(fixture.nativeElement.textContent).toContain('Courses');
    });
});
