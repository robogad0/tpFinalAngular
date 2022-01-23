//import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      contraseña: ['', [Validators.required, Validators.minLength(8)]],
      mail: ['', [Validators.required, Validators.email]]
    })
  }

  get Contra(){
    return this.form.get("contraseña");
  }

  get Mail(){
    return this.form.get("mail");
  }

  get ContraValida(){
    return this.Contra?.touched && !this.Contra?.valid;}

  get EmailValido(){

    return false

  }
  

 
  /* email = '';
  password = '';

  constructor(public authService: AuthService) { }

  Login(){

    this.authService.login(this.email, this.password)
  } */

  ngOnInit(): void {
  

}}
