import { Component } from '@angular/core';
import { LiturgiaService } from 'src/services/liturgia.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  liturgiaDoDia: any;

  constructor(liturgiaService: LiturgiaService) {
    setTimeout(() => {
      liturgiaService.liturgiaDoDia()
    .subscribe(data => {
      this.liturgiaDoDia = data;
      this.liturgiaDoDia.evangelho.titulo = this.liturgiaDoDia.evangelho.titulo.replace('✠', '✠ ')
    })
    }, 1000);
  }

}
