import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reportForm = new FormGroup({
    report_type : new FormControl('', Validators.required),
    date_range: new FormControl
  })
  constructor() { }

  onSubmit()
  {
    console.log(this.reportForm.value);
  }

  ngOnInit(): void {
  }

}
