import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent  {
  @Input() book!: IBook ;
 

  

}
