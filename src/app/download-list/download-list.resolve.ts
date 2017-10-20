
import {Injectable} from "@angular/core";
import {DownloadListService} from "./download-list.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {ITrainingDonwloadData} from "./download-list.interface";

@Injectable()
export class DownloadListResolver implements Resolve<any> {

    constructor(private downloadListService: DownloadListService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITrainingDonwloadData[]>{
        return Observable.create((observer:any) => {
           this.downloadListService.getTrainingResource().subscribe(data => {
               observer.next(data);
               observer.complete();
           });
        });
    }
}