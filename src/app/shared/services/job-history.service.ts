import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobHistoryService {

  constructor() { }

  getJobHistoryData(ESPJobName: string){
    return [
      {serialNo: 1, ESPJobName: 'RQCCD07X', SQLJobName: 'a', serverName: 'server', jobExecutionDate: '04/09/2020', jobExecutionTime: '16:49', jobStatus: 'Complete', Duration: '20' },
      {serialNo: 2, ESPJobName: 'RQCCD07X', SQLJobName: 'a', serverName: 'server', jobExecutionDate: '04/09/2020', jobExecutionTime: '16:49', jobStatus: 'Complete', Duration: '20' },
      {serialNo: 3, ESPJobName: 'RQCCD07X', SQLJobName: 'a', serverName: 'server', jobExecutionDate: '04/09/2020', jobExecutionTime: '16:49', jobStatus: 'Complete', Duration: '20' },
      {serialNo: 4, ESPJobName: 'RQCCD07X', SQLJobName: 'a', serverName: 'server', jobExecutionDate: '04/09/2020', jobExecutionTime: '16:49', jobStatus: 'Complete', Duration: '20' },
      {serialNo: 5, ESPJobName: 'RQCCD07X', SQLJobName: 'a', serverName: 'server', jobExecutionDate: '04/09/2020', jobExecutionTime: '16:49', jobStatus: 'Complete', Duration: '20' },
      {serialNo: 6, ESPJobName: 'RQCCD07X', SQLJobName: 'a', serverName: 'server', jobExecutionDate: '04/09/2020', jobExecutionTime: '16:49', jobStatus: 'Complete', Duration: '20' },
      {serialNo: 7, ESPJobName: 'RQCCD07X', SQLJobName: 'a', serverName: 'server', jobExecutionDate: '04/09/2020', jobExecutionTime: '16:49', jobStatus: 'Complete', Duration: '20' },
      {serialNo: 8, ESPJobName: 'RQCCD07X', SQLJobName: 'a', serverName: 'server', jobExecutionDate: '04/09/2020', jobExecutionTime: '16:49', jobStatus: 'Complete', Duration: '20' }
    ];
  }

  getJobRunningStatus(ESPJobName: string){
    return "Not Running";
  }
}
