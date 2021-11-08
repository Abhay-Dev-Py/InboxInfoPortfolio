import { Component, OnInit } from '@angular/core';
import counter from '../../../../data/counter.json';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  constructor() { }
  public counter = counter;
  faqs = [
    {
      title:"Which type of development you provide?",
      text:"We work on many technologies like IOT techs, web development, and many more like this that technology brings business upper level."
    },
    {
      title:"Which type of storage do you used?",
      text:"Once project is commutated can I maintain by my own or if in that project if I could make a change then can you do that?"
    },
    // {
    //   title:"As a result, most of us need to know",
    //   text:"Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real."
    // },
    // {
    //   title:"Our knowledge of computers will help us",
    //   text:"Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real."
    // },
    
  ];

  ngOnInit(): void {
  }

}
