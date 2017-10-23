import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {IVisitCart} from "./visit-cart.interface";

export class VisitCartResolver implements Resolve<IVisitCart> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IVisitCart> {
        let data = {
            name: "Soulaymane Zemmouri",
            available: false,
            description: "Senior Software Entwickler",
            passion: "Fullstack Entwickler von moderne Webanwendungen",
            technologie: "Angular, ASP.NET und C#",
            title: "IT Freelancer: Soulaymane Zemmouri",
            phoneNumber: "Telefon: +49 (0) 176 60362011",
            availableFrom: "01.05.2018",
            localtion: "Wohnsitz in Stuttgart"
        } as IVisitCart;
        return Observable.create((observer: any)=>{
            observer.next(data);
            observer.complete();
        });
    }

}