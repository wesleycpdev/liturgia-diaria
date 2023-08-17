import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-material-catequese',
  templateUrl: './material-catequese.page.html',
  styleUrls: ['./material-catequese.page.scss'],
})
export class MaterialCatequesePage implements OnInit {

  material: any

  constructor(
    private http: HttpClient,
    public nav: NavController
  ) { }

  ngOnInit() {
    this.carregarMaterial()
  }

  carregarMaterial() {
    const url = "https://api.jsonbin.io/v3/b/64de1fa89d312622a392a128/latest"
    this.http.get(url, {
      headers: new HttpHeaders({"X-Master-Key": "$2b$10$ilAl1dbBSz07eJEN4/x3nu3cxaX0yJNIfiN8iHElwEnov36k83h2O"})
    }).subscribe((data: any) => {
      this.material = data.record
    })
  }

  abrirPdf(url: string, titulo: string) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        url: url,
        titulo: titulo
      }
    }
    this.nav.navigateForward('arquivos', navigationExtras)
  }

}
