import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() readonly: boolean = false;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  onClick(rating: number): void {
    if (!this.readonly) {
      this.rating = rating;
      this.ratingChange.emit(this.rating);
    }
  }
}
