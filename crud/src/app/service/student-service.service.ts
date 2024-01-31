import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface StudentResponse{
  createdAt: string,
  name: string,
  avatar: string,
  id: number,
  mark1: number,
  mark2: number,
  mark3: number,
  total: number,
  grade: string
}
 
@Injectable({
  providedIn: 'root'
})

export class StudentService{

  constructor(private httpClient: HttpClient) {}

  getStudents(){    //read
    return this.httpClient.get('https://65a8ca26219bfa37186794f1.mockapi.io/v1/crud_Operations');
  }

  saveStudent(inputData: object){
    return this.httpClient.post('https://65a8ca26219bfa37186794f1.mockapi.io/v1/crud_Operations', inputData);
  }
}
