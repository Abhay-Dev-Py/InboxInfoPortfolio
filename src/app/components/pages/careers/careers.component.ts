import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
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
