
import { IBook } from '../shared/interfaces';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
constructor(private http: HttpClient) { }


getAllBooks(params: any = {}){
  if(params.hasOwnProperty('category')){
    let np = Object();
    np.category_like = params.category;
    params = np;
  }

  if(params.hasOwnProperty('sort')){
    let np = Object();
    np._sort = params.sort;
    params = np;
  }

  let x:any = Object.entries(params);
  x = x.join('&');
  
  while(x.includes(',')){x=x.replace(',','=')}
  if(x){
    x = '?' + x;
  }

  console.log(x);
  return this.http.get<IBook[]>('http://localhost:5000/books' + x);
}

getOneBook(id:string){
  return this.http.get<IBook>('http://localhost:5000/books/' + id)
}

}