import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LiturgiaService {

  constructor(public httpClient: HttpClient) { }

  liturgiaDoDia() {
    return this.httpClient.get('https://liturgia.up.railway.app/');
  }
}
