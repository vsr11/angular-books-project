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
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  res = true;
  model!: any;
  // onebook1:any;
  onebook: IBook | undefined;
  book1: IBook | undefined;
  categories: any[] = [];
  checked: boolean = false;
  list: any[] = [];
  filterList: any | undefined;
  checks: string[] = [];
  err1: any;
  flag: boolean = false;

  constructor(private router: Router, private booksService: BooksService) {
    this.model = { isbn: '' };
  }

  ngOnInit(): void {
    catArr.map((x) =>
      this.list.push({
        title: x,
        checked: false,
      })
    );
  }

  findbook() {
    if(this.model.isbn == ''){
      return;
    }

    this.booksService.getByIsbn(this.model.isbn).subscribe((data: any) => {
      let isbn = this.model.isbn;

      this.onebook = Fun.extactBookData(data, { isbn });
      // console.log('!!!', this.onebook);
      this.sb();
    });
  }

  sb() {
    this.booksService.getOneBook(this.onebook!.id).subscribe((data) => {
      this.flag = !!data.id;
    });
  }

  savebook() {
    this.filterList = this.list.filter(
      (item: { checked: any }) => item.checked
    );
    this.filterList.map((x: any) => {
      if (!this.checks.includes(x.title)) {
        this.checks.push(x.title);
        // this.onebook?.categories.concat(this.checks)
      }
    });
    this.onebook!.categories = this.checks;
    this.booksService.addBook(this.onebook).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (e) => {
        this.err1 = e.error;
      }
    );
  }
  exitBtn() {
    this.router.navigate(['/']);
  }
}

// this.booksService.getOneBook(this.onebook?.id!)
// .subscribe(data=>this.book1=data)
