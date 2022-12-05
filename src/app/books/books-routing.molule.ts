import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAdminGuard } from '../shared/guards/is-admin.guard';
import { isLoggedInGuard } from '../shared/guards/is-logged-in.guard';
import { AddComponent } from './add/add.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BooksListComponent } from './books-list/books-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { MyVotesComponent } from './my-votes/my-votes.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books-list',
  },
  {
    path: 'books-list',
    component: BooksListComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },

  {
    path: 'book-item',
    component: BookItemComponent,
  },
  {
    path: 'book-info/:id',
    component: BookInfoComponent,
  },
  {
    path: 'edit/:id',
    canActivate: [isLoggedInGuard, isAdminGuard],
    component: EditBookComponent,
  },
  {
    path: 'my-books',
    component: MyBooksComponent,
  },
  {
    path: 'my-vote/:voteId',
    component: MyVotesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
