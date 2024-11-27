import { Component, OnInit } from '@angular/core';
import { Oracao, oracoes } from './oracoes';

@Component({
  selector: 'app-oracoes',
  templateUrl: './oracoes.page.html',
  styleUrls: ['./oracoes.page.scss'],
})
export class OracoesPage implements OnInit {

  oracoes: Oracao[] = [];
  oracoesFiltradas: Oracao[] = [];
  textoPesquisa: string = "";

  constructor() {
    setTimeout(() => {
      this.oracoes = oracoes.sort((a, b) => a.titulo < b.titulo ? -1 : a.titulo > b.titulo ? 1 : 0);
    }, 500);
  }

  ngOnInit() {
  }

  pesquisar(event: any) {
    const pesquisa = event.target.value.toLowerCase();
    if (pesquisa != "") this.oracoesFiltradas = this.oracoes.filter((o) => o.titulo.toLowerCase().includes(pesquisa));
  }

}
