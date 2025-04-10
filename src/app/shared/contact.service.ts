import { Injectable, signal, WritableSignal } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {}

  contacts = signal<Contact[]>([
    ...this.loadContacts(),
    {id: 1, name: 'Johnston Arbuckle', phone: '000-000-0000', email: 'johnstonar34@gmail.com', notes: '', completed: false}
  ]);

  // signal to edit
  editingContact: WritableSignal<Contact | null> = signal(null);

  //load from local storage
  loadContacts(): Contact[] {
    const data = localStorage.getItem('contacts');
    return data ? JSON.parse(data) : [];
  }

  // save to localstorage
  saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(this.contacts()));
  }

  // add a new contact
  addContact(name: string, phone: string | number, email: string | number, notes?: any) {
    const newContact: Contact = {
      id: this.contacts().length + 1,
      name: name,
      phone: phone,
      email: email,
      notes: notes,
      completed: false
    };

    this.contacts.update((currentContacts) => [...currentContacts, newContact])
    this.saveContacts();
  }

  // delete contact
  deleteContact(email: string) {
    this.contacts.update((currentContacts) =>
      currentContacts.filter((task) => task.email != email)
    );
    this.saveContacts();
  }

  // Start editing a contact
  startEditing(contact: Contact) {
    this.editingContact.set(contact);
  }

  // Update contact info
  updateContact(updatedContact: Contact) {
    this.contacts.update((currentContacts) =>
    currentContacts.map((contact) =>
    contact.id === updatedContact.id ? updatedContact : contact
    )
  );
  this.editingContact.set(null);
  this.saveContacts();
}

  //Cancel edit
  cancelEditing() {
    this.editingContact.set(null);
  }
}
