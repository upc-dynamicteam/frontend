import {Component, Input} from '@angular/core';
import {ReviewsCommentaries} from "../../interfaces/reviews-commentaries";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent{
    @Input()
    listReviews: any = []

}
