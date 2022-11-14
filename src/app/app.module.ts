
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { BooksModule } from './books/books.module';
import { UserModule } from './user/user.module';

import { NgRatingBarModule } from '@zulkarnainshah/ng-rating-bar';

import { AppComponent } from './app.component';
import { AuthService } from './user/auth.service';
import { AddBookComponent } from './books/add-book/add-book.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    BooksModule,
    UserModule,
    AppRoutingModule,
    NgRatingBarModule,
    ReactiveFormsModule
   ],

 
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
