import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-edit-del-add',
  templateUrl: './edit-del-add.component.html',
  styleUrls: ['./edit-del-add.component.css']
})
export class EditDelAddComponent implements OnInit {

  edit_del_Address = new FormGroup({
    edit_del_name: new FormControl('', Validators.required),
    edit_del_company: new FormControl ('', Validators.required),
    edit_del_cont_name: new FormControl ('', Validators.required),
    edit_del_contact: new FormControl ('', Validators.required),
    edit_del_pin: new FormControl('', Validators.required),
    edit_del_landmark: new FormControl('', Validators.required),
    edit_del_address1: new FormControl('', Validators.required),
    edit_del_address2: new FormControl('', Validators.required),
    edit_del_country: new FormControl('', Validators.required),
    edit_del_state: new FormControl('', Validators.required),
    edit_del_city: new FormControl('', Validators.required),
    edit_del_Gst: new FormControl('', Validators.required)
  });

  onSubmit()
    {
      console.log(this.edit_del_Address.value);
    }
  

  constructor() { }

  ngOnInit(): void {
  }

}
