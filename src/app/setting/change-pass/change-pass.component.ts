import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  change_pass_Form= new FormGroup({
    curre_pass: new FormControl('', Validators.required,),
    new_pass: new FormControl('', [Validators.required,Validators.minLength(8),]),
    re_new_pass: new FormControl('', [Validators.required,Validators.minLength(8),])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.change_pass_Form.value);
  }

}
