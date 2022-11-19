import { IBook } from '../shared/interfaces';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class BooksService {
constructor(private http: HttpClient, private router: Router) { }
err1:any;

getAllBooks(cat = '', sort = ''){
  return this.http.get<IBook[]>(`http://localhost:5000/books?categories_like=${cat}&_sort=${sort}`);
}

getOneBook(id: string){
  return this.http.get<IBook>('http://localhost:5000/books/' + id)
}


// import { API_KEY, BOOKS_BASE_URL } from "../constants";

  getByIsbn (isbn: number) {
    return this.http.get<IBook>("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn + "&key=" + environment.API_KEY)
  }

addBook(book: IBook|undefined){
  this.http.post<IBook>('http://localhost:5000/books/', book).subscribe(()=>{
    this.router.navigate(['/books-list'])
  },
  (e)=>{this.err1=e.error}
  );
}

updateBook(bookId: string, data: IBook){
  this.http.patch<IBook>('http://localhost:5000/books/' + bookId, data) 
  .subscribe(()=>this.router.navigate(['/']),
  (e)=>{this.err1=e.error}
  );
 }

 del(bookId: string){
  this.http.delete('http://localhost:5000/books/' + bookId)
  .subscribe(()=>this.router.navigate(['/']),
  (e)=>{this.err1=e.error}
  );
 }
}