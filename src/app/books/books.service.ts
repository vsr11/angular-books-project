import { IBook } from '../shared/interfaces';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { IVote } from '../shared/interfaces/vote';

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

  getByIsbn (isbn: number) {
    return this.http.get<IBook>("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn + "&key=" + environment.API_KEY)
  }

addBook(book: IBook|undefined){
  return this.http.post<IBook>('http://localhost:5000/books/', book)
 }

updateBook(bookId: string, data: IBook){
  return this.http.patch<IBook>('http://localhost:5000/books/' + bookId, data);
 }

 del(bookId: string){
  return this.http.delete('http://localhost:5000/books/' + bookId);
 }

 addVote(data: IVote){
  return this.http.post('http://localhost:5000/votes/', data);
 }

 updateVote(id: number, data: any){
  return this.http.patch('http://localhost:5000/votes/' + id, data);
 }

getOneVote(idUser :number, idBook :string): any {
  return this.http.get<IVote>
  ('http://localhost:5000/votes/?user_id='+idUser+
  '&book_id='+idBook);
}

getOneVoteById(id1:number){
  return this.http.get<IVote>
  ('http://localhost:5000/votes/?id='+id1);
}

getAllVotesByUser(idUser :number){
  return this.http.get<IVote>('http://localhost:5000/votes/?user_id='+idUser);
}
getAllVotesByBook(idBook :string){
  return this.http.get<IVote[]>('http://localhost:5000/votes/?book_id='+idBook);
}
}