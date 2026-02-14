import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {TASKS} from '../mock-tasks'
import {Observable,of} from 'rxjs'
import{Task} from '../Task'



@Injectable({
  providedIn: 'root',
})
export class TaskService {

  constructor() { }

  getTasks():  Observable <Task[]> {
    const tasks=of(TASKS) ;
    return tasks
  }

}
