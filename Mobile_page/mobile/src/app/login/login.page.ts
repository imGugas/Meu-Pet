import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = '';
  senha: string = '';
  mensagemErro!: string;
  showPassword: boolean = false;

  constructor(private router: Router) {}

  irParaCadastro() {
    this.router.navigate(['/cadastrar']);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.email === 'user@gmail.com' && this.senha === 'senha') {
      this.router.navigate(['/folder/favorites']);

    } else {
      this.mensagemErro = 'Credenciais inválidas. Por favor, tente novamente.';
    }  
  }

  showHome(){
    this.router.navigate(['/tabs/home']);
  }

}
