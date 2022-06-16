import {Component, Input, OnInit} from '@angular/core';
import {ServiceNormal} from "../../interfaces/service-normal";
import {ServiceOffer} from "../../interfaces/service-offer";
import {AgenciesService} from "../../../agency-clients/services/agencies.service";
import {ServiceAgencyProfileService} from "../../services/service-agency-profile.service";
import {Agency} from "../../../agency-clients/interfaces/agency";


@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

    constructor(private agencyProfileService: ServiceAgencyProfileService) { }

    serviceData!: ServiceOffer;

    imgUrl!: string;
    description!: string;
    starts!: number;
    priceNormal!: number;
    priceOffer!: number;
    agencyId!: string;

    ngOnInit(): void {
        this.getServiceData("1");
    }
    getServiceData(id: string) {
        this.agencyProfileService.getById(id).subscribe((response: any) => {
            this.serviceData = response;
        })
    }
    listServices2: ServiceNormal[] = [
        {
            imgUrl: "https://www.peruvianandes.com/wp-content/uploads/2017/03/cumbre-de-tocllaraju.jpg",
            description: "Disfruta con Peruvian Andes Adventures en el nevado Auzangate",
            starts: 4,
            price: 500
        },
        {
            imgUrl: "https://cliffsandcanyons.com/wp-content/uploads/2012/03/climbing9.jpg",
            description: "Época de escalamiento en Huandoy, alpinismo para principiantes",
            starts: 4,
            price: 200
        },
        {
            imgUrl: "https://p4.wallpaperbetter.com/wallpaper/308/429/124/himalayas-clouds-landscape-mountains-wallpaper-preview.jpg",
            description: "Alpinismo para principiantes en el Huascarán, se parte de la aventura de vivir",
            starts: 4,
            price: 550
        },
        {
            imgUrl: "https://dr5dymrsxhdzh.cloudfront.net/blog/images/ac0d827e4/2015/11/cost_of_living_in_colorado_1.jpg",
            description: "Alpinismo para principiantes en el Huascarán, se parte de la aventura de vivir",
            starts: 4,
            price: 480
        }
    ]

}
