import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { Divider } from 'primeng/divider';
import { ActivatedRoute, Route, Router, RouterLink } from "@angular/router";


@Component({
  selector: 'app-login',
  imports: [FormsModule, InputTextModule, Card, Button, Divider, RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {
  form!: FormGroup;

  constructor(private _formBuilder: FormBuilder,private _router:Router) {

  }
  ngOnInit(): void {

    this.form = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.min(4)]
    });
  }


  login() {
    this._router.navigateByUrl('/home');
  }

  get email() {
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }
}
