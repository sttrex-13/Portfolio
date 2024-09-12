import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  fullName: string = "";
  email: string = "";
  phone: string = "";
  message: string = "";

  constructor() { }

  sendEmailTest():void {
    const subject = 'New Message from Contact Form';
    const emailContent = `
      Full Name: ${this.fullName}
      Email: ${this.email}
      Phone Number: ${this.phone}
      
      Message:
      ${this.message}
    `;
  }

  callPhoneNumber() {
    window.open('tel:+66933541693', '_blank');
  }

  sendEmail() {
    window.open('mailto:saint.dev.st@gmail.com', '_blank');
  }
}
