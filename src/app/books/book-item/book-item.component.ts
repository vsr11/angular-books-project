import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'src/app/shared/interfaces';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent  {
  constructor(private activatedRoute: ActivatedRoute){}
  @Input() book!: IBook;
  // id=this.activatedRoute.params.subscribe(console.log)

  

}
