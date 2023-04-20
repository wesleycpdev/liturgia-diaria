import { Component } from '@angular/core';
import { LiturgiaService } from 'src/services/liturgia.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  liturgiaDoDia: any;

  constructor(private liturgiaService: LiturgiaService, private socialSharing: SocialSharing) {
    setTimeout(() => {
      this.liturgiaService.liturgiaDoDia()
    .subscribe(data => {
      this.liturgiaDoDia = data;
      this.liturgiaDoDia.evangelho.titulo = this.liturgiaDoDia.evangelho.titulo.replace('✠', '✠ ')
    })
    }, 500);
  }

  share() {
    const message = `Confira a liturgia diária de hoje! ${this.liturgiaDoDia?.liturgia}`;
    const subject = 'Liturgia Diária';
    const file = undefined;
    const url = 'https://liturgia-diaria.vercel.app/';

    this.socialSharing.share(message, subject, file, url).then(() => {
      console.log('Compartilhado com sucesso!');
    }).catch(() => {
      console.log('Erro ao compartilhar.');
    });
  }

}
