import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-label-setting',
  templateUrl: './label-setting.component.html',
  styleUrls: ['./label-setting.component.css']
})
export class LabelSettingComponent implements OnInit {

  labelForm = new FormGroup({
   
  })

  constructor() { }
  onSubmit()
  {
    console.log(this.labelForm.value)
  }


  ngOnInit(): void {
  }

}
