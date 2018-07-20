import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Injectable, ComponentRef, EventEmitter } from '@angular/core';
import { IModal } from '@components/shared/types';

@Injectable({
    providedIn: 'root',
})
export class ConfirmationModalService {
    private overlayRef: OverlayRef;

    constructor(private overlay: Overlay) {}

    open(ModalComponent: ComponentType<IModal>): EventEmitter<boolean> {
        const config: OverlayConfig = {
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            panelClass: 'modal-container',
            backdropClass: 'modal-backdrop',
        };
        this.overlayRef = this.overlay.create(config);
        const modalComponentPortal = new ComponentPortal(ModalComponent);
        const compRef: ComponentRef<IModal> = this.overlayRef.attach(modalComponentPortal);

        return compRef.instance.close;
    }

    close(): void {
        this.overlayRef.dispose();
    }
}
