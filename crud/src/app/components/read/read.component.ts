import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/models/Student';
import { StudentService } from 'src/app/shared/services/student/student-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  students!: Student[];

  ngOnInit(): void{
    this.getStudentsLists();
  }

  getStudentsLists(): void {
    this.studentService.getStudents().subscribe({
      next: (res: Student[]) => {
        this.students = res as Student[];
        // console.log(res);
        
      },
      error: (err: Error) => {
        console.error(err);
      },
      complete: () => {
        console.log('Call completed!');
      },
    });
  }

  deleteStudent(event: Event, studentId: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      const target = event.target as HTMLElement;
      target.innerHTML = 'Deleting...';
      // event.target.innerText = 'Deleting...';

      this.studentService.deleteStudentRecord(studentId).subscribe({
        next: () => {
          this.getStudentsLists();
          alert('Record Deleted!!!');
        },
        error: (err: Error) => {
          console.log(err);
        },
      });
    }
  }
}
