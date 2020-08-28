import { Component, OnInit } from '@angular/core';
import { JobDetailService } from '../shared/services/job-detail.service';
import { JobDetailModel } from '../shared/models/jobDetail';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  
  jobDetails: JobDetailModel;
  router: Router;

  constructor(private jobDetailService: JobDetailService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  searchJobdetail(){
    this.jobDetails = this.jobDetailService.getJobDetails(this.jobDetails.ESPJobName);
  }

  getJobHistory(){
    this.router.navigate(['/jobHistory'],{queryParams:{'id':this.jobDetails.ESPJobName}});
  }

  getESPDocument(){

  }

}
