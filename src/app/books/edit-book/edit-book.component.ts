import {FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IBook } from 'src/app/shared/interfaces';
import { BooksService } from '../books.service';
import { catArr } from 'src/app/shared/categories';
// import { Fun } from 'src/app/shared/fun';
import './edit-book.component.css';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.model = {
      img: '',
      description: '',
      // list:[]
    };
  }

  db_cats: string[] | undefined;
  selectedCats: any[] = [];
  cats: FormGroup = new FormGroup({});
  onebook: IBook | undefined;
  categories = catArr;
  model!: any;
  list: any = [];
  title: string = '';
  checked: boolean = false;
  checks: any = [];
  filterList: any | undefined;

  id = this.route.snapshot.params['id'];

  ngOnInit() {
    this.bookService.getOneBook(this.id)?.subscribe((d) => {
      this.onebook = d;
      this.model.img = this.onebook.img;
      this.model.description = this.onebook.description;

      catArr.map((x) => this.list.push({
         title: x, 
         checked: this.onebook?.categories.includes(x) })
         );
         });
  }

  edit() {
    this.filterList = this.list.filter((item: { checked: any }) => item.checked);
    this.filterList.map((x: any) => {
      if (!this.checks.includes(x.title)) {
        this.checks.push(x.title);
      } 
         });
    this.model.categories = this.checks;
    this.bookService.updateBook(this.id, this.model)
    .subscribe(()=>this.router.navigate(['/books', 'book-info', this.id]));
  }

  del(bookId: string){    
    this.bookService.del(bookId).subscribe(()=>this.router.navigate(['/']));
  }

  exitBtn(){
    this.router.navigate(['/books/book-info/', this.id]);
  }
}
