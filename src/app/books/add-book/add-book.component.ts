import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { catArr } from 'src/app/shared/categories';
import { Fun } from 'src/app/shared/fun';
import { IBook } from 'src/app/shared/interfaces';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent implements OnInit {
  
  constructor(private booksService: BooksService) { 
    this.onebook = undefined;
  }
  
  ngOnInit(): void {
    for(let x of this.categories){
      let y = new FormControl();
      this.cats.addControl(x, y);
    }
  }
    
  categories = catArr;
  onebook: IBook | undefined;
  findbook: IBook | undefined;
  flag: boolean | undefined;
  selectedCats:any[] = [];
  cats: FormGroup = new FormGroup({});

  externalSearch = new FormGroup({
    isbn: new FormControl('')
  }); 

  FindBookHandle () {
    this.booksService.getByIsbn(this.externalSearch.get('isbn')?.value)
      .subscribe((data:any) => {
        let isbn = this.externalSearch.get('isbn')?.value;
        this.onebook = Fun.extactBookData(data, { isbn });
      });
    // setISBN(e.currentTarget.parentNode.parentNode.isbn.value);
  };

FindBookDB (){
  this.booksService.getOneBook(this.onebook?.id!)
  ?.subscribe(data=>this.findbook=data)
}

  AddBookHandle(e: any){
    if(e.target.attributes[1].value === 'checkbox'){
      return;
    }

    let cc=Object.entries(this.cats.value);
    
    for(let c of cc){
      if(c[1]){
        this.selectedCats.push(c[0]);
      }
    }

    
    // e.preventDefault();
    // let categories = [];
    // for (let x of e.currentTarget.parentNode) {
      // if (x.type === "checkbox" && x.checked) {
        // categories.push(x.value);
      // }
      this.onebook!.categories = this.selectedCats;
      this.booksService.addBook(this.onebook);
    }
    // internal.addBook(onebook);

    // setISBN("");
    // setOne({});
    // document.forms[0].reset();
  // }
}