import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '@components/components.module';
import { AuthService } from './shared/auth.service';

@NgModule({
    imports: [CommonModule, ComponentsModule],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [AuthService],
})
export class AuthModule {}
