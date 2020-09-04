import { Injectable } from '@angular/core';
import { ApplicationModel } from '../models/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  appDetails: ApplicationModel;
  constructor() { }

  getApplicationDetails(appId: number): ApplicationModel{
    return new ApplicationModel();
  }

  
}
