import { Component, Input } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent  {
  constructor(){}
  @Input() book!: IBook;

  get ratingCount() :number {
    return this.book.rating[0]
    +this.book.rating[1]
    +this.book.rating[2]
    +this.book.rating[3]
    +this.book.rating[4];
  }

  get averageRating():number{
    if (this.ratingCount === 0) {
      return 0;
    } else {
      return (
        (this.book.rating[0] * 5 + this.book.rating[1] * 4 
          + this.book.rating[2] * 3 + this.book.rating[3] * 2 + this.book.rating[4]) /
        this.ratingCount
      );
    }
  }
}
