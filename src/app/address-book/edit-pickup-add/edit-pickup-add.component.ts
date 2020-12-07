import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-edit-pickup-add',
  templateUrl: './edit-pickup-add.component.html',
  styleUrls: ['./edit-pickup-add.component.css']
})
export class EditPickupAddComponent implements OnInit {

  edit_pickup_Address = new FormGroup({
    edit_pick_name: new FormControl('', Validators.required),
    edit_pick_company: new FormControl ('', Validators.required),
    edit_pick_cont_name: new FormControl ('', Validators.required),
    edit_pick_contact: new FormControl ('', Validators.required),
    edit_pick_pin: new FormControl('', Validators.required),
    edit_pick_landmark: new FormControl('', Validators.required),
    edit_pick_address1: new FormControl('', Validators.required),
    edit_pick_address2: new FormControl('', Validators.required),
    edit_pick_country: new FormControl('', Validators.required),
    edit_pick_state: new FormControl('', Validators.required),
    edit_pick_city: new FormControl('', Validators.required),
    edit_pick_Gst: new FormControl('', Validators.required)
  });

  onSubmit()
  {
    console.log(this.edit_pickup_Address.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
