import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { count } from 'console';
import { reduce } from 'rxjs';
import { IBook } from 'src/app/shared/interfaces';
import { IVote } from 'src/app/shared/interfaces/vote';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-my-votes',
  templateUrl: './my-votes.component.html',
  styleUrls: ['./my-votes.component.css']
})

export class MyVotesComponent implements OnInit {

  title: any;
  myvote: any;
  model: any;
  data2: any;
  newRating: number | undefined;
  count1:number = 0;
  avg1:number = 0;
  bookTitle: any;
  bookImg: any;

  redirect = this.router1.snapshot.queryParams['redirect'] || '/';
  
  constructor(private router1: ActivatedRoute, 
    private bookService: BooksService,
    private router2: Router) {

      this.model = {
        review:''
      }
    }
    
    ngOnInit(): void {
      let p = this.router1.snapshot.params['voteId'];

      this.bookService.getOneVoteById(p)
      .subscribe((d: any) => {
        this.myvote = d[0];
        // console.log('zzz', this.myvote)
        this.model.review = this.myvote.review;

        this.bookService.getOneBook(this.myvote.book_id)
        .subscribe((d: IBook)=>{
        this.bookTitle = d.title;
        this.bookImg = d.img;
        });
    });
  }

  onRatingChanged(event:any){
    this.newRating = event;
  };
  
  saveRew(){
    this.bookService.updateVote(this.myvote.id,
      {
        rating: this.newRating, 
        review: this.model.review })
        .subscribe(()=>{
          this.router2.navigate([this.redirect]);
   });

    this.bookService.getOneBook(this.myvote.book_id)
    .subscribe(d => {
      this.count1 = d.count;
      this.avg1 = d.avg; 
      this.data2 = {      
        avg: (this.avg1 * this.count1 + this.newRating!)/(this.count1+1),
        count: this.count1 + 1
      };
      this.bookService.updateBook(this.myvote.book_id, this.data2).subscribe();
  })
}

  exit(){ this.router2.navigate([this.redirect])}
}