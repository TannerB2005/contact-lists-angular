import { Injectable, signal } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {}
  contacts = signal<Contact[]>([
    {id: 1, name: 'Johnston Arbuckle', phone: '000-000-0000', email: 'johnstonar34@gmail.com', notes: '', completed: false}
  ]);

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
  }

  deleteContact(id: number) {
    this.contacts.update
    ((currentContacts) => currentContacts.filter((task) =>
    task.id != id)
  );
}
}
