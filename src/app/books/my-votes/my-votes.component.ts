import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IVote } from 'src/app/shared/interfaces/vote';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-my-votes',
  templateUrl: './my-votes.component.html',
  styleUrls: ['./my-votes.component.css']
})

export class MyVotesComponent implements OnInit {

  myvote: any;
  model:any
  newRating:number|undefined;

  constructor(private router: ActivatedRoute, 
    private bookService: BooksService,
    private router2: Router) {
      this.model={
        review:''
         }
     }
  
 
 
  
  ngOnInit(): void {
    let p = this.router.snapshot.params['voteId'];
    this.bookService.getOneVoteById(p)
    .subscribe((d:any)=>{this.myvote = d[0]; 
      console.log(this.myvote)
      this.model.review = this.myvote.review;
      console.log(this.model.review);
    });
    
    
  }

  onRatingChanged(event:any){
    this.newRating = event;
  }
  saveRew(){
    this.bookService.updateVote(this.myvote.id, { rating: this.newRating, review: this.model.review }).subscribe(()=>{
      this.router2.navigate(['/books/my-books'])
    });  
  }
  exit(){ this.router2.navigate(['/books/my-books'])}
}