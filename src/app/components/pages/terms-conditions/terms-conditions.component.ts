import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent implements OnInit {

  classname = "footer-area footer-area-2 bg_cover";

  ftbgimage = "assets/images/footer-bg.jpg";
  // ftlogo = "assets/images/logo-2.1.png";
  ftshape = "d-none";
  ftlogo = "assets/images/logo-1.1.png";
  // ftshape = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
