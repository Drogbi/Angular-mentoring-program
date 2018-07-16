import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from '@components/footer/footer.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain copiright message', () => {
        expect(fixture.debugElement.nativeElement.textContent).toContain(
            'Copyright @ Videocourses, All Rights Reserved.'
        );
    });
});
