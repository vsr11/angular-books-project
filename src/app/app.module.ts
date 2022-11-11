import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StarRatingModule } from 'angular-star-rating';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BooksModule } from './books/books.module';
import { UserModule } from './user/user.module';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    AppComponent,
       ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    BooksModule,
    UserModule,
    AppRoutingModule,
    StarRatingModule.forRoot()
   ],
 
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
