import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-bar',
  templateUrl: './contact-bar.component.html',
  styleUrl: './contact-bar.component.scss'
})
export class ContactBarComponent {
  constructor() { }

    openFacebook() {
        // Logic to open Facebook profile
        window.open('https://www.facebook.com/profile.php?id=100001920769797', '_blank');
    }

    openInstagram() {
        // Logic to open Instagram profile
        window.open('https://www.instagram.com/_s.saint.t_/', '_blank');
    }

    openLinkedIn() {
        window.open('https://www.linkedin.com/in/sutee-vapeetam-b32b26244/', '_blank');
    }

    openGitHub() {
        window.open('https://github.com/sttrex-13', '_blank');
    }

    callPhoneNumber() {
        window.open('tel:+66933541693', '_blank');
    }

    sendEmail() {
        window.open('mailto:saint.dev.st@gmail.com', '_blank');
    }
}
