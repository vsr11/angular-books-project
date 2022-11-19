
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from "./add-book/add-book.component";
import { AddComponent } from './add/add.component';
import { BookInfoComponent } from "./book-info/book-info.component";
import { BookItemComponent } from './book-item/book-item.component';
import { BooksListComponent } from "./books-list/books-list.component";
import { EditBookComponent } from './edit-book/edit-book.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books-list'
  },
  {
    path: 'books-list',
    component: BooksListComponent
  },

  {
    path: 'add',
    component: AddBookComponent
  },
  {
    path: 'add1',
    component: AddComponent
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
      path:'edit/:id',
     component:EditBookComponent,
    }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }