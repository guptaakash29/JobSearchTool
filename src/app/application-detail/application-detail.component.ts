import { Component, OnInit } from '@angular/core';
import { ApplicationModel } from '../shared/models/application';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../shared/services/application.service';
import { JobDetailService } from '../shared/services/job-detail.service';
import { JobModel } from '../shared/models/jobModel';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {
  appDetails: ApplicationModel = new ApplicationModel();
  selectedApplicationId: number = 0;
  selectedJobName: string = '';
  jobList: JobModel[] = [];

  constructor(private applicationService: ApplicationService,
              private route: ActivatedRoute,
              private jobDetailService: JobDetailService,
              private router: Router) { }

  ngOnInit() {
    this.appDetails.ApplicationList = this.applicationService.getAppList();
  }

  getSelectedApplicationId (event: any) {
    this.selectedApplicationId = +event.target.value;
    this.getJobListByAppId(this.selectedApplicationId);
  }

  getJobListByAppId(selectedAppId: number){
    this.appDetails.ESPJobNameList = this.jobDetailService.getJobListByAppId(selectedAppId);
  }

  getSelectedJobName (event: any) {
    this.selectedJobName = event.target.value;
    console.log(this.selectedJobName);
  }

  searchApplicationDetail(){
    this.appDetails = this.applicationService.getApplicationDetails(this.selectedApplicationId);
  }

  getJobDetails(){
    this.router.navigate(['/jobDetail'],{queryParams:{'id':this.selectedJobName}});
  }

  getESPDocument(){

  }

}
