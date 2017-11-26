import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  categories = ["Development", "Programming", "Machine Learning"];
  
  log(name) {
    console.log(name);
  }

  submit(course) {
    console.log(course);
  }
}
