import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute as Router } from '@angular/router';
import { IBook } from 'src/app/shared/interfaces';
import { Fun } from "../../shared/fun"

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  constructor(private router: Router){}
  @Input() book!: IBook;
  r1=0;
  r2=0;

  ngOnInit(): void {  
    this.r1 = Fun.ratingCount(this.book.rating);
    this.r2 = Fun.averageRating(this.book.rating)

  }
}