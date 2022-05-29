import { Component } from '@angular/core';
import {ReviewsCommentaries} from "../../interfaces/ReviewsCommentaries";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent{
    listReviews: ReviewsCommentaries[] = [
        {
            imgUrl: " ",
            Name: "Julieta Rodriguez Gala",
            Date: "septiembre de 2021",
            Text: "Tuve una buena experiencia con este servicio. Nunca me había atrevido" +
                "a realizar alpinismo, pero con esta empresa he cambiado mi forma de ver" +
                "las cosas. Los guías son muy serviciales y me ayudaron en muchos tramos," +
                "me enseñaron los mejores lugares del trayecto y siempre estuve segura." +
                "Lo recomiendo, 10/10"
        },
        {
            imgUrl: " ",
            Name: "Sebastián Mazca Ilz",
            Date: "diciembre de 2020",
            Text: "No es mi primera vez con TravelNew, nunca me decepcionan, es cierto que para" +
            "algunos tramos los costos son bastante altos en comparación a los demás, pero no" +
            "lo cambiaría por nada, gracias!!!!!!!!!"
        }
    ]

}
