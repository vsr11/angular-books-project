import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/user/auth.service';
import { UserService } from 'src/app/user/user.service';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  constructor(
     private authService: AuthService,
     
      private bookService: BooksService){}
  
  @Input() book!: IBook;
  
  get isAuth(){return this.authService.isAuth}
    readBook: boolean = false;
  readList: string[] = []
  @Input() disabled!: boolean;
  user: any;
  
  ngOnInit(): void {
   
  this.bookService.getOneVote(this.authService.getAuth()?.data.user.id, this.book.id)
  .subscribe((d: any) => {
    this.readBook = d.length > 0;
  });
};

onReadHendler(){
     
    if(this.readBook){
      return;
    }
  
  this.bookService.addVote({
    user_id: this.user.id,
    book_id: this.book.id,
    rating: 0,
    review: ''
  }).subscribe();
}
}
