import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProfilViewComponent } from './profil-view/profil-view.component';
import { MainViewComponent } from './main-view/main-view.component';
import { ProjectViewService } from './project-view/project-view.service';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer-view/footer.component';
import { ImpressumComponent } from './impressum-view/impressum.component';
import { ProfilViewService } from './profil-view/profil-view.service';
import {VisitCartComponent} from "./visit-card/visit-cart.component";
import {VisitCartResolver} from "./visit-card/visit-cart.resolver";
import {ProfilViewResolver} from "./profil-view/provil-view.resolver";
import {SliderComponent} from "./ui-components/slider/slider.component";
import {ExpanderComponent} from "./ui-components/expander/expander.component";
import {TableComponent} from "./ui-components/table/table.component";
import {ProfilContentComponent} from "./profil-view/table-content/profil-content.component/profil-content.component";
import {TrainingContentComponent} from "./profil-view/table-content/training-content.component/training-content.component";
import {DownloadListService} from "./download-list/download-list.service";
import {DownloadListComponent} from "./download-list/download-list.component";
import {DownloadListResolver} from "./download-list/download-list.resolve";
import {KeysPipe} from "./download-list/download-list.interface";
import {ProjectViewResolver} from "./project-view/project-view.resolver";


export const routes: Routes = [
      { path: '', component: MainViewComponent },
      { path: 'projects', component: ProjectViewComponent, resolve: { projectData: ProjectViewResolver }},
      { path: 'aboutme', component: ProfilViewComponent, resolve: {profilData: ProfilViewResolver } },
      { path: 'contact', component: VisitCartComponent, resolve: { contactData: VisitCartResolver }},
      { path: 'profil', component: DownloadListComponent, resolve: { downloadListData: DownloadListResolver }},
      { path: 'impressum', component: ImpressumComponent }
];

export const appRoutingProviders: any[] = [
      ProjectViewService,
      ProfilViewService,
      VisitCartResolver,
      ProfilViewResolver,
      DownloadListService,
      DownloadListResolver,
      ProjectViewResolver
];

export const appDeklarations: any[] = [
      AppComponent, MenuBarComponent, ProjectViewComponent, MainViewComponent,
      ProfilViewComponent, ContactComponent, FooterComponent, ImpressumComponent,
      VisitCartComponent,
      SliderComponent,
      ExpanderComponent,
      TableComponent,
      ProfilContentComponent,
      TrainingContentComponent,
      DownloadListComponent,
      KeysPipe
];

export const routing = RouterModule.forRoot(routes, {useHash: true});