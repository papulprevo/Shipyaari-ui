import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-temp-bulk-upload-pick-address',
  templateUrl: './temp-bulk-upload-pick-address.component.html',
  styleUrls: ['./temp-bulk-upload-pick-address.component.css']
})
export class TempBulkUploadPickAddressComponent implements OnInit {

  UploadBulkTemplate = new FormGroup({

  });

  onSubmit()
  {
    console.log(this.UploadBulkTemplate.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
