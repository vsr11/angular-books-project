import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { UserService } from 'src/app/user/user.service';
import { BooksService } from '../books.service';
import {FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IVote } from 'src/app/shared/interfaces/vote';
import { IBook } from 'src/app/shared/interfaces';
@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  user: any;
  // isAuth = this.auth.isAuth;
  get isAuth(){return this.auth.isAuth}

  vote: any | null;
  list: any;
  book: any | undefined;
  
  dis: boolean = false;
  
  constructor(private router: Router, private auth: AuthService, private bookService: BooksService){}

  ngOnInit(): void {

this.bookService.getAllVotesByUser(this.auth.getAuth()?.data.user.id)
.subscribe((d:any)=>{
  this.list=d;
   
   for(let i in d){
  this.bookService.getOneBook(d[i].book_id).subscribe((d1)=>{
    this.list[i].title = d1.title;
    this.list[i].img = d1.img;
     })}
  });
}
onRatingChanged(event:any, voteId: number){
 
  this.bookService.updateVote(voteId, { rating: event }).subscribe();
  this.router.navigate(['/books/my-vote/', voteId]);
};

clicked1(voteId:number){
  this.router.navigate(['/books/my-vote/', voteId]);
};

}

// clicked2(){};
