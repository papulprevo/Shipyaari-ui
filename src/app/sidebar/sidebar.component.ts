import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
 
})
export class SidebarComponent implements OnInit {


 
  constructor() { }

  ngOnInit(): void {
  }


  isShown: boolean = false ; // hidden by default
  toggleShow() {
    this.isShown = ! this.isShown;
  }


}
