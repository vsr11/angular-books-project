import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from 'src/app/shared/interfaces';
import { IVote } from 'src/app/shared/interfaces/vote';
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
  arr:IVote[]=[]

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private bookService: BooksService,
    private authService: AuthService
  ) { }
  

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.book = undefined;
    this.bookService.getOneBook(this.id!)?.subscribe(book => this.book = book)
    this.isAdmin = this.authService.isAdmin;
  }

  delBook(bookId: string){
    this.bookService.getAllVotesByBook(bookId).subscribe((d)=>{
      d.map((x:any)=>{
        this.bookService.delVote(x.id).subscribe()
      })
    })
    
    this.bookService.delBook(bookId).subscribe(()=>{
      this.router.navigate(['/']);
    });
  }
}
