
import { IBook } from '../shared/interfaces';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
constructor(private http: HttpClient) { }


getAllBooks(cat = '', sort = ''){ 
  return this.http.get<IBook[]>(`http://localhost:5000/books?categories_like=${cat}&_sort=${sort}`);
}

getOneBook(id:string){
  return this.http.get<IBook>('http://localhost:5000/books/' + id)
}

}