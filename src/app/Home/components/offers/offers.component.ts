import { Component } from '@angular/core';
import {ServiceOffer} from "../../interfaces/service-offer";
import {ServiceHomeService} from "../../services/service-home.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {

    listOffers: any = []
    constructor(private offerServices: ServiceHomeService, private router: Router){
    }
    ngOnInit(): void {
        this.offerServices.getServicesOffer().subscribe((data) => {
            this.listOffers = data
            for(let i = 0; i < this.listOffers.length; i++){
                this.listOffers[i].price = parseInt(this.listOffers[i].price)
                this.listOffers[i].newPrice = parseInt(this.listOffers[i].newPrice)
            }
            console.log(data)
        })
    }
    goToService(id: string) {
        this.router.navigate([`service/${id}`]);
    }
}
