import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
//import nodemailer = require('nodemailer');
@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  constructor() { }
  public formResponse: any;
  public formStatus: any;
  public sendEmail(e: Event) {
    // e.preventDefault();
    // var contactForm = <HTMLFormElement>document.getElementById('contact-form');
    // var nodemailer = require('nodemailer');
    // var transporter = nodemailer.createTransport({
    // service: 'gmail',
    // auth: {
    //   user: 'abhay@infotechs.in',
    //   pass: 'Inbox@123'
    //   }
    // });
    // var mailOptions = {
    //   from: 'youremail@gmail.com',
    //   to: 'hackerahir@gmail.com',
    //   subject: 'Sending Email using Node.js',
    //   text: 'That was easy!'
    // };
    // transporter.sendMail(mailOptions, function(error: any, info: { response: string; }){
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('Email sent: ' + info.response);
        
       // this.formStatus = 'success';
    //     
    //   }
    // });
    console.log(111);
    e.preventDefault();
    var contactForm = <HTMLFormElement>document.getElementById('contact-form');
    emailjs.sendForm('smtp_server', 'template_8uQnFG6N_clone', e.target as HTMLFormElement, 'user_XWPdjpTv0DgrQb9FN3tWr')
      .then((result: EmailJSResponseStatus) => {
        //reset here
        contactForm.reset();
        this.formStatus = 'success';
        this.formResponse = 'Your message has been sent successfully, we will get back to you shortly.';
      }, (error) => {
        this.formStatus = 'danger';
        this.formResponse = 'There was an error submitting your form.';
      });
  }

  ngOnInit(): void {
  }

}
