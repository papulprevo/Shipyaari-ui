import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-b2bshipment',
  templateUrl: './b2bshipment.component.html',
  styleUrls: ['./b2bshipment.component.css']
})
export class B2bshipmentComponent implements OnInit {

  mainTable:any[] = [
    {
      id : '',
      childArr: [
        {
          
        }
      ]
    }
  ];

  add_b2b_shipment = new FormGroup({
    phone_no: new FormControl('', Validators.required),
    gst_no: new FormControl('', Validators.required),
    order_id: new FormControl('', Validators.required),
    d_f_name: new FormControl('', Validators.required),
    l_name: new FormControl,
    email: new FormControl,
    d_landmark: new FormControl,
    address1: new FormControl('', Validators.required),
    address2: new FormControl,
    d_pincode: new FormControl ('', Validators.required),
    City: new FormControl,
    State: new FormControl,
    Country: new FormControl,
    pick_address: new FormControl,
    gst: new FormControl,
    ship_date: new FormControl,
    no_of_packages: new FormControl,
    product_details: new FormControl,
    box: new FormControl,
    weightBox: new FormControl,
    inv_val_per_box: new FormControl,
    total: new FormControl,
    l: new FormControl,
    w: new FormControl,
    h: new FormControl,
    total_weiht: new FormControl,
    billable_weight: new FormControl,
    grand_total: new FormControl,
    service_name: new FormControl,
    Courier_name: new FormControl,
  })

  onSubmit()
  {
    console.log(this.add_b2b_shipment.value);
  }

 
  


  isShown: boolean = false ; // hidden by default
  toggleShow() {
    this.isShown = ! this.isShown;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
