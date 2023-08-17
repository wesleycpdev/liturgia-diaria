import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arquivos',
  templateUrl: './arquivos.page.html',
  styleUrls: ['./arquivos.page.scss'],
})
export class ArquivosPage implements OnInit {

  url = ""
  titulo = ""
  src = {}

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.url = params["url"]
      this.titulo = params["titulo"]
    });

    this.src = {
      url: this.url,
      withCredentials: false
    }
  }

  ngOnInit() {}

}
