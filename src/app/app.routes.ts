import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProfilViewComponent } from './profil-view/profil-view.component';
import { MainViewComponent } from './main-view/main-view.component';
import { ProjectViewService } from './project-view/project-view.service';
import { ContactService } from './contact/contact.service';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer-view/footer.component';
import { ImpressumComponent } from './impressum-view/impressum.component';
import { ProfilViewService } from './profil-view/profil-view.service';
import {VisitCartComponent} from "./visit-card/visit-cart.component";


export const routes: Routes = [
      { path: '', component: MainViewComponent },
      { path: 'projects', component: ProjectViewComponent },
      { path: 'profil', component: ProfilViewComponent },
      { path: 'contact', component: VisitCartComponent },
      { path: 'impressum', component: ImpressumComponent }

];

export const appRoutingProviders: any[] = [
      ProjectViewService, ContactService, ProfilViewService
];

export const appDeklarations: any[] = [
      AppComponent, MenuBarComponent, ProjectViewComponent, MainViewComponent,
      ProfilViewComponent, ContactComponent, FooterComponent, ImpressumComponent,
      VisitCartComponent
];

export const routing = RouterModule.forRoot(routes, {useHash: true});