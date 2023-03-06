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
    liturgiaService.liturgiaDoDia()
    .subscribe(data => {
      this.liturgiaDoDia = data;
    })
  }

}
