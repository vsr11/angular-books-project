import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/user/auth.service';
import { UserService } from 'src/app/user/user.service';
import { Fun } from "../../shared/fun"
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  constructor(private userService: UserService, private router: Router, private auth: AuthService, private bookService: BooksService){}
  
  @Input() book!: IBook;
  r1=0;
  r2=0;
  isAuth = this.auth.isAuth;
  readBook: boolean = false;
  readList:string[] = []
  
  user:any
  ngOnInit(): void {
    this.r1 = Fun.ratingCount(this.book.rating);
    this.r2 = Fun.averageRating(this.book.rating);

this.userService.getOne(this.isAuth.data.user.id)
.subscribe(d=>{
  this.user=d
  this.readList = this.user.booksRead;
  this.readBook = this.user.booksRead.includes(this.book.id);
})   
  }
  onReadHendler(){  
    this.readList.push(this.book.id);
    this.readBook = this.user.booksRead.includes(this.book.id);
    this.userService.updateUser(this.user.id, {booksRead: this.readList})
    .subscribe(()=>{
      this.router.navigate(['/']);
    });
    
  };
}
