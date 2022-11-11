
import { IBook } from '../shared/interfaces';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class BooksService {


constructor(private http: HttpClient) { }
getAllBooks(){
  return this.http.get<IBook[]>('http://localhost:5000/books');
}
getOneBook(id:string){
  return this.http.get<IBook>('http://localhost:5000/books/' + id)
}

}