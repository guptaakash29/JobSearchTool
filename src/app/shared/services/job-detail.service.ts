import { Injectable } from '@angular/core';
import { JobDetailModel } from '../models/jobDetail';

@Injectable({
  providedIn: 'root'
})
export class JobDetailService {

  constructor() { }

  getJobDetails(ESPJobName: string): JobDetailModel{
    return new JobDetailModel();
  }
}
