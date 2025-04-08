import { Component } from '@angular/core';
import { ContactService } from '../app/shared/contact.service';
import { CommonModule } from '@angular/common';
import { Contact } from '../app/shared/contact';
import { Observable } from 'rxjs';
import { ContactModalService } from '../app/shared/contact-modal.service';

@Component({
  selector: 'app-contact-list',
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {

  showModal$: Observable<boolean>;
  selectedContact$: Observable<Contact | null>;
  constructor(private contactService:ContactService,
    private modalService: ContactModalService
  ){
    this.showModal$ = this.modalService.showModal$;
    this.selectedContact$ = this.modalService.selectedContact$;
  }

  selectContact(contact: Contact) {
    this.modalService.openModal(contact);
  }

  closeModal() {
    this.modalService.closeModal();
  }

  get contacts() {
    return this.contactService.contacts();}


  deleteContact(id: number) {
    this.contactService.deleteContact(id);
  }

  selectedContact: Contact | null = null;



  }


