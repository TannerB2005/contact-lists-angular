import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../app/shared/contact.service';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
constructor(private ContactService:ContactService){}
newContactName = ''
newContactPhone = ''
newContactEmail = ''
newContactNotes = ''

addContact() {
  if(this.newContactName) {
    this.ContactService.addContact(this.newContactName, this.newContactPhone, this.newContactEmail, this.newContactNotes);
    this.newContactName = '';
    this.newContactPhone = '';
    this.newContactEmail = '';
    this.newContactNotes = '';
  }
}

}
