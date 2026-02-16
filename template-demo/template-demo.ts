import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-demo.html',
  styleUrls: ['./template-demo.css']
})
export class TemplateDemo {
  title = 'Template Driven Demo';

  username = '';
  email = '';
  password = '';
  role = '';

  // REQUIRED FIELDS
  gender = ''; // radio
  status = ''; // permanent/probationary

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  reset() {
    this.username = '';
    this.email = '';
    this.password = '';
    this.role = '';
    this.gender = '';
    this.status = '';
    this.submitted = false;
  }
}
