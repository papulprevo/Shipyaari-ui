import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-temp-edit-pick-address',
  templateUrl: './temp-edit-pick-address.component.html',
  styleUrls: ['./temp-edit-pick-address.component.css']
})
export class TempEditPickAddressComponent implements OnInit {


  EditTemplate = new FormGroup({
    edit_template_name: new FormControl('', Validators.required),
    edit_product_description: new FormControl('', Validators.required),
    edit_sku: new FormControl('', Validators.required),
    edit_hsn: new FormControl('', Validators.required),
    edit_price: new FormControl('', Validators.required),
    edit_quantity: new FormControl('', Validators.required),
    edit_tax: new FormControl('', Validators.required),
    edit_weight: new FormControl('', Validators.required)
  });
  
  onSubmit()
{
  console.log(this.EditTemplate.value);
}

  constructor() { }

  ngOnInit(): void {
  }

}
