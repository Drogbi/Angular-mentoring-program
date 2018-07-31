import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '@components/components.module';
import { CoursesListComponent } from '@containers/courses/courses-list/courses-list.component';
import { AppComponent } from './app.component';
import { AuthModule } from './containers/auth/auth.module';
import { LoginComponent } from './containers/auth/login/login.component';
import { ContainersModule } from './containers/containers.module';
import { AuthService } from './containers/auth/shared/auth.service';
import { AddCourseComponent } from '@containers/courses/add-course/add-course.component';
import { Page404Component } from './containers/pages/page404/page404.component';
import { EditCourseComponent } from '@containers/courses/edit-course/edit-course.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: 'courses', component: CoursesListComponent, data: { title: 'Courses' } },
    { path: 'courses/:id', component: EditCourseComponent },
    { path: 'login', component: LoginComponent, data: { title: 'Login' } },
    { path: 'add-course', component: AddCourseComponent, data: { title: 'Add course' } },
    { path: '**', component: Page404Component },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ContainersModule,
        ComponentsModule,
        AuthModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {}
