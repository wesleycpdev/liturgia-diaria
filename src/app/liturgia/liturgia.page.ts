import { Component } from '@angular/core';
import { LiturgiaService } from 'src/services/liturgia.service';

@Component({
  selector: 'liturgia',
  templateUrl: 'liturgia.page.html',
  styleUrls: ['liturgia.page.scss'],
})
export class LiturgiaPage {

  liturgiaDoDia: any;
  numbers = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', 
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };

  constructor(
    public liturgiaService: LiturgiaService
  ) {
    setTimeout(() => {
      liturgiaService.liturgiaDoDia()
      .subscribe(data => {
        this.liturgiaDoDia = data
        this.liturgiaDoDia.evangelho.titulo = this.liturgiaDoDia.evangelho.titulo.replace('✠', '✠ ')

        const numbers = {
          '0': '⁰',
          '1': '¹',
          '2': '²',
          '3': '³',
          '4': '⁴',
          '5': '⁵',
          '6': '⁶',
          '7': '⁷',
          '8': '⁸',
          '9': '⁹'
        };

        this.liturgiaDoDia.primeiraLeitura.texto = this.liturgiaDoDia.primeiraLeitura.texto.replace(/(\d{1,3})(?=\s?[^\d\s,.;!?])/g, (match) => {
          return match.split('').map(char => numbers[char]).join('');
        });

        this.liturgiaDoDia.segundaLeitura.texto = this.liturgiaDoDia.primeiraLeitura.texto.replace(/(\d{1,3})(?=\s?[^\d\s,.;!?])/g, (match) => {
          return match.split('').map(char => numbers[char]).join('');
        });

        this.liturgiaDoDia.evangelho.texto = this.liturgiaDoDia.evangelho.texto.replace(/(\d{1,3})(?=\s?[^\d\s,.;!?])/g, (match) => {
          return match.split('').map(char => numbers[char]).join('');
        });
      })
    }, 500);
  }

  get textoSalmo() {
    return this.liturgiaDoDia.salmo.texto.replace(/—/g, ' \n')
  }

}
