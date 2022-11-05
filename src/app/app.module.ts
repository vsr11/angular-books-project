import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { BooksService } from './books/books.service';
import { SharedModule } from './shared/shared.module';
import { BooksModule } from './books/books.module';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    BooksModule
   ],
  //  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
