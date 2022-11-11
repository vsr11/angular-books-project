
import { Component, OnInit } from '@angular/core';
import {IBook} from '../../shared/interfaces'
import { BooksService } from '../books.service';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
 })
export class BooksListComponent implements OnInit {
  allBooks: IBook[] | undefined; 

  constructor(private bookSer: BooksService) { }



  ngOnInit(): void {
    this.bookSer.getAllBooks().subscribe((data)=>{
      this.allBooks = data; 
      // console.log(this.allBooks);
         
    })
    
    
  }
}
