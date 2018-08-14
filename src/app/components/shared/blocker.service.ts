import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { DomPortalHost, Portal, ComponentPortal } from '@angular/cdk/portal';
import { BlockerComponent } from '@components/blocker/blocker.component';

@Injectable({
    providedIn: 'root',
})
export class BlockerService {
    private portalHost: DomPortalHost;
    private portal: ComponentPortal<BlockerComponent>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private appRef: ApplicationRef
    ) {}

    show(isOpen: boolean) {
        console.log('show');
        if (isOpen) {
            this.portalHost = new DomPortalHost(
                document.querySelector('body'),
                this.componentFactoryResolver,
                this.appRef,
                this.injector
            );
            this.portal = new ComponentPortal(BlockerComponent);

            // Attach portal to host
            this.portalHost.attach(this.portal);
        } else if (!isOpen) {
            this.portalHost.detach();
        }
    }
}
