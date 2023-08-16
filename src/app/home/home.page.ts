import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LiturgiaService } from 'src/services/liturgia.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  liturgiaDoDia: any;

  constructor(
    public liturgiaService: LiturgiaService,
    public sanitizer: DomSanitizer
  ) {
    setTimeout(() => {
      liturgiaService.liturgiaDoDia()
    .subscribe(data => {
      this.liturgiaDoDia = data;
      this.liturgiaDoDia.evangelho.titulo = this.liturgiaDoDia.evangelho.titulo.replace('✠', '✠ ')
    })
    }, 500);
  }

  get textoPrimeiraLeitura () {
    let textoProcessado = this.liturgiaDoDia.primeiraLeitura.texto.replace(/(\d+)(\D)/g, '\n\n<span style="color: red;">$1</span> $2')
    return this.sanitizer.bypassSecurityTrustHtml(textoProcessado)
  }
  
  get textoSalmo() {
    return this.liturgiaDoDia.salmo.texto.replace(/—/g, ' \n')
  }
  
  get textoSegundaLeitura () {
    let textoProcessado = this.liturgiaDoDia.segundaLeitura.texto.replace(/(\d+)(\D)/g, '\n\n<span style="color: red;">$1</span> $2')
    return this.sanitizer.bypassSecurityTrustHtml(textoProcessado)
  }

  get textoEvangelho() {
    let textoProcessado = this.liturgiaDoDia.evangelho.texto.replace(/(\d+)(\D)/g, '\n\n<span style="color: red;">$1</span> $2')
    return this.sanitizer.bypassSecurityTrustHtml(textoProcessado)
  }

}
