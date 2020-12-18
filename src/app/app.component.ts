import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from './model/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  task: Task;
  taskList: Task[] = [];

  nameControl: FormControl = new FormControl('Nate')

  name: string = this.nameControl.value

  p: boolean = false
  switch : string = "salojoijut"

  newTask($event: Task){

    // console.log(this.task.title, this.task.description)
    if($event){
      this.task = new Task($event.title, $event.description)
      this.taskList.push(this.task)
    }
  }

  deleteTask($event){
    if($event)
      this.taskList.pop()
  }

  buttonClick()
  {
    this.p = true
  }


  slides = [{ 'image': '../assets/img/ben-warren-X_QKVdMtDNI-unsplash.jpg' },
  { 'image': '../assets/img/bernardo-lorena-ponte-0F3Yp4XEq4w-unsplash.jpg' },
  { 'image': '../assets/img/fernando-paredes-murillo-yWbxfKurMH0-unsplash.jpg' },
  { 'image': '../assets/img/omer-salom--Djvg5Bpyqs-unsplash.jpg' },
  { 'image': '../assets/img/omer-salom--Djvg5Bpyqs-unsplash.jpg' },
  { 'image': '../assets/img/photoholgic-uxr5mXKJxmA-unsplash.jpg' }];





}
