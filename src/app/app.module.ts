import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders, appDeklarations } from './app.routes';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProfilViewComponent } from './profil-view/profil-view.component';
import { MainViewComponent } from './main-view/main-view.component';
import { FooterComponent } from './footer-view/footer.component';
import { ImpressumComponent } from './impressum-view/impressum.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import {VisitCartComponent} from "./visit-card/visit-cart.component";

@NgModule({
  imports: [BrowserModule,routing,ChartsModule],
  declarations: [appDeklarations],
  providers: [appRoutingProviders],
  entryComponents: [
      AppComponent,
      MainViewComponent,
      ProjectViewComponent,
      ProfilViewComponent,
      MenuBarComponent,
      FooterComponent,
      ImpressumComponent,
      VisitCartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
