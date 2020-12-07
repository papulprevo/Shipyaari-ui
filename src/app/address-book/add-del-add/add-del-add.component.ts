import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-del-add',
  templateUrl: './add-del-add.component.html',
  styleUrls: ['./add-del-add.component.css']
})
export class AddDelAddComponent implements OnInit {

  Add_del_Address = new FormGroup({
    Add_del_name: new FormControl('', Validators.required),
    Add_del_company: new FormControl ('', Validators.required),
    Add_del_cont_name: new FormControl ('', Validators.required),
    Add_del_contact: new FormControl ('', Validators.required),
    Add_del_pin: new FormControl('', Validators.required),
    Add_del_landmark: new FormControl('', Validators.required),
    Add_del_address1: new FormControl('', Validators.required),
    Add_del_address2: new FormControl('', Validators.required),
    Add_del_country: new FormControl('', Validators.required),
    Add_del_state: new FormControl('', Validators.required),
    Add_del_city: new FormControl('', Validators.required),
    Add_del_Gst: new FormControl('', Validators.required)
  });

  onSubmit()
    {
      console.log(this.Add_del_Address.value);
    }
  

  constructor() { }

  ngOnInit(): void {
  }

}
