import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-billing-component',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.css']
})
export class BillingInfoComponent implements OnInit {

/** 
 * Nested forms parent
 */
public nestedFormsParent: FormGroup = new FormGroup({
  basicInfo: new FormControl(""),
  address: new FormControl("")
});


formChangesSub: any;
  constructor() { }

  ngOnInit() {
    this.formChangesSub = this.nestedFormsParent.valueChanges.subscribe((x) => {
      console.log("Inside the valueChanges subscription", x);
    });
  }

public onSubmit(){
  console.log("Val", this.nestedFormsParent.value);
}
}