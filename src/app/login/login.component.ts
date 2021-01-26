import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../core/services/login/login.service';
import { ActivatedRoute } from '@angular/router';
import { Login } from '../core/models/login/login.model';
import { Router } from '@angular/router';
import { Md5 } from 'md5-typescript';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  login: Login;
  sToken: string;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router) {
      this.buildForm();
    }

    ngOnInit() {
  }
  // Creación del formulario desde un json
  private buildForm() {
    this.loginForm = this.formBuilder.group({
      user: ['', [Validators.required]],
      userPassword: ['', [Validators.required]]
    });
  }
// Function de inicio de sesion
  loginUser(event: Event){
    event.preventDefault();
    if (this.loginForm.valid) {
      this.loginService.getSession(this.loginForm.value.user, Md5.init(this.loginForm.value.userPassword), null).subscribe(login => {
        this.login = login;
        if (this.login.resultDto.iResultado === 'Ok') {
          if (this.login.detalle.bDosFactoresActivo > 0) {
            this.router.navigate(['validacion', { user: this.login.detalle.sUsuario,
              userPassword: Md5.init(this.loginForm.value.userPassword) }]);
          } else {
            this.router.navigate(['negocios', { idNegocio: this.login.detalle.iIdNegocio, userName:  this.login.detalle.sUsuario, 
              tipoParam: null }]);
          }
        } else {
          alert(this.login.resultDto.sDetalle);
        }
      });
    }
  }
}
