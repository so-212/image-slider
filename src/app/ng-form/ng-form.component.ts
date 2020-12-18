import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.scss']
})
export class NgFormComponent implements OnInit {

  constructor() { }

  onSubmit(form: FormGroup)
  {
    console.log(form)
  }

  ngOnInit(): void {
  }

}
