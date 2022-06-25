import { Component } from '@angular/core';
import {ServiceNormal} from "../../interfaces/service-normal"
import {ServiceHomeService} from "../../services/service-home.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent{
    listPopulars: any = []
    constructor(private offerServices: ServiceHomeService, private router: Router){
    }
    ngOnInit(): void {
        this.offerServices.getServicesPopular().subscribe((data) => {
            this.listPopulars = data
            for(let i = 0; i < this.listPopulars.length; i++){
                this.listPopulars[i].price = parseInt(this.listPopulars[i].price)
                this.listPopulars[i].newPrice = parseInt(this.listPopulars[i].newPrice)
            }
        })
    }
    goToService(id: string) {
        this.router.navigate([`service/${id}`]);
    }


}
