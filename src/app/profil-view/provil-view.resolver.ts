
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {ProfilViewService} from "./profil-view.service";
import {Injectable} from "@angular/core";
import objectContaining = jasmine.objectContaining;

@Injectable()
export class ProfilViewResolver implements Resolve<any>{

    constructor(private provilViewService: ProfilViewService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        return Observable.forkJoin(
                this.provilViewService.getTrainingsData(),
                this.provilViewService.getPersonalData(),
                this.provilViewService.getProfilData(),
                this.provilViewService.getStudies(),
                this.provilViewService.getEducation(),
                this.provilViewService.getInterships(),
                this.provilViewService.getExperienceData(),
                this.provilViewService.getLanguageKnowledge(),
                this.provilViewService.getSocialSkills(),
                this.provilViewService.getHobbies()
        );
    }
}