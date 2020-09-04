import { Component, OnInit } from '@angular/core';
import { JobHistoryModel } from '../shared/models/jobHistory';

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.css']
})
export class JobHistoryComponent implements OnInit {
  rowCountList: number[] = [5,10,15,20,25];
  rowCount: number;
  ESPJobName: string = '';
  jobHistoryList: JobHistoryModel[] = [
    {serialNo: 1, ESPJobName: 'RQCCD07X', SQLJobName: 'a', serverName: 'server', jobExecutionDate: '04/09/2020', jobExecutionTime: '16:49', jobStatus: 'Complete', Duration: '20' },
    {serialNo: 2, ESPJobName: 'RQCCD07X', SQLJobName: 'a', serverName: 'server', jobExecutionDate: '04/09/2020', jobExecutionTime: '16:49', jobStatus: 'Complete', Duration: '20' },
    {serialNo: 3, ESPJobName: 'RQCCD07X', SQLJobName: 'a', serverName: 'server', jobExecutionDate: '04/09/2020', jobExecutionTime: '16:49', jobStatus: 'Complete', Duration: '20' },
    {serialNo: 4, ESPJobName: 'RQCCD07X', SQLJobName: 'a', serverName: 'server', jobExecutionDate: '04/09/2020', jobExecutionTime: '16:49', jobStatus: 'Complete', Duration: '20' },
    {serialNo: 5, ESPJobName: 'RQCCD07X', SQLJobName: 'a', serverName: 'server', jobExecutionDate: '04/09/2020', jobExecutionTime: '16:49', jobStatus: 'Complete', Duration: '20' },
    {serialNo: 6, ESPJobName: 'RQCCD07X', SQLJobName: 'a', serverName: 'server', jobExecutionDate: '04/09/2020', jobExecutionTime: '16:49', jobStatus: 'Complete', Duration: '20' },
    {serialNo: 7, ESPJobName: 'RQCCD07X', SQLJobName: 'a', serverName: 'server', jobExecutionDate: '04/09/2020', jobExecutionTime: '16:49', jobStatus: 'Complete', Duration: '20' },
    {serialNo: 8, ESPJobName: 'RQCCD07X', SQLJobName: 'a', serverName: 'server', jobExecutionDate: '04/09/2020', jobExecutionTime: '16:49', jobStatus: 'Complete', Duration: '20' }
  ];
  constructor() { }

  ngOnInit() {
    this.ESPJobName = this.jobHistoryList[0].ESPJobName;
  }

  getSelectedRowCount(rowCount: number){
    this.rowCount = rowCount / 5;
  }

}
