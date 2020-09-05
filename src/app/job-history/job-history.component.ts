import { Component, OnInit } from '@angular/core';
import { JobHistoryModel } from '../shared/models/jobHistory';
import { JobHistoryService } from '../shared/services/job-history.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.css']
})
export class JobHistoryComponent implements OnInit {
  rowCountList: number[] = [5,10,15,20,25];
  rowCount: number;
  ESPJobName: string = '';
  jobHistoryList: JobHistoryModel[] = [];
  
  constructor(private jobHistoryService: JobHistoryService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (param: Params) => {
        this.ESPJobName = param["id"];
        if(this.ESPJobName != undefined)
          this.searchJobHistory();
      }
    );
  }

  getSelectedRowCount(rowCount: number){
    this.rowCount = Math.floor(rowCount/2);
  }

  searchJobHistory(){
    this.jobHistoryList = this.jobHistoryService.getJobHistoryData(this.ESPJobName);
  }

  getJobCurrentStatus(){
    alert("Current status of this job is: " + this.jobHistoryService.getJobRunningStatus(this.ESPJobName));
  }

  showJobDetail(){
    this.router.navigate(["/jobDetail"],{queryParams: {"id": this.ESPJobName}});
  }

}
