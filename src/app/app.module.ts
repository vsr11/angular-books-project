import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BooksModule } from './books/books.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
       ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    BooksModule,
    UserModule
   ],
  //  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
