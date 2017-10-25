
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {ProjectViewService} from "./project-view.service";

@Injectable()
export class ProjectViewResolver implements Resolve<any>{

    constructor(private projectViewService: ProjectViewService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.projectViewService.getProjectData();
    }
}