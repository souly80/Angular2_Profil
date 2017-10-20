export interface ITrainingDonwloadData extends IDownloadData{
    date: string;
}

export interface IDownloadData {
    title: string;
    path: string;
    iconPath: string;
}