import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/user/auth.service';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {
  book: IBook | undefined;
  book1: IBook | undefined;
  id: string | undefined;
  isAdmin: boolean | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BooksService,
    private authService: AuthService
  ) { }
  

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.book = undefined;
    this.bookService.getOneBook(this.id!).subscribe(book => this.book = book)
    this.isAdmin = this.authService.isAdmin;
  }
}
