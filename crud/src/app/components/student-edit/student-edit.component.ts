import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {

  studentId!: any;
  student!: any;
  errors: any = [];

  constructor(private route: ActivatedRoute, private studentService: StudentService) {}

  ngOnInit(){
    this.studentId = this.route.snapshot.paramMap.get('id');
     
    this.studentService.getStudent(this.studentId).subscribe(res => {
      // console.log(res);
      this.student = res;   
    });
  }

  updateStudent(){
    var inputData = {
      name: this.student.name,
      mark1: this.student.mark1,
      mark2: this.student.mark2,
      mark3: this.student.mark3
    }

    this.studentService.updateStudent(inputData, this.studentId).subscribe({
      next: (res: any) => {
        alert("Record Updated!!");
      },
      error(err: any) {
        console.log(err);
        
      },
    });
  }
}
