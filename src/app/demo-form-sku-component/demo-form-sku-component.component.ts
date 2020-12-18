import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-sku-component',
  templateUrl: './demo-form-sku-component.component.html',
  styleUrls: ['./demo-form-sku-component.component.scss']
})
export class DemoFormSkuComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

}
