import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces';
import { Fun } from "../../shared/fun"

@Component({
  selector: 'app-user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.css']
})
export class UserRatingComponent implements OnInit {
  
  arr=[5,4,3,2,1]
  constructor() {   
  }
  @Input() book1!: IBook;
  r1=0;
  r2=0;
 
    ngOnInit(): void {
      console.log(this.book1);
        
      this.r1 = Fun.ratingCount(this.book1.rating);
    this.r2 = Fun.averageRating(this.book1.rating)
  
    }
  }


