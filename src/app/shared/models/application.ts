export class ApplicationModel{
    ApplicationList: {id: number, name:string}[] = [];
    ESPJobNameList: {id: number, appId: number, name:string}[] = [];
    shortDescription: string = '';
    appURL: string = '';
    webServer: string = '';
    appServer: string = '';
    databaseServer: string = '';
    Criticality: string = '';
    appType: string = '';
    databaseInstance: string = '';
}