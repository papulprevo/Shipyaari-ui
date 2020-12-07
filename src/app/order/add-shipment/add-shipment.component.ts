import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-shipment',
  templateUrl: './add-shipment.component.html',
  styleUrls: ['./add-shipment.component.css']
})
export class AddShipmentComponent implements OnInit {
 
 a: number;
  // childTable:any[] = [
  //   {
  //     id : ''
  //   }
  // ];

  mainTable:any[] = [
    {
      id : '',
      childArr: [
        {
          
        }
      ]
    }
  ];

  constructor() { }
 //Add Shipment form
  add_shipment = new FormGroup({
    delivery_details: new FormControl,
    phone_no: new FormControl('', Validators.required),
    client_order_id: new FormControl('', Validators.required),
    d_f_name: new FormControl('', Validators.required),
    l_name: new FormControl,
    email: new FormControl,
    d_landmark: new FormControl,
    address1: new FormControl,
    address2: new FormControl,
    d_pincode: new FormControl ('', Validators.required),
    City: new FormControl,
    State: new FormControl,
    Country: new FormControl,
    pick_address: new FormControl,
    gst: new FormControl,
    ship_date: new FormControl ('', Validators.required),
    identical:new FormControl,
    no_of_packages: new FormControl,
    producttablepackage_11: new FormControl,
    prod_name11: new FormControl,
    prod_sku11: new FormControl,
    prod_hsn11: new FormControl,
    prod_weight11: new FormControl,
    prod_qty11: new FormControl,
    prod_tax11: new FormControl,
    prod_price11: new FormControl,
    prod_disc11: new FormControl,
    total11: new FormControl,
    length1: new FormControl,
    width1: new FormControl,
    height1: new FormControl,
    package_weight1: new FormControl,
    package_weight2: new FormControl,
    package_weight3: new FormControl,
    grand_total: new FormControl,
    other_pick_up_name: new FormControl,
    gst_no: new FormControl,
    eway_bill_no: new FormControl,
    service_name: new FormControl,
    Courier_name: new FormControl,
  })
//Shipment form Submit
  onSubmit_shipment(){
    console.log(this.add_shipment.value);
  }
 
//Hide and show service dropdown  
  isShown: boolean = false ; // hidden by default
  toggleShow() {
    this.isShown = ! this.isShown;
  }

//Add new address form
  add_new_address= new FormGroup({
    Pickup_Name: new FormControl('', Validators.required,),
    Pickup_Company_Name: new FormControl('', Validators.required,),
    Contact_Person_Name: new FormControl('', Validators.required,),
    Pickup_Contact_Number: new FormControl('', [Validators.required,Validators.minLength(10)]),
    Pincode: new FormControl('', Validators.required,),
    City: new FormControl,
    State: new FormControl,
    Country: new FormControl,
    Landmark: new FormControl('', Validators.required,),
    Address1: new FormControl('', Validators.required,),
    Address2: new FormControl,
    GST_Number: new FormControl
  })

 //Submit new address from 
  onSubmitAddress() {
    console.log(this.add_new_address.value);
  }

  addMainTable(){

    for(let x=1;  x < this.a; x++)
    {
    
    this.mainTable.push({
      id : '',
      childArr: [
        {
          
        }
      ]
    });
  }
  }



  addChildTable(i){
    this.mainTable[i].childArr.push({
    });
  }

  removeChildTable(i: number,j:number) {
    if (this.mainTable[i].childArr.length > 1) {
      this.mainTable[i].childArr.splice(j, 1);
      return this.a-1;
    }
  }

  removeMainTable(i: number) {
    if (this.mainTable.length > 1) {
      this.mainTable.splice(i, 1);
    }
  }
  
remTable()
{
  if (this.mainTable.length > 1) {
    this.mainTable.splice(1);
  }
}

  ngOnInit(): void {
  }

}
