import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BooksListComponent } from './books-list/books-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BooksService } from './books.service';
import { CoreModule } from '../core/core.module';
import { BookInfoComponent } from './book-info/book-info.component';
import { NgRatingBarModule } from '@zulkarnainshah/ng-rating-bar';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddComponent } from './add/add.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { UserRatingComponent } from './user-rating/user-rating.component';
import { UserService } from '../user/user.service';

@NgModule({
  declarations: [
    BooksListComponent,
    BookItemComponent,
    BookInfoComponent,
    AddComponent,
    EditBookComponent,
    UserRatingComponent,
    
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgRatingBarModule,
    RouterModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BooksService, UserService],
  exports:[
    BooksListComponent,
  
  ]
})
export class BooksModule { }
