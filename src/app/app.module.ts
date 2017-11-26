import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitlecasePipe } from './titlecase.pipe';
import { TitleComponent } from './title/title.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    TitlecasePipe,
    TitleComponent,
    ZippyComponent,
    CourseFormComponent,
    UpdatePasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
