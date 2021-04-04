import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { UsuarioLogin } from '../model/usuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario

  confirmarSenha: string
  tipoUsu: string

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

  confirmSenha(event:any){
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event:any){
    this.tipoUsu = event.target.value
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUsu

    if(this.usuario.senha != this.confirmarSenha){
      alert('Senhas diferentes')
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }



}
