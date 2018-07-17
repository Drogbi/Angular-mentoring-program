import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '@components/components.module';
import { CoursesListComponent } from '@containers/courses/courses-list/courses-list.component';
import { AppComponent } from './app.component';
import { AuthModule } from './containers/auth/auth.module';
import { LoginComponent } from './containers/auth/login/login.component';
import { ContainersModule } from './containers/containers.module';

const appRoutes: Routes = [
    { path: 'courses', component: CoursesListComponent },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ContainersModule,
        ComponentsModule,
        AuthModule,
        RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
