import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobDetailComponent } from './job-detail/job-detail.component';
import { HomeComponent } from './home/home.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { JobHistoryComponent } from './job-history/job-history.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth-guard.service';
import { AppDetailResolver } from './application-detail/app-detail-resolver.service';

const appRoutes: Routes = [
    {
        path: 'jobDetail', canActivate: [AuthGuard], canActivateChild: [AuthGuard], component: JobDetailComponent, children: [
            { path: ':id', component: JobDetailComponent }
        ]
    },
    { path: '', component: HomeComponent },
    {
        path: 'applicationDetail', canActivateChild: [AuthGuard], component: ApplicationDetailComponent, children: [
            { path: ':id', component: ApplicationDetailComponent, resolve: AppDetailResolver }
        ]
    },
    {
        path: 'jobHistory', canActivate: [AuthGuard], component: JobHistoryComponent, children: [
            { path: ':id', component: JobHistoryComponent }
        ]
    },
    { path: 'not-found', component: ErrorPageComponent },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
      ],
      exports: [RouterModule]
})

export class AppRoutingModule {


}