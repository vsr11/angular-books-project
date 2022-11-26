import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/user/auth.service';
import { UserService } from 'src/app/user/user.service';
import { BooksService } from '../books.service';
import {FormGroup } from '@angular/forms';


@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  isAuth = this.auth.isAuth;
  user:any;
  dis:boolean = false;
  readList:string[] = [];
  readList1:any[]=[];
  model!: any;
  // star:number=0;
  // review:string='';
  

  
  constructor(private userService: UserService, 
    // private router: Router, 
    private auth: AuthService, private bookService: BooksService
    ){
      // this.model = {   
      //   review: '' 
      // };
    }

    
    onRatingChanged(event:any){
      this.dis=true;
       console.log(event);
  
    }
  ngOnInit(): void {
    this.userService.getOne(this.auth.getAuth().data.user.id).subscribe(d=>{
      this.user=d
      this.readList = this.user.booksRead;
          
})
this.bookService.getAllBooks()
.subscribe(d=>{
  this.readList1=d
   this.readList1=this.readList1.filter(x=>this.readList.includes(x.id))
   })

for(let i=0;i<this.readList1.length; i++){
  // this.model.review[i] = '';
  this.readList1[i].star=0;
  this.readList1[i].review='';
  this.model.review=this.readList1[i].review}
}

vote(){
console.log(this.model);

}
}
