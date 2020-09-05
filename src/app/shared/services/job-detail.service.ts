import { Injectable } from '@angular/core';
import { JobDetailModel } from '../models/jobDetail';
import { JobModel } from '../models/jobModel';

@Injectable({
  providedIn: 'root'
})
export class JobDetailService {
  jobDetail: JobDetailModel = new JobDetailModel();
  jobList: JobModel[] = [
    {id: 1, appId: 1, name: 'RQCCD07X'},
    {id: 2, appId: 1, name: 'RQCCD19X'},
    {id: 3, appId: 1, name: 'RQFAD01X'},
    {id: 4, appId: 1, name: 'RQFAD03X'},
    {id: 1, appId: 2, name: 'RQQSD01X'},
    {id: 2, appId: 2, name: 'RQQSD02X'},
    {id: 3, appId: 2, name: 'RQQSD03X'},
    {id: 4, appId: 2, name: 'RQQSD04X'},
  ];
  constructor() { }

  getJobDetails(ESPJobName: string): JobDetailModel{
    this.jobDetail = {
      ESPJobName: 'RQCCD07X',
      SQLJobName: 'Common_Schema_Import_SIMS',
      applicationName: 'Common Schema',
      downstreamJob: 'Not known',
      executionTime: '7:40 PM',
      frequency: 'Monday to Friday',
      shortDescription: 'Description is short',
      timeOut: '3 hours',
      upstreamJob: 'Not known'
    };
    return this.jobDetail;
  }

  getJobList(){
    return this.jobList;
  }

  getJobListByAppId(applicationId: number): JobModel[]{
    var filteredJobList = this.jobList.filter(
      (job) => {
        return job.appId == applicationId;
      }
    );
    return filteredJobList;
  }
}
