import { Component } from '@angular/core';
import {ServiceNormal} from "../../interfaces/service-normal";
import {ServiceHomeService} from "../../services/service-home.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.css']
})
export class ForYouComponent{
    listForYou: any = []
    constructor(private offerServices: ServiceHomeService, private router: Router){
    }
    ngOnInit(): void {
        this.offerServices.getServices().subscribe((data) => {
            this.listForYou = data
            for(let i = 0; i < this.listForYou.length; i++){
                this.listForYou[i].price = parseInt(this.listForYou[i].price)
                this.listForYou[i].newPrice = parseInt(this.listForYou[i].newPrice)
            }
            console.log(data)
        })
    }
    goToService(id: string) {
        this.router.navigate([`service/${id}`]);
    }

}
