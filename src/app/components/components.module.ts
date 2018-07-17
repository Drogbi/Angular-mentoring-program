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
    ],
    declarations: [
        ButtonComponent,
        BreadcrumbsComponent,
        FooterComponent,
        HeaderComponent,
        InputComponent,
        LogoComponent,
        LabeledInputComponent,
    ],
})
export class ComponentsModule {}
