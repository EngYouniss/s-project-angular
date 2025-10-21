import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Card } from 'primeng/card';
import { Divider } from 'primeng/divider';
import { Button } from 'primeng/button';
import { Password } from 'primeng/password';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, Card, Divider, Button, Password, RouterLink],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', Validators.required],
    });
  }

  register(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.warn('Form is invalid:', this.form.value);
      return;
    }
    console.log('Form submitted successfully:', this.form.value);
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
