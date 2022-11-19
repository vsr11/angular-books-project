import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Route,Router} from '@angular/router';
import { IBook } from 'src/app/shared/interfaces';
import { BooksService } from '../books.service';

import { catArr } from 'src/app/shared/categories';
// import { Fun } from 'src/app/shared/fun';

import "./edit-book.component.css";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private bookService: BooksService, private route: ActivatedRoute) {
this.model={
  img:'',
  description:'',
  checked:[]
}
  }

onebook:IBook|undefined;
categories = catArr;
model!:any;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.bookService.getOneBook(id).subscribe((d)=>{
    this.onebook=d;
    this.model.img = this.onebook.img;
    this.model.description = this.onebook.description;
    
    });       
  } 
  edit() {
// this.bookService.updateBook(id, this.model)    
console.log(this.model);
console.log(this.model.img);
  }
  };