import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../models/Student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Student[]>{    //read
    return this.httpClient.get<Student[]>('https://65a8ca26219bfa37186794f1.mockapi.io/v1/crud_Operations');
  }

  getStudent(studentId: number): Observable<Student> {
    return this.httpClient.get<Student>(`https://65a8ca26219bfa37186794f1.mockapi.io/v1/crud_Operations/${studentId}`);
  }

  saveStudent(inputData: object): Observable<Student> {
    return this.httpClient.post<Student>('https://65a8ca26219bfa37186794f1.mockapi.io/v1/crud_Operations', inputData);
  }

  updateStudent(inputData: object, studentId: number): Observable<Student> {
    return this.httpClient.put<Student>(`https://65a8ca26219bfa37186794f1.mockapi.io/v1/crud_Operations/${studentId}`, inputData);
  }

  deleteStudentRecord(studentId: number): Observable<Student> {
    return this.httpClient.delete<Student>(`https://65a8ca26219bfa37186794f1.mockapi.io/v1/crud_Operations/${studentId}`);
  }
}


