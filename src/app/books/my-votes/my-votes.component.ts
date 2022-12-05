import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-my-votes',
  templateUrl: './my-votes.component.html',
  styleUrls: ['./my-votes.component.css']
})

export class MyVotesComponent implements OnInit {
  @Input() vote:any;

  vote1: any;
  model: any;
  data2: any;
  newRating: number | undefined;
  count1:number = 0;
  avg1:number = 0;   
  voted:boolean = false

  redirect = this.router1.snapshot.queryParams['redirect'] || '/';
  
  constructor( private router1: ActivatedRoute, 
    private bookService: BooksService,
    private router2: Router) {    
      this.model = {
        review:'',
        rating:0
      }
    }
   
    ngOnInit(): void {
      
      this.bookService.getOneVoteById(this.vote.id)
      .subscribe((d:any) => {
        this.vote1 = d[0];       
        this.model.review = this.vote1.review;
        this.model.rating = this.vote1.rating;
    });
  }

  onRatingChanged(event:any){
    this.newRating = event;
  };
  
  saveRew(){
    this.bookService.updateVote(this.vote.id,
      {
        rating: this.newRating, 
        review: this.model.review
      })
        .subscribe(()=>{
          this.router2.navigate(['/books/my-books'])
          this.voted = true;
        });

    this.bookService.getOneBook(this.vote.book_id)
    ?.subscribe(d => {
      this.count1 = d.count;
      this.avg1 = d.avg; 
      this.data2 = {      
        avg: (this.avg1 * this.count1 + this.newRating!)/(this.count1+1),
        count: this.count1 + 1
      };
      this.bookService.updateBook(this.vote.book_id, this.data2)
      .subscribe(()=>{this.router2.navigate(['/books/my-books'])});
  }
    )
}
}