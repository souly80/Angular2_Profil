
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
                this.provilViewService.getTrainingData(),
                this.provilViewService.getPersonalData()
        );
    }
}