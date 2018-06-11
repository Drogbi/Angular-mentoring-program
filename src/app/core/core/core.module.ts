import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LogoComponent } from '../logo/logo.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
    imports: [CommonModule, SharedModule],
    exports: [HeaderComponent, FooterComponent, LogoComponent, BreadcrumbsComponent],
    declarations: [HeaderComponent, FooterComponent, LogoComponent, BreadcrumbsComponent],
})
export class CoreModule {}
