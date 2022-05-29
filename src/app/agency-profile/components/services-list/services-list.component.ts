import { Component } from '@angular/core';
import {ServiceNormal} from "../../interfaces/ServiceNormal";
import {ServiceOffer} from "../../interfaces/ServiceOffer";

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent{
    listServices: ServiceOffer[] = [
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
