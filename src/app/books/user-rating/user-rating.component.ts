import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces';
import { IVote } from 'src/app/shared/interfaces/vote';
import { UserService } from 'src/app/user/user.service';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.css'],
})
export class UserRatingComponent implements OnInit {
  arr: any = [5, 4, 3, 2, 1];
  arr1: any = [0, 0, 0, 0, 0];
  arr2: any = [];

  rating1: IVote[] | undefined;
  constructor(
    private bookService: BooksService,
    private userService: UserService
  ) {}
  @Input() book1!: IBook;
  r1 = 0;
  r2 = 0;

  ngOnInit(): void {
    console.log(this.book1);
    
    this.bookService.getAllVotesByBook(this.book1.id).subscribe((d) => {
      this.rating1 = d;
      for (let i = 0; i < d.length; i++) {
        this.arr1[d[i].rating - 1]++;
        this.userService.getOne(d[i].user_id)?.subscribe((d1: any) => {
          this.arr2.push({
            user: d1.name,
            review: d[i].review,
            r2: d[i].rating,
          });
        });
      }
      this.r1 = this.book1.count;
      this.r2 = this.book1.avg;
      console.log(this.r1,this.r2);
      
    });
  }
}