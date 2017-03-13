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

import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [BrowserModule,routing,Ng2PageScrollModule.forRoot(),ChartsModule],
  declarations: [appDeklarations],
  providers: [appRoutingProviders],
  entryComponents: [AppComponent, MainViewComponent, ProjectViewComponent, 
  ProfilViewComponent, MenuBarComponent,FooterComponent,ImpressumComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
