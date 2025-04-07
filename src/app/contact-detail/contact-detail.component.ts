import { Component } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-detail',
  imports: [CommonModule],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent {
  constructor(private ContactService:ContactService){}

  get contacts() {
    return this.ContactService.contacts();}
}
