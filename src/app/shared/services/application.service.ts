import { Injectable } from '@angular/core';
import { ApplicationModel } from '../models/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  appDetails: ApplicationModel;
  appList: {id: number, name: string}[];
  constructor() { }

  getApplicationDetails(appId: number): ApplicationModel{
    return new ApplicationModel();
  }

  getAppList(){
    return this.appList = [
      {id: 1, name: 'Common Schema'},
      {id: 2, name: 'SCDS'},
    ];
  }
  
}
