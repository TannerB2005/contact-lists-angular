import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactModalService {
private selectedContactSubject = new BehaviorSubject<Contact | null>(null);
selectedContact$ = this.selectedContactSubject.asObservable();

private showModalSubject = new BehaviorSubject<boolean>(false);
showModal$ = this.showModalSubject.asObservable();

openModal(contact: Contact) {
  this.selectedContactSubject.next(contact);
  this.showModalSubject.next(true);
}

closeModal() {
  this.selectedContactSubject.next(null);
  this.showModalSubject.next(false);
}
}
