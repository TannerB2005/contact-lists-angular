import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { ContactListComponent } from "../contact-list/contact-list.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContactFormComponent, ContactListComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contact-lists-app';
}
