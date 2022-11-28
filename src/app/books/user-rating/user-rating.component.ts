import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces';
import { Fun } from "../../shared/fun"
import { BooksService } from '../books.service';

@Component({
  selector: 'app-user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.css']
})
export class UserRatingComponent implements OnInit {
  
  arr=[5,4,3,2,1]
  arr1=[0,0,0,0,0]
  n=0
  constructor(private bookService: BooksService) {   
  }
  @Input() book1!: IBook;
  r1=0;
  r2=0;
 
    ngOnInit(): void {
      this.bookService.getAllVotesByBook(this.book1.id)
      .subscribe(d=>{
          this.n++;
          if(d[0].rating==5){this.arr1[0]++};
          if(d[0].rating==4){this.arr1[1]++};
          if(d[0].rating==3){this.arr1[2]++};
          if(d[0].rating==2){this.arr1[3]++};
          if(d[0].rating==1){this.arr1[4]++};

          // this.r2 = Fun.averageRating(this.arr1)
          this.r2=this.book1.avg
  
    })}
  
  }

