import { Component, OnInit } from '@angular/core';
import { ApplicationModel } from '../shared/models/application';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../shared/services/application.service';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {
  appDetails: ApplicationModel;
  router: Router;
  selectedApplicationId: number = 0;
  selectedJobName: string = '';
  //selectedApplicationName: string = '';
  //selectedApplicationName: string = '';

  constructor(private applicationService: ApplicationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getSelectedApplicationId (event: any) {
    this.selectedApplicationId = +event.target.value;
  }

  getSelectedJobName (event: any) {
    this.selectedJobName = event.target.value;
  }

  searchApplicationDetail(){
    this.appDetails = this.applicationService.getApplicationDetails(this.selectedApplicationId);
  }

  getJobDetails(){
    this.router.navigate(['/jobDetail'],{queryParams:{'name':this.selectedJobName}});
  }

  getESPDocument(){

  }

}
