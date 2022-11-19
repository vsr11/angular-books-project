import { Component, OnInit } from '@angular/core';
import { catArr } from 'src/app/shared/categories';
import { Fun } from 'src/app/shared/fun';
import { IBook } from 'src/app/shared/interfaces';
import { BooksService } from '../books.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  model!:any;
  model1:any;
  onebook:IBook|undefined;
  book1:IBook|undefined;
  categories:any[] = [];
  checked:boolean = false;

  constructor( private router: Router,private booksService: BooksService ) { 
    this.model={isbn : ''};
    // this.model1={item.checked}

    
  }

  ngOnInit(): void {
    // this.categories = catArr.map(x=>{{name:x, this.checked: false}})
  }
  findbook(){
    console.log(this.model.isbn);
    
    this.booksService.getByIsbn(this.model.isbn)
    .subscribe((data:any) => {
      let isbn = this.model.isbn;   
      
      this.onebook = Fun.extactBookData(data, { isbn });
      console.log(this.onebook);
      
    })}
    
    savebook(){
      console.log(NgForm);
      
    }
  


  // this.booksService.getOneBook(this.onebook?.id!)
  // .subscribe(data=>this.book1=data)
  

}
