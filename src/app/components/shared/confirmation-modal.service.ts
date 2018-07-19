import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/core/src/render3';

@Injectable({
    providedIn: 'root',
})
export class ConfirmationModalService {
    constructor(private overlay: Overlay) {}

    open(modalComponent: ComponentType<IModal>) {
        const config: OverlayConfig = {
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            panelClass: 'modal-container',
        };
        const overlayRef = this.overlay.create(config);
        const modalComponentPortal = new ComponentPortal(modalComponent);
        overlayRef.attach(modalComponentPortal);
    }
}
