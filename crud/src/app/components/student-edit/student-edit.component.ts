import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/shared/models/Student';
import { StudentService } from 'src/app/shared/services/student/student-service.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
})
export class StudentEditComponent implements OnInit {
  studentId!: number;
  student: Student;
  errors: Error[] = [];
  grade: string;
  total: number;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.studentId = parseInt(this.route.snapshot.paramMap.get('id'));

    this.studentService.getStudent(this.studentId).subscribe({
      next: (res: Student) => {
        this.student = res as Student;
      },
      error(err: Error) {
        this.errors = err as Error;
      },
    });
  }

  updateStudent(): void {
    this.total =
      (this.student.mark1 + this.student.mark2 + this.student.mark3) / 3;
    if (this.total >= 90) {
      this.grade = 'A';
    } else if (this.total >= 80 && this.total < 90) {
      this.grade = 'B';
    } else if (this.total >= 70 && this.total < 80) {
      this.grade = 'C';
    } else if (this.total >= 60 && this.total < 70) {
      this.grade = 'D';
    } else {
      this.grade = 'F';
    }

    const inputData = {
      name: this.student.name,
      mark1: this.student.mark1,
      mark2: this.student.mark2,
      mark3: this.student.mark3,
      total: this.total,
      grade: this.grade
    };

    this.studentService.updateStudent(inputData, this.studentId).subscribe({
      next: (res: Student) => {
        alert('Record Updated!!');
        this.student = res as Student;
      },
      error(err: Error) {
        console.log(err);
        this.student = err as Error;
      },
    });
  }
}
