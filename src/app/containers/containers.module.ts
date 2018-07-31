import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesModule } from '@containers/courses/courses.module';
import { ComponentsModule } from '@components/components.module';
import { Page404Component } from './pages/page404/page404.component';

@NgModule({
    imports: [CommonModule, ComponentsModule, CoursesModule],
    exports: [CoursesModule],
    declarations: [Page404Component],
})
export class ContainersModule {}
