import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@components/button/button.component';
import { BreadcrumbsComponent } from '@components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';
import { InputComponent } from '@components/input/input.component';
import { LogoComponent } from '@components/logo/logo.component';
import { LabeledInputComponent } from './labeled-input/labeled-input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { BlockerComponent } from './blocker/blocker.component';
import { DeleteItemModalComponent } from '@containers/courses/shared/modals/delete-item-modal/delete-item-modal.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [
        ButtonComponent,
        BreadcrumbsComponent,
        FooterComponent,
        HeaderComponent,
        InputComponent,
        LogoComponent,
        LabeledInputComponent,
        TextAreaComponent,
    ],
    declarations: [
        ButtonComponent,
        BreadcrumbsComponent,
        FooterComponent,
        HeaderComponent,
        InputComponent,
        LogoComponent,
        LabeledInputComponent,
        TextAreaComponent,
        BlockerComponent,
    ],
    entryComponents: [BlockerComponent],
})
export class ComponentsModule {}
