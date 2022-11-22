
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { BooksModule } from './books/books.module';
import { UserModule } from './user/user.module';

import { NgRatingBarModule } from '@zulkarnainshah/ng-rating-bar';

import { AppComponent } from './app.component';
import { AuthService } from './user/auth.service';
import { AddBookComponent } from './books/add-book/add-book.component';
import { isAdminGuard } from './shared/guards/is-admin.guard';
import { UserService } from './user/user.service';



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
    ReactiveFormsModule,
   ],

 
  providers: [AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
