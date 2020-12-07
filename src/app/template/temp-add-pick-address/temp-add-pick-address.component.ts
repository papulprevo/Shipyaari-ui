import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-temp-add-pick-address',
  templateUrl: './temp-add-pick-address.component.html',
  styleUrls: ['./temp-add-pick-address.component.css']
})
export class TempAddPickAddressComponent implements OnInit {

  addTemplate = new FormGroup({
    template_name: new FormControl('', Validators.required),
    product_description: new FormControl('', Validators.required),
    sku: new FormControl('', Validators.required),
    hsn: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    tax: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required)
  });

  onSubmit()
{
  console.log(this.addTemplate.value);
}

  constructor() { }

  ngOnInit(): void {
  }

}
