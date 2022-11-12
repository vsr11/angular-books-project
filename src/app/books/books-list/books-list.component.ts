
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {IBook} from '../../shared/interfaces'
import { BooksService } from '../books.service';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
 })
export class BooksListComponent implements OnInit {
  allBooks: IBook[] | undefined; 

  constructor(private bookSer: BooksService, private router: ActivatedRoute) { }



  ngOnInit(): void {
    this.router.queryParams.subscribe(qp=>
      this.bookSer.getAllBooks(qp).subscribe((data)=>{
        this.allBooks = data; 
      }
      )
      )
    }
  }
