import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceAgencyProfileService} from "../../services/service-agency-profile.service";

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent{
    @Input()
    listServices: any = []
    idAgency: string = ""

    constructor(private serviceAgency: ServiceAgencyProfileService, private activatedRoute: ActivatedRoute, private router: Router){

    }
    ngOnInit(): void{
        this.activatedRoute.params.subscribe(({id}) => {
            this.idAgency = id
        })
    }
    goToService(id: string) {
        this.router.navigate([`service/${id}`]);
    }
    goToAddService(id: string){
        this.router.navigate([`profile-agency/${this.idAgency}/add-service`])
    }
    deleteService(id: string){
        this.serviceAgency.deleteServiceById(id).subscribe(() => {
        })
    }
    updateService(id: string){
        this.router.navigate([`profile-agency/${this.idAgency}/update-service/${id}`])
    }
}
