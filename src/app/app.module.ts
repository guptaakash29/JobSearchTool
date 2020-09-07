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
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { AppDetailResolver } from './application-detail/app-detail-resolver.service';

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
    AppRoutingModule
  ],
  providers: [JobDetailService,JobHistoryService,ApplicationService, AuthGuard, AuthService, AppDetailResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
