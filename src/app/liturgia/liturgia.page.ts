import { Component } from '@angular/core';
import { LiturgiaService } from 'src/services/liturgia.service';

@Component({
  selector: 'liturgia',
  templateUrl: 'liturgia.page.html',
  styleUrls: ['liturgia.page.scss'],
})
export class LiturgiaPage {

  liturgiaDoDia: any;

  constructor(
    public liturgiaService: LiturgiaService
  ) {
    setTimeout(() => {
      liturgiaService.liturgiaDoDia()
      .subscribe(data => {
        this.liturgiaDoDia = data;
        this.liturgiaDoDia.evangelho.titulo = this.liturgiaDoDia.evangelho.titulo.replace('✠', '✠ ')
      })
    }, 500);
  }

  get textoSalmo() {
    return this.liturgiaDoDia.salmo.texto.replace(/—/g, ' \n')
  }

}
