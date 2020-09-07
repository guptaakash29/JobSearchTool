import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";
import { ApplicationService } from "../shared/services/application.service";
import { ApplicationDetailComponent } from './application-detail.component';
import { ApplicationModel } from '../shared/models/application';

interface Server{
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class AppDetailResolver implements Resolve<ApplicationModel>{
    constructor(private applicationService: ApplicationService){}
    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<ApplicationModel> | Promise<ApplicationModel> | ApplicationModel{
                return this.applicationService.getApplicationDetails(+route.params['id']);
            }
}