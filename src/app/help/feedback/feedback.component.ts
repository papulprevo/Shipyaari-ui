import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  feedbackForm = new FormGroup({
    rating: new FormControl(),
    comments: new FormControl(),
    name: new FormControl(),
    email: new FormControl()
  })
  onSubmit()
  {
    console.log(this.feedbackForm.value);
  }

  constructor() 
  { 

  }

  ngOnInit()
  { 

  }

   
  starList: boolean[] = [true,true,true,true,true];       // create a list which contains status of 5 stars
  rating:number;  
  //Create a function which receives the value counting of stars click, 
  //and according to that value we do change the value of that star in list.
  setStar(data:any){
        this.rating=data+1;                               
        for(var i=0;i<=4;i++){  
          if(i<=data){  
            this.starList[i]=false;  
          }  
          else{  
            this.starList[i]=true;  
          }  
       }  
   }  

}
