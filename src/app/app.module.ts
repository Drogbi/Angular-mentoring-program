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
import { CanActivateGuard } from './containers/shared/can-activate.guard';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './containers/auth/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './containers/auth/auth.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full', canActivate: [CanActivateGuard] },
    {
        path: 'courses',
        component: CoursesListComponent,
        data: { title: 'Courses' },
        canActivate: [CanActivateGuard],
    },
    {
        path: 'courses/:id',
        component: EditCourseComponent,
        data: { title: 'Courses/' },
        canActivate: [CanActivateGuard],
    },
    { path: 'login', component: LoginComponent, data: { title: 'Login' } },
    {
        path: 'add-course',
        component: AddCourseComponent,
        data: { title: 'Add course' },
        canActivate: [CanActivateGuard],
    },
    { path: '**', component: Page404Component },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ContainersModule,
        ComponentsModule,
        AuthModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        StoreModule.forRoot({ auth: authReducer }),
        EffectsModule.forRoot([AuthEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 5,
        }),
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {}
