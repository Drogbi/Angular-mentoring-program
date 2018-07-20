import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Injectable, ComponentRef } from '@angular/core';
import { IModal } from '@components/shared/types';

@Injectable({
    providedIn: 'root',
})
export class ConfirmationModalService {
    constructor(private overlay: Overlay) {}

    open(ModalComponent: ComponentType<IModal>) {
        const config: OverlayConfig = {
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            panelClass: 'modal-container',
        };
        const overlayRef = this.overlay.create(config);
        const modalComponentPortal = new ComponentPortal(ModalComponent);
        const compRef: ComponentRef<IModal> = overlayRef.attach(modalComponentPortal);

        return compRef.instance;
    }
}
