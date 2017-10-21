
import {Injectable} from "@angular/core";
import {DownloadListService} from "./download-list.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DownloadListResolver implements Resolve<any> {

    constructor(private downloadListService: DownloadListService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]>{
        return Observable.forkJoin(
            this.downloadListService.getCVResource(),
            this.downloadListService.getTrainingResource(),
            this.downloadListService.getAttestationsResource(),
            this.downloadListService.getStudiesResource(),
            this.downloadListService.getOthersResource()
        );
    }
}