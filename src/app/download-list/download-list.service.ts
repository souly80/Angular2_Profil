
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {ITrainingDonwloadData} from "./download-list.interface";

@Injectable()
export class DownloadListService {

    public getTrainingResource(): Observable<ITrainingDonwloadData[]>{
        let trainingData : ITrainingDonwloadData[] = [
            {
                title:`JavaScript Day 2017`,
                path:"../../../public/files/javascript_Day_2017.JPG",
                date: "09.10.2017",
                iconPath: "../../../public/images/pdf.png"
            } as ITrainingDonwloadData,
            {
                title:`AngularJS und Javascript Intensiv-Workshop`,
                path:"../../../public/files/angularJS.pdf",
                date: "06.07.2017",
                iconPath: "../../../public/images/pdf.png"
            } as ITrainingDonwloadData,
            {
                title:`WPF .NET 4`,
                path:"../../../public/files/ppedv.pdf",
                date: "12.12.2011",
                iconPath: "../../../public/images/pdf.png"
            } as ITrainingDonwloadData,
            {
                title:`Basta .NET Konferenz`,
                path:"../../../public/files/basta.pdf",
                date: "26.09.2011",
                iconPath: "../../../public/images/pdf.png"
            } as ITrainingDonwloadData,
            {
                title:`MVTec Halcon Bildverarbeitung`,
                path:"../../../public/files/mvtec.pdf",
                date: "21.10.2009",
                iconPath: "../../../public/images/pdf.png"
            } as ITrainingDonwloadData
        ];
        return Observable.create((observer:any)=> {
            observer.next(trainingData);
            observer.complete();
        });
    }
}