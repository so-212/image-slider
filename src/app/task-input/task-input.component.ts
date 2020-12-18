import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {

  task: Task

  @Output() newTask: EventEmitter<Task> = new EventEmitter<Task>()

  addNewTask(title: HTMLInputElement, description: HTMLInputElement) {


    this.task = new Task(title.value, description.value)
    this.newTask.emit(this.task)
    title.value = ''
    description.value = ''

    return false //stops event propagation
  }


  constructor() {



  }

  ngOnInit(): void {
  }



}
