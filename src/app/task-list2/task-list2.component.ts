import { Component, Input, OnInit, Output, Inject } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Task } from '../model/task.model';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
  title: string
  description: string
  task: Task
  newTask: Task


}

@Component({
  selector: 'app-task-list2',
  templateUrl: './task-list2.component.html',
  styleUrls: ['./task-list2.component.scss']
})
export class TaskList2Component implements OnInit {

  taskCorrected: Task
  newTask: Task
  animal: string;
  name: string;
  title: string
  description : string
  
  
  @Input() task: Task
  @Output() deleteTask: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() correctedTask: EventEmitter<Task> = new EventEmitter<Task>()
  

  
  delete() {
    this.deleteTask.emit(true)
  }
  
  editTask($event: Task) {
    this.taskCorrected = $event
  }
  
  constructor(public dialog: MatDialog){}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '700px',
      data: { name: this.name, animal: this.animal, newTask: this.newTask }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(this.task.title || this.task.description){
        this.task = result
        console.log(this.task.description)
      }
    });
  }



  ngOnInit(): void {

    this.newTask = new Task(this.task.title, this.task.description)


  }

}


