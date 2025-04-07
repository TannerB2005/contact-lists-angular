import { Component } from '@angular/core';
import { ContactService } from '../app/shared/contact.service';
import { CommonModule } from '@angular/common';
import { Contact } from '../app/shared/contact';
import { ContactDetailComponent } from "../app/contact-detail/contact-detail.component";

@Component({
  selector: 'app-contact-list',
  imports: [CommonModule, ContactDetailComponent],
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

  selectedContact: Contact | null = null;

  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }

  }


