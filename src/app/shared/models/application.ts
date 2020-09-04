export class ApplicationModel{
    ApplicationList: {id: string, name:string}[] = [];
    ESPJobNameList: string[] = [];
    shortDescription: string = '';
    appURL: string = '';
    webServer: string = '';
    appServer: string = '';
    databaseServer: string = '';
    Criticality: string = '';
    appType: string = '';
    databaseInstance: string = '';
}