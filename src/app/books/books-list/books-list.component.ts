import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Fun } from 'src/app/shared/fun';
import {IBook} from '../../shared/interfaces'
import { BooksService } from '../books.service';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
 })
export class BooksListComponent implements OnInit {
  allBooks: IBook[] | undefined; 

  cat:string="";
  constructor(private bookSer: BooksService, private router: ActivatedRoute) { }



  ngOnInit(): void {
    this.router.queryParams.subscribe((qp) => {
      this.bookSer
      .getAllBooks(qp['category'], qp['sort'])
      .subscribe((data) => {
        data = Fun.sortBy(data, qp['sort']);        
        this.allBooks = data;
      }
      )
      this.cat=qp['category'];
    });
    }
  }
