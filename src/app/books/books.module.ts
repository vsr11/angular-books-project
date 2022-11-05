import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BooksListComponent } from './books-list/books-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BooksService } from './books.service';



@NgModule({
  declarations: [
    BooksListComponent,
    BookItemComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [BooksService],
  exports:[
    BooksListComponent,
  
  ]
})
export class BooksModule { }
