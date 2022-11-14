import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksListComponent } from './books-list/books-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BooksService } from './books.service';
import { CoreModule } from '../core/core.module';
import { BookInfoComponent } from './book-info/book-info.component';
import { NgRatingBarModule } from '@zulkarnainshah/ng-rating-bar';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    BooksListComponent,
    BookItemComponent,
    BookInfoComponent,
   
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgRatingBarModule,
    RouterModule,
  ],
  providers: [BooksService],
  exports:[
    BooksListComponent,
  
  ]
})
export class BooksModule { }
