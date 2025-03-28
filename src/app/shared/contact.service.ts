import { Injectable, signal } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {}
  contacts = signal<Contact[]>([
    {id: 1, name: 'Johnston Arbuckle', phone: '000-000-0000', email: 'johnstonar34@gmail.com', notes: '' }
  ])
}
