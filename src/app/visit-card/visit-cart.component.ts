
import {Component, OnInit} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import {IVisitCart} from "./visit-cart.interface";

@Component({
    selector:'visit-cart',
    templateUrl: './visit-cart.component.html',
    styleUrls:['./visit-cart.style.css']
})
export class VisitCartComponent implements OnInit{
    public contactData:IVisitCart;
    constructor(private activateRoute: ActivatedRoute){

    }

    ngOnInit(): void {
        this.activateRoute.data.pluck('contactData')
            .subscribe(( data: IVisitCart) => this.contactData = data);
    }
}
