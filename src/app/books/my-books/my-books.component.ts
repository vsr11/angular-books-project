import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  list: any;
  
  get isAuth(){
    return this.auth.isAuth;
  }
    
  constructor(private router: Router,
     private auth: AuthService, 
     private bookService: BooksService,
     private router1: ActivatedRoute){}

  ngOnInit(): void {
 
this.bookService.getAllVotesByUser(this.auth.getAuth()?.data.user.id)
.subscribe((d:any)=>{
 this.list=d;   
   for(let i in d){
  this.bookService.getOneBook(d[i].book_id)?.subscribe((d1)=>{
    this.list[i].title = d1.title;
       this.list[i].img = d1.img;
     })}
  });
}


clicked(voteId: number){
  const redirect = '/books/' + this.router1.snapshot.url[0].path;
  this.router.navigate(['/books/my-vote/', voteId],
  {queryParams: {redirect: redirect}});
};
}