import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceAgencyProfileService} from "../../services/service-agency-profile.service";

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent{
    listServices: any = []
    idAgency: string = ""

    constructor(private serviceAgency: ServiceAgencyProfileService, private activatedRoute: ActivatedRoute, private router: Router){

    }
    ngOnInit(): void{
        this.activatedRoute.params.subscribe(({id}) => {
            this.idAgency = id
            this.serviceAgency.getServicesByAgencyId(id).subscribe((data) => {
                this.listServices = data
            })
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
        let index = 0
        for(let i = 0; i < this.listServices.length; i++){
            if(this.listServices[i].id == id){
                index = i
            }
        }
        this.listServices.splice(index, 1)
        console.log(this.listServices)
    }
    updateService(id: string){
        this.router.navigate([`profile-agency/${this.idAgency}/update-service/${id}`])
    }
    getClients(id: string){
        this.router.navigate([`profile-agency/${this.idAgency}/clients/${id}`])
    }
}
