import { Component, OnInit } from '@angular/core';
import { JobDetailService } from '../shared/services/job-detail.service';
import { JobDetailModel } from '../shared/models/jobDetail';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  
  jobDetails: JobDetailModel = new JobDetailModel();

  constructor(private jobDetailService: JobDetailService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      (param: Params) => {
        this.jobDetails.ESPJobName = param["id"];
        if(this.jobDetails.ESPJobName != undefined)
          this.searchJobDetail();
      }
    );
  }

  searchJobDetail(){
    this.jobDetails = this.jobDetailService.getJobDetails(this.jobDetails.ESPJobName);
  }

  getJobHistory(){
    this.router.navigate(["/jobHistory"],{queryParams: {"id": this.jobDetails.ESPJobName}});
  }

  getESPDocument(){

  }

}
