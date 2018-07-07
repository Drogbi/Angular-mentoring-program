import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesModule } from '@containers/courses/courses.module';
import { ComponentsModule } from '@components/components.module';

@NgModule({
    imports: [CommonModule, ComponentsModule, CoursesModule],
    exports: [CoursesModule],
    declarations: [],
})
export class ContainersModule {}
