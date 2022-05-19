import { Component } from '@angular/core';
import {ServiceNormal} from "../../interfaces/ServiceNormal"

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent{
    listOffers: ServiceNormal[] = [
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
