import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }
  // classname = "footer-area footer-area-2 bg_cover";
  // ftbgimage = "assets/images/footer-bg.jpg";
  // ftlogo = "assets/images/logo-1.1.png";
  // ftshape = "";
  classname = "footer-area footer-area-2 bg_cover";

  ftbgimage = "assets/images/footer-bg.jpg";
  // ftlogo = "assets/images/logo-2.1.png";
  ftshape = "d-none";
  ftlogo = "assets/images/logo-1.1.png";
  // ftshape = "";

  ngOnInit(): void {
  }

}
