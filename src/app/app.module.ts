import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders, appDeklarations } from './app.routes';
import { AppComponent } from './app.component';


import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProfilViewComponent } from './profil-view/profil-view.component';
import { MainViewComponent } from './main-view/main-view.component';
import { FooterComponent } from './footer-view/footer.component';
import { ImpressumComponent } from './impressum-view/impressum.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import {VisitCartComponent} from "./visit-card/visit-cart.component";
import {SliderComponent} from "./ui-components/slider/slider.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//material

import {
    MatExpansionModule, MatListModule, MatTableModule,
} from '@angular/material';

//material

@NgModule({
  imports: [BrowserModule,
      routing,
      ChartsModule,
      MatExpansionModule,
      BrowserAnimationsModule,
      MatTableModule,
      MatListModule],
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
      VisitCartComponent,
      SliderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
