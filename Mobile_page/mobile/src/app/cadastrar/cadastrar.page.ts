import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage {

  nome: string = '';
  email: string = '';
  telefone: string = '';
  senha: string = '';

  constructor(private router: Router) { }

  irParaLogin() {
    this.router.navigate(['/login']);
  }

  cadastrar() {
    // Implemente a lógica de cadastro aqui

    // Exemplo: verificar se todos os campos estão preenchidos
    if (this.nome && this.email && this.telefone && this.senha) {
      // Aqui você pode adicionar a lógica para enviar os dados para o serviço ou API
      
      // Por enquanto, apenas redirecionaremos o usuário para outra página após o cadastro ser concluído
      this.router.navigate(['/folder/favorites']);
    } else {
      // Se algum campo estiver vazio, exibir mensagem de erro
      console.error('Por favor, preencha todos os campos.');
    }
  }

}
