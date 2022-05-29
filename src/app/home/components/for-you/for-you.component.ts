import { Component, OnInit } from '@angular/core';
import {ServiceNormal} from "../../models/ServiceNormel";

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.css']
})
export class ForYouComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listOffers: ServiceNormal[] = [
    {
      imgUrl: "https://ich.unesco.org/img/photo/thumb/12629-HUG.jpg",
      description: "Expedición para alpinistas en El Huascarán. Oferta limitada por temporada",
      starts: 4,
      price: 500
    },
    {
      imgUrl: "https://www.thyon.ch/UserFiles/local-miniatures/UserFiles/File/Annuaire/annuaire_produits/guid/thumbresize/1920-/guide-montagne.jpg",
      description: "Pasa un buen rato en familia en el Huascarán, más de 10 actividades que puedes realizar",
      starts: 4,
      price: 200
    },
    {
      imgUrl: "https://www.peruvianandes.com/wp-content/uploads/2017/03/cumbre-de-tocllaraju.jpg",
      description: "Disfruta con Peruvian Andes Adventures en el nevado Auzangate",
      starts: 4,
      price: 550
    },
    {
      imgUrl: "https://cliffsandcanyons.com/wp-content/uploads/2012/03/climbing9.jpg",
      description: "Época de escalamiento en Huandoy, alpinismo para principiantes",
      starts: 4,
      price: 480
    }
  ]
}
