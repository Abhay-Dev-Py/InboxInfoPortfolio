import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css']
})
export class WhyusComponent implements OnInit {

  constructor() { }
  list = [
    {
      title:"Meet the deadline of project",
      text:"You don't have to worry about timeline. Not just on time, we deliver solutions before the deadline with flawless output!"
    },
    {
      title:"5+ years of expressions",
      text:"We have a 5+ years of expressions in the industry projects, we give an our best output during the product of the"
    },
    {
      title:"Flexibility environment for growth ",
      text:"For the employees of company provide a free and flexible environment at workplace and that give you good way to grow your careers."
    }
  ];

  ngOnInit(): void {
  }

}
