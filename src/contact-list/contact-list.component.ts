import { Component } from '@angular/core';
import { ContactService } from '../app/shared/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  constructor(private contactService:ContactService){
  }

  get contacts() {
    return this.contactService.contacts();}


  deleteContact(id: number) {
    this.contactService.deleteContact(id);
  }
  }

