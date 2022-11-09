import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksListComponent } from './books-list/books-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BooksService } from './books.service';
import { CoreModule } from '../core/core.module';
@NgModule({
  declarations: [
    BooksListComponent,
    BookItemComponent,
   
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [BooksService],
  exports:[
    BooksListComponent,
  
  ]
})
export class BooksModule { }
