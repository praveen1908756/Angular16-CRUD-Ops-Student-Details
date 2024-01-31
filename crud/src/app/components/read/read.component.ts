import { Component } from '@angular/core';
import { StudentResponse, StudentService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent {
  constructor(private studentService: StudentService) {}

  students!: StudentResponse[];

  ngOnInit(){
    this.getStudentsLists();
  }

  getStudentsLists(){
    this.studentService.getStudents().subscribe((res:any) => {
      this.students = res;
    });
  }
}