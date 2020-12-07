import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-pickup-add',
  templateUrl: './add-pickup-add.component.html',
  styleUrls: ['./add-pickup-add.component.css']
})
export class AddPickupAddComponent implements OnInit {

  
  Add_pickup_Address = new FormGroup({
    Add_pick_name: new FormControl('', Validators.required),
    Add_pick_company: new FormControl ('', Validators.required),
    Add_pick_cont_name: new FormControl ('', Validators.required),
    Add_pick_contact: new FormControl ('', Validators.required),
    Add_pick_pin: new FormControl('', Validators.required),
    Add_pick_landmark: new FormControl('', Validators.required),
    Add_pick_address1: new FormControl('', Validators.required),
    Add_pick_address2: new FormControl('', Validators.required),
    Add_pick_country: new FormControl('', Validators.required),
    Add_pick_state: new FormControl('', Validators.required),
    Add_pick_city: new FormControl('', Validators.required),
    Add_pick_Gst: new FormControl('', Validators.required)
  });

  onSubmit()
  {
    console.log(this.Add_pickup_Address.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
