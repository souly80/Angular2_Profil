
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {IDownloadData} from "./download-list.interface";

@Injectable()
export class DownloadListService {

    public getAttestationsResource(): Observable<IDownloadData> {
        let attestationsData : IDownloadData[] = [
            {
                title:`Bosch GmbH Stuttgart`,
                path:"../../../public/files/bosch.pdf",
                date: "31.03.2017",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData,
            {
                title:`Groz-Beckert KG Albstadt`,
                path:"../../../public/files/groz_beckert.pdf",
                date: "31.08.2012",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData,
            {
                title:`Siemens AG Karlstruhe`,
                path:"../../../public/files/siemens.pdf",
                date: "31.03.2008",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData,
            {
                title:`Frauenhofer Institut IPA Stuttgart`,
                path:"../../../public/files/frauenhofer.pdf",
                date: "31.12.2006",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData,
            {
                title:`Thales GmbH Pforzheim`,
                path:"../../../public/files/thales.pdf",
                date: "31.08.2006",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData
        ];
        return Observable.create((observer:any)=> {
            observer.next(attestationsData);
            observer.complete();
        });
    }

    public getStudiesResource(): Observable<IDownloadData> {
        let cvData : IDownloadData[] = [
            {
                title:`Diplomzeugnis`,
                path:"../../../public/files/diplom.pdf",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData,
            {
                title:`Noten`,
                path:"../../../public/files/noten.pdf",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData
        ];
        return Observable.create((observer:any)=> {
            observer.next(cvData);
            observer.complete();
        });
    }

    public getCVResource(): Observable<IDownloadData> {
        let cvData : IDownloadData[] = [
            {
                title:`Lebenslauf in Word Format`,
                path:"../../../public/files/Lebenslauf.docx",
                iconPath: require("../../../public/images/word.png")
            } as IDownloadData,
            {
                title:`Lebenslauf in PDF Format`,
                path:"../../../public/files/Lebenslauf.pdf",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData
        ];
        return Observable.create((observer:any)=> {
            observer.next(cvData);
            observer.complete();
        });
    }

    public getOthersResource(): Observable<IDownloadData> {
        let cvData : IDownloadData[] = [
            {
                title:`Technologie Forum Albstadt`,
                path:"../../../public/files/technologie_forum_7.pdf",
                date: "14.05.2011",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData,
            {
                title:`Technologie Forum Albstadt`,
                path:"../../../public/files/technologie_forum_6.pdf",
                date: "13.11.2010",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData,
            {
                title:`Technologie Forum Albstadt`,
                path:"../../../public/files/technologie_forum_5.pdf",
                date: "08.05.2010",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData,
            {
                title:`Technologie Forum Albstadt`,
                path:"../../../public/files/technologie_forum_4.pdf",
                date: "13.11.2009",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData
        ];
        return Observable.create((observer:any)=> {
            observer.next(cvData);
            observer.complete();
        });
    }

    public getTrainingResource(): Observable<IDownloadData[]>{
        let trainingData : IDownloadData[] = [
            {
                title:`JavaScript Day 2017`,
                path:"../../../public/files/javascript_Day_2017.JPG",
                date: "09.10.2017",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData,
            {
                title:`AngularJS und Javascript Intensiv-Workshop`,
                path:"../../../public/files/angularJS.pdf",
                date: "06.07.2017",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData,
            {
                title:`WPF .NET 4`,
                path:"../../../public/files/ppedv.pdf",
                date: "12.12.2011",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData,
            {
                title:`Basta .NET Konferenz`,
                path:"../../../public/files/basta.pdf",
                date: "26.09.2011",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData,
            {
                title:`MVTec Halcon Bildverarbeitung`,
                path:"../../../public/files/mvtec.pdf",
                date: "21.10.2009",
                iconPath: require("../../../public/images/pdf.png")
            } as IDownloadData
        ];
        return Observable.create((observer:any)=> {
            observer.next(trainingData);
            observer.complete();
        });
    }
}