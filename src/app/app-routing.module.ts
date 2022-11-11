import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookInfoComponent } from './books/book-info/book-info.component';
import { BookItemComponent } from './books/book-item/book-item.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books-list'
  },
  {
    path: 'books-list',
    component: BooksListComponent
  },

   {
    path: 'book-item',
    component: BookItemComponent,
  },
  {
    path: 'book-info/:id',
    component: BookInfoComponent,
    // canActivate: [ParamsActivate],
    // data: {
    //   paramsActivate: ['id'],
    //   paramsActivateRedirectUrl: '/user-list'
    },
    {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
