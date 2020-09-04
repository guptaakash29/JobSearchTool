import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { JobHistoryComponent } from './job-history/job-history.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';
import { JobDetailService } from './shared/services/job-detail.service';
import { JobHistoryService } from './shared/services/job-history.service';
import { ApplicationService } from './shared/services/application.service';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobDetailComponent,
    ApplicationDetailComponent,
    JobHistoryComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [JobDetailService,JobHistoryService,ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
