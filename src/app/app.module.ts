import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/course.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
