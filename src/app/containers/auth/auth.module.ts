import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '@components/components.module';

@NgModule({
    imports: [CommonModule, ComponentsModule],
    exports: [LoginComponent],
    declarations: [LoginComponent],
})
export class AuthModule {}
