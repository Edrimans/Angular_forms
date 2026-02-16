import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-demo.html',
  styleUrls: ['./reactive-demo.css'],
})
export class ReactiveDemo {
  roles = ['Admin', 'User', 'Guest'];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      role: ['Admin', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      console.log(this.form.value);
    }
  }

  isInvalid(name: string) {
    const control = this.form.get(name);
    return !!(control?.touched && control?.invalid);
  }
}
