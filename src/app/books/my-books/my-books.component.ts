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
  isAuth = this.auth.isAuth;
  vote: any | null;
  list: any;
  book: any | undefined;
  
  dis: boolean = false;
  // title:string = '';

<<<<<<< Updated upstream
<<<<<<< Updated upstream
  constructor(private auth: AuthService, private bookService: BooksService){}
=======
  constructor(private router: Router,
     private auth: AuthService, private bookService: BooksService){}

  // clicked=false;
  // clicked1=false;
  // clicked2=false;
>>>>>>> Stashed changes

  ngOnInit(): void {
=======
  constructor(private router: Router,
     private auth: AuthService, private bookService: BooksService){}

    ngOnInit(): void {
>>>>>>> Stashed changes

this.bookService.getAllVotesByUser(this.auth.getAuth().data.user.id)
.subscribe((d:any)=>{
  this.list=d;
   for(let i in d){
  this.bookService.getOneBook(d[i].book_id).subscribe((d1)=>{
    this.list[i].title = d1.title;
    this.list[i].img = d1.img;
     })}
  });

}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
onRatingChanged(event:any, voteId: number){
  
  // this.bookService.getOneVote(this.isAuth.data.user.id, voteId)
  this.bookService.updateVote(voteId, { rating: event }).subscribe();
   console.log(voteId);
=======
clicked1(voteId:number){
  this.router.navigate(['/books/my-vote/', voteId]);
};
>>>>>>> Stashed changes
=======

// onRatingChanged(event:any, voteId: number){
//   // this.clicked1=false;
//   // this.clicked2=true;
//   // this.bookService.getOneVote(this.auth.getAuth().data.user.id, voteId)
//   this.bookService.updateVote(voteId, { rating: event })
//   .subscribe(()=>{});
//   // .subscribe(()=>this.router.navigate(['/books/my-books']));
//   //  console.log(voteId);
clicked1(voteId:number){
  this.router.navigate(['/books/my-vote/', voteId]);
};
>>>>>>> Stashed changes

}

// clicked2(){};
