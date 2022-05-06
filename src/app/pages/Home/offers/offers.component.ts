import { Component } from '@angular/core';
import {ServiceOffer} from "../interfaces/ServiceOffer";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
    listOffers: ServiceOffer[] = [
        {
            imgUrl: "https://dr5dymrsxhdzh.cloudfront.net/blog/images/ac0d827e4/2015/11/cost_of_living_in_colorado_1.jpg",
            description: "Disfruta de una aventura en la montaña el Huascarán",
            starts: 4,
            priceNormal: 500,
            priceOffer: 480
        },
        {
            imgUrl: "https://p4.wallpaperbetter.com/wallpaper/308/429/124/himalayas-clouds-landscape-mountains-wallpaper-preview.jpg",
            description: "Alpinismo para principiantes en el Huascarán, se parte de la aventura de vivir",
            starts: 4,
            priceNormal: 600,
            priceOffer: 550
        },
        {
            imgUrl: "https://ich.unesco.org/img/photo/thumb/12629-HUG.jpg",
            description: "Expedición para alpinisitas en El Huascarán. Oferta limitada por temporada",
            starts: 4,
            priceNormal: 400,
            priceOffer: 390
        },
        {
            imgUrl: "https://www.thyon.ch/UserFiles/local-miniatures/UserFiles/File/Annuaire/annuaire_produits/guid/thumbresize/1920-/guide-montagne.jpg",
            description: "Pasa un buen rato en familia en el Huascarán, más de 10 actividades que puedes realizar",
            starts: 4,
            priceNormal: 800,
            priceOffer: 785
        }
    ]
}
