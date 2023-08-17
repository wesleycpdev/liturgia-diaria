import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LiturgiaService } from 'src/services/liturgia.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, PdfViewerModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, LiturgiaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
